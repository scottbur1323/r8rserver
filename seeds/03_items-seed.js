exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "secretitems"; ALTER SEQUENCE secretitems_id_seq RESTART WITH 2;')
    .then(function () {
      var rating = [{
        id: 1,
        department: 'auto',
        subDepartment: '',
        year: 2017,
        titleBrand: 'Subaru',
        authorModel: 'Forester',
        trim: 'Premium Edition',
        specs: '',
        picUrl: 'https://st.motortrend.com/uploads/sites/10/2016/09/2017-subaru-forester-limited-cvt-suv-angular-front.png',
        buyLinkUrl: 'https://www.subaru.com/',
        details: null,
        other: null,
        justInCase: null
      }]
      return knex('secretitems').insert(rating)
    })
}
