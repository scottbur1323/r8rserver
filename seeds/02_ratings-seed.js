exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "secretratings"; ALTER SEQUENCE secretratings_id_seq RESTART WITH 2;')
    .then(function () {
      var rating = [{
        id: 1,
        user: 'scottbur1323',
        itemNumber: 1,
        starRating: 3,
        review: 'Such a great car!',
        other: '',
        justInCase: '',
      }]
      return knex('secretratings').insert(rating)
    })
}
