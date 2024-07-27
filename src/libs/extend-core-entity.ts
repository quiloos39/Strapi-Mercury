import { v4 as uuidv4 } from "uuid";
import deepmerge from "deepmerge";

export const extendCoreService = (contentType, strapi) => ({
  async create(ctx) {
    const uniqueId = `cart_${uuidv4().replace(/-/g, "")}`;
    ctx.request.body.data.uuid = uniqueId;

    const entity = await super.create(ctx);
    delete entity.data.id;

    return entity;
  },

  // async findOne(ctx, query) {
  //   const findManyQuery = {
  //     fields: [],
  //     filters: {
  //       uuid: {
  //         $eq: ctx,
  //       },
  //     },
  //   };

  //   const [originalEntity] = await strapi.entityService.findMany(
  //     contentType,
  //     findManyQuery
  //   );

  //   if (!originalEntity) {
  //     return null;
  //   }

  //   const entity = await super.findOne(originalEntity.id, query);
  //   delete entity.id;
  //   return entity;
  // },
});
