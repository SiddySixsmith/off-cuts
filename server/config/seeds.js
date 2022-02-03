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
  let category = await Category.find()
  // console.log(category)
  let seedBrand = brandSeed.map(( brand ) => {
    const c = category.find((category)=> category.name == brand.category)

    return {...brand, category: c._id}

  })

  await Brand.collection.insertMany(seedBrand)
  
  console.log('brands seeded');

  // setup for Products
  await Product.deleteMany();
  let categories = await Category.find()
  let brands = await Brand.find()

  let seedProducts = productSeed.map(( product ) => {
    const c = categories.find((stockType)=> stockType.name === product.stockType)
    const b = brands.find((brand) => brand.name === product.brand)

    return {...product, stockType: c._id , brand: b._id}

  })

  await Product.collection.insertMany(seedProducts)
// console.log(seedProducts)
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