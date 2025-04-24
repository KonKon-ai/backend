/**
 * landing-page controller
 */

import { factories } from "@strapi/strapi";
import type { Context } from "koa";

export default factories.createCoreController(
  "api::landing-page.landing-page",
  ({ strapi }) => ({
    async find(ctx: Context) {
      // Fetch the default landing page data (uses Strapi's built-in logic)
      const { data, meta } = await super.find(ctx);

      // Fetch 5 latest published articles, sorted by createdAt DESC
      const latestArticles = await strapi.entityService.findMany(
        "api::article.article",
        {
          sort: { createdAt: "desc" },
          limit: 5,
          populate: {
            author: {
              fields: ["fullName"], // Include other fields you need
              populate: {
                image: { fields: ["url", "alternativeText"] }, // Populate the author's image
              },
            },
            featuredImage: { fields: ["url", "alternativeText"] },
            contentTags: { fields: ["title"] },
          },
        }
      );

      // Inject the articles into the landing page attributes
      return {
        data: {
          ...data,
          attributes: {
            ...data.attributes,
            latestArticles,
          },
        },
        meta,
      };
    },
  })
);
