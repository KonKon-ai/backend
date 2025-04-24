/**
 * `news-article-populate` middleware
 */

import type { Core } from "@strapi/strapi";

// const populate = {
//   articles: {
//     populate: {
//       author: {
//         populate: {
//           image: {
//             fields: ["alternativeText", "url"],
//           },
//         },
//       },
//       contentTags: {
//         fields: ["title", "description"],
//       },
//     },
//   },
// };

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In news-article-populate middleware.");
    // ctx.query.populate = populate;

    await next();
  };
};
