const db = require('./connection');
const { User, Product, Category, Brand } = require('../models');
const { EdingSeed, BoardSeed, StoneSeed, BrandSeed} = require('./SeedData')

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Stone' },
    { name: 'Pre Finished Board' },
    { name: 'Edging' },
  ]);
  
  console.log('categories seeded');
 
  await Brand.deleteMany();

  const brand = await Brand.insertMany([
    // had do i add by the SeedData
  ]);
  
  console.log('brands seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // had do i add by the SeedData
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Aaron',
    lastName: 'Sando',
    phoneNumber: "040-727-2762",
    email: 'Aaron@Charactergroup.com.au',
    password: 'Password01',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
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