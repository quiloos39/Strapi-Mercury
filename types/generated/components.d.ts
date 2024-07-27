import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductDimensions extends Schema.Component {
  collectionName: 'components_product_dimensions';
  info: {
    displayName: 'Dimensions';
    icon: 'puzzle';
  };
  attributes: {
    width: Attribute.Decimal;
    height: Attribute.Decimal;
    length: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.dimensions': ProductDimensions;
    }
  }
}
