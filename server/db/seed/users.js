
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,email:'victor@gmail.com', name: 'victor'},
        {id: 2, email:'victor2@gmail.com', name: 'vic'},
        {id: 3, email:'vic@gmail.com', name: 'victor AA'}
      ]);
    });
};
