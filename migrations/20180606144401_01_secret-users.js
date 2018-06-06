exports.up = function(knex, Promise) {
  return knex.schema.createTable('secretusers', function(table) {
    table.increments('id')
    table.text('fName').notNullable()
    table.text('lName').notNullable()
    table.text('about')
    table.text('email').notNullable()
    table.text('ratings').notNullable()
    table.text('accountType').notNullable()
    table.text('userPassword').notNullable()
    table.text('userName').notNullable()
    table.text('fiveRateDates')
    table.text('loginDates')
    table.text('other')
    table.timestamps('timeStamp')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('secretusers')
}
