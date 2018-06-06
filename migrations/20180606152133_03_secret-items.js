exports.up = function(knex, Promise) {
  return knex.schema.createTable('secretitems', function(table) {
    table.increments('id')
    table.text('department').notNullable()
    table.text('subDepartment')
    table.integer('year').notNullable()
    table.text('titleBrand').notNullable()
    table.text('authorModel').notNullable()
    table.text('trim')
    table.text('specs')
    table.text('picUrl').notNullable()
    table.text('buyLinkUrl').notNullable()
    table.text('details')
    table.text('other')
    table.text('justInCase')
    table.timestamps('timeStamp')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('secretitems')
}
