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
        sort = "createdAt:desc",
      } = ctx.query;

      const filters: any = { publishedAt: { $ne: null } }; // Exclude drafts

      // Fetch articles with the required fields
      const { results, pagination } = await strapi.entityService.findPage(
        "api::news-article.news-article", // Fetch from the correct collection type
        {
          filters,
          sort,
          fields: ["heading", "description"], // Include heading and description fields
          populate: {
            articles: {
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
            },
            blocks: true, // Include dynamic zone blocks
          },
          page: Number(page),
          pageSize: Number(pageSize),
        }
      );

      // Return the response with the required structure
      return {
        data: results.map((article) => ({
          id: article.id,
          attributes: {
            ...article,
          },
        })),
        meta: pagination,
      };
    },
  })
);