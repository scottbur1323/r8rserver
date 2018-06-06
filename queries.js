const database = require("./db/knex.js")

module.exports = {
  listusers(){
    return database('secretusers').select()
  },
  listratings(){
    return database('secretratings').select()
  },
  listitems(){
    return database('secretitems').select()
  }
  // ,
  // read(id){
  //   return database('users').where("id", id).first()
  // },
  // create(meal){
  //   return database('users').insert(meal).returning('*').then(record => record[0])
  // },
  // update(id, meal){
  //   return database("users").update(meal).where("id", id).returning("*").then(record => record[0])
  // },
  // delete(id){
  //   return database("users").delete().where("id", id)
  // }
}
