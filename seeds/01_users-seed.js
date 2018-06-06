exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "secretusers"; ALTER SEQUENCE secretusers_id_seq RESTART WITH 3;')
    .then(function () {
      var user = [{
        id: 1,
        fName: 'Chance',
        lName: 'Scott-Burke',
        about: 'I am a cofounder of RATR',
        email: 'scottbur@gmail.com',
        ratings: '',
        accountType: 'admin',
        userPassword: 'chance1',
        userName: 'scottbur1323',
        fiveRateDates: '',
        loginDates: '',
        other: ''
      },{
        id: 2,
        fName: 'Shaun',
        lName: 'Seidman',
        about: 'I am a cofounder of RATR',
        email: 'shaunbseidman@gmail.com',
        ratings: '',
        accountType: 'admin',
        userPassword: 'shaun1',
        userName: 'shaunbseidman',
        fiveRateDates: '',
        loginDates: '',
        other: ''
      }]
      return knex('secretusers').insert(user)
    })
}
