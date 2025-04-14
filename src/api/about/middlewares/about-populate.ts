/**
 * `about-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  listItem: true,
  socialLinks: {
    populate: {
      image: {
        fields: ['alternativeText', 'url'],
      },
    },
  },
  video: true,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In about-populate middleware.');
    ctx.query.populate = populate;
    await next();
  };
};
