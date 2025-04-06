/**
 * sponsors-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::sponsors-page.sponsors-page', {
    config: {
        find: {
        middlewares: ['api::sponsors-page.sponsors-page-populate'],
        },
    },
});
