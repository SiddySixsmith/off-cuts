const db = require('./connection');
const { User, Product, Category, Brand, ColourList } = require('../models');
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
  let categories = await Category.find()
  // console.log(category)
  let seedBrand = brandSeed.map((brand) => {
    const c = categories.filter((category) => brand.category.includes(category.name)).map(cat => cat._id);

    return { ...brand, category: c }

  })

  await Brand.collection.insertMany(seedBrand)

  console.log('brands seeded');

  // setup for Products
  await Product.deleteMany();
  categories = await Category.find()
  let brands = await Brand.find()
  let coloursList = []

  let seedProducts = productSeed.map((product) => {
    const c = categories.find((stockType) => stockType.name === product.stockType)
    const b = brands.find((brand) => brand.name === product.brand)
    // make a list of colours
    if (!coloursList.includes(product.colour)) coloursList.push(product.colour)

    return { ...product, stockType: c._id, brand: b._id }

  })

  coloursList = coloursList.sort().map((name) => ({ name }))
  console.log(coloursList)

  await ColourList.collection.insertMany(coloursList)
  await Product.collection.insertMany(seedProducts)
  // console.log(seedProducts)
  console.log('products seeded');

  // setup for Users
  await User.deleteMany();

  await User.create({
    firstName: 'Aaron',
    lastName: 'Sando',
    phoneNumber: "0407272762",
    email: 'Aaron@Charactergroup.com.au',
    password: 'Password01',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    phoneNumber: "0423456789",
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();

});