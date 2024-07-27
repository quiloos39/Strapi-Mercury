export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    await strapi.entityService.create("api::country.country", {
      data: {
        name: "United States",
        code: "US",
        iso_2: "US",
        iso_3: "USA",
      },
    });

    await strapi.entityService.create("api::currency.currency", {
      data: {
        name: "United States Dollar",
        code: "USD",
        symbol: "$",
      },
    });
  },
};
