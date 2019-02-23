exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("reviews", function(table) {
      table.increments("review_id").primary();
      table.string("username");
      table.timestamp("created_at");
      table.text("description");
      table.string("image_url");
      table.integer("user_rating");
      table.integer("accuracy");
      table.integer("communication");
      table.integer("cleanliness");
      table.integer("location");
      table.integer("check_in");
      table.integer("value");
      table.integer("listing_id");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("reviews")]);
};
