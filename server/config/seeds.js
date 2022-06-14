const db = require('./connection');
const { User, Post, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
      title: 'I Need help!',
      description:
        'I have a problem here it is: 1+1=?',
      image: 'helplogo.jpg',
      category: categories[0]._id,
      likesNum: 0
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'test1',
    lastName: 'test1',
    email: 'test1@testmail.com',
    password: 'password12345',
    posts: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'test2',
    lastName: 'test2',
    email: 'test2@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
