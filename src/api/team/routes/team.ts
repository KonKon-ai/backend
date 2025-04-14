/**
 * team router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::team.team', {
    config: {
        find: {
            middlewares: ['api::team.team-page-populate'],
        },
    },
});
