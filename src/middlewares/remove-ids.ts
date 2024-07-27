/**
 * `remove-ids` middleware
 */

import { Strapi } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    await next();
    console.log("ctx.body", ctx.body);
  };
};
