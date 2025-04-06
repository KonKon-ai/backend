/**
 * `sponsors-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  sponsors: {
    populate: {
      sponsor: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In sponsors-page-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
