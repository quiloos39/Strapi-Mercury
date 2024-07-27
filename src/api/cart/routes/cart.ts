/**
 * cart router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::cart.cart", {
  prefix: "",
  only: ["findOne", "create", "update"],
  except: [],
  config: {
    findOne: {
      auth: false,
    },
    create: {
      auth: false,
      policies: [],
    },
    update: {
      auth: false,
      policies: [],
    },
  },
});
