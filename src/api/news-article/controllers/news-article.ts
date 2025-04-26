/**
 * news-article controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::news-article.news-article", // Use the correct collection type
  ({ strapi }) => ({
    async find(ctx) {
      const {
        page = 1,
        pageSize = 10,
        tags, // Comma-separated list of tags
        search, // Search keyword
        sort = "desc", // Order: "asc" or "desc"
      } = ctx.query;

      // Determine the sorting logic
      const sortField = {
        createdAt: sort === "asc" ? "asc" : "desc",
      } as Object;

      // Fetch the news-article single type data
      const newsArticle = await strapi.entityService.findOne(
        "api::news-article.news-article",
        1, // Assuming the single type has an ID of 1
        {
          fields: ["heading", "description"], // Include heading and description fields
          populate: {
            blocks: true, // Include dynamic zone blocks
          },
        }
      );

      // Build filters dynamically
      const filters: Record<string, any> = {};

      // Filter by search keyword if provided
      if (search) {
        filters.$or = [
          { title: { $containsi: search } },
          { description: { $containsi: search } },
          { content: { $containsi: search } },
        ];
      }

      // Filter by tags if provided
      if (tags) {
        const tagList = (tags as string).split(",").map((tag) => tag.trim());

        filters.$and = [
          ...(filters.$or ? [{ $or: filters.$or }] : []), // Include search conditions if they exist
          ...tagList.map((tag) => ({
            contentTags: {
              title: { $eq: tag },
            },
          })),
        ];
      }

      // Fetch the latest articles dynamically
      const articlesCollection = await strapi.entityService.findMany(
        "api::article.article",
        {
          filters,
          sort: sortField,
          fields: [
            "title",
            "description",
            "slug",
            "createdAt",
            "updatedAt",
            "content",
          ], // Include title and description fields
          populate: {
            author: {
              fields: ["fullName"],
              populate: {
                image: { fields: ["url", "alternativeText"] },
              },
            },
            featuredImage: { fields: ["url", "alternativeText"] },
            contentTags: { fields: ["title"] },
          },
          page: Number(page),
          pageSize: Number(pageSize),
        }
      );

      // Return the combined response
      return {
        data: {
          id: newsArticle.id,
          attributes: {
            ...newsArticle,
            articlesCollection, // Append the dynamically fetched articles
          },
        },
        meta: {
          pagination: {
            page: Number(page),
            pageSize: Number(pageSize),
            total: articlesCollection.length, // Total articles fetched
          },
        },
      };
    },
  })
);
