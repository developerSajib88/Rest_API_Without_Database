const { v4: uuidv4 } = require('uuid');

const user = [
  {
    id: uuidv4,
    name: 'Sajib Hasan',
    age: '22',
    phone: '0192383723',
    email: 'mdsajibhossaintalukder@gmail.com',
  },

  {
    id: uuidv4,
    name: 'Tamim Hasan',
    age: '23',
    phone: '019238373223',
    email: 'tamim@gmail.com',
  },

  {
    id: uuidv4,
    name: 'Sajid',
    age: '25',
    phone: '019238378792',
    email: 'sajid@gmail.com',
  },

];

module.exports = user;
