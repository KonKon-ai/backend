/**
 * `team-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  teamMember: {
    populate: {
      image: {
        fields: ["alternativeText", "url"],
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In team-page-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
