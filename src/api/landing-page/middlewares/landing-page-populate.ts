/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          submit: true,
        },
      },
      "blocks.sponsors": {
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
      "blocks.parallax-banner": {
        populate: {
          parallaxBanner: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      "blocks.story-categories": {
        populate: {
          category: {
            populate: {
              image: {
                fields: ["alternativeText", "url"],
              },
            },
          },
        },
      },
      "blocks.signup-banner": {
        populate: {
          signupLink: true,
          logoLink: {
            populate: {
              image: {
                fields: ["alternativeText", "url"],
              },
            },
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
