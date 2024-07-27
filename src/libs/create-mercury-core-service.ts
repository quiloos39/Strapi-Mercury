import { Common, factories } from "@strapi/strapi";
import { v4 as uuidv4 } from "uuid";
import deepmerge from "deepmerge";
import { ContentType } from "@strapi/types/dist/types/core-api/service";

export function createMercuryCoreService(collectionId, strapiFn?) {
  return factories.createCoreService(collectionId, ({ strapi }) => ({
    async create(ctx) {
      ctx.data.uuid = `cart_${uuidv4().replace(/-/g, "")}`;
      const entity = await super.create(ctx);
      delete entity.id;
      return entity;
    },

    async findOne(ctx, params) {
      const entityQuery = deepmerge(
        {
          filters: {
            uuid: {
              $eq: ctx,
            },
          },
        },
        params
      ) as any;
      console.log(entityQuery);
      const [entity] = (await strapi.entityService.findMany(
        collectionId,
        entityQuery
      )) as any;
      console.log(entity);
      delete entity.id;
      return entity;
    },
    ...Object.bind(strapiFn, { strapi }),
  }));
}
