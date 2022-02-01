const db = require('./connection');
const { User, Product, Category, Brand } = require('../models');
const { categoriesSeed } = require('./categoriesSeed');
const { brandSeed } = require('./brandSeed'); 
const { productSeed } = require('./productSeed');

db.once('open', async () => {
  // setup for Categories
  await Category.deleteMany();

  await Category.insertMany(categoriesSeed);
  
  console.log('categories seeded');

  // setup for Brands
  await Brand.deleteMany();

  await Brand.collection.insertMany(brandSeed)
  
  console.log('brands seeded');

  // setup for Products
  await Product.deleteMany();

  await Product.collection.insertMany(productSeed)

  console.log('products seeded');

  // setup for Users
  await User.deleteMany();

  await User.create({
    firstName: 'Aaron',
    lastName: 'Sando',
    phoneNumber: "040-727-2762",
    email: 'Aaron@Charactergroup.com.au',
    password: 'Password01',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    phoneNumber: "042-345-6789",
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();

});