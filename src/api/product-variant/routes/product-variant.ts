/**
 * product-variant router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::product-variant.product-variant",
  {
    only: ["find", "findOne"],
    config: {
      find: {
        auth: false,
      },
      findOne: {
        auth: false,
      },
    },
  }
);
