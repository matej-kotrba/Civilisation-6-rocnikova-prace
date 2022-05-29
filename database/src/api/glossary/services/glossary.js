'use strict';

/**
 * glossary service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::glossary.glossary');
