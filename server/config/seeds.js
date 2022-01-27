const db = require('./connection');
const { User, Product, Category, Brand } = require('../models');

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
    { 
      name: 'EssaStone',
      category: categories[0]._id, 
    },
    { 
      name: 'QStone',
      category: categories[0]._id,  
    },
    { 
      name: 'CaesarStone',
      category: categories[0]._id,  
    },
  ]);
  
  console.log('brands seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      colour: "Chalkstone",
      finish: "Gloss",
      length: "2000",
      width: "650",
      thickness: "20",
      price: 131.01,
      product_code: "979046",
      image: "https://www.laminex.com.au/medias/p-ES-Chalkstone-RGB-1200x1200-LR.jpg-1200Wx979H?context=bWFzdGVyfGltYWdlc3wzMjQ4MzV8aW1hZ2UvanBlZ3xoMTQvaGU1Lzg4NjY5MjEwNTQyMzgvcF9FU19DaGFsa3N0b25lX1JHQl8xMjAweDEyMDBfTFIuanBnXzEyMDBXeDk3OUh8ZWJmYThmYjdhMjcyZGYzZmNiOWJkNmQ1MzBkNTg2ZjIwMzFiOTc2OGI4MzdkYWZlNGE2NWFjNDhhYTExMTlhMw",
      brand: brand[0]._id,
    },
    {
      colour: "Grey Glitter",
      finish: "Gloss",
      length: "1500",
      width: "1600",
      thickness: "20",
      price: "89.00",
      product_code: "970263",
      image: "https://www.qstone.com.au/UploadImages/colour_palette_gallery/5fbb46221fd0f_grey-glitter.jpg",
      brand: brand[1]._id,    
    },
    {
      colour: "Snow",
      finish: "Polished",
      length: "2850",
      width: "750",
      thickness: "20",
      price: "111.89",
      product_code: "1214132000",
      image: "https://www.caesarstone.com.au/Portals/0/Images/Colours/2141.jpg",
      brand: brand[2]._id,           
    },
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