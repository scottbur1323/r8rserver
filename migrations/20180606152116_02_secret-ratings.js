exports.up = function(knex, Promise) {
  return knex.schema.createTable('secretratings', function(table) {
    table.increments('id')
    table.text('user').notNullable()
    table.integer('itemNumber').notNullable()
    table.integer('starRating').notNullable()
    table.text('review').notNullable()
    table.text('other')
    table.text('justInCase')
    table.timestamps('timeStamp')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('secretratings')
}
