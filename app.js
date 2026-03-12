const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

const pageContent = {
  home: {
    key: 'home',
    leftHeadline: 'Welcome to our flower shop, where every bouquet is crafted with care and elegance.',
    leftText:
      'We offer a beautiful selection of fresh flowers for every occasion. From romantic roses to cheerful seasonal arrangements, our designs are made to bring joy, warmth, and color to your special moments.',
    rightHeadline:
      'Discover our featured floral arrangements, designed to make every celebration more memorable and meaningful.'
  },
  about: {
    key: 'about',
    leftHeadline: 'About us',
    leftText:
      'Floral Design is a local team of florists passionate about creating elegant bouquets and personalized flower gifts. We focus on freshness, artistic style, and thoughtful service for every customer.',
    rightHeadline:
      'Our mission is to help you express emotions through flowers for birthdays, anniversaries, weddings, and everyday moments.'
  },
  bouquets: {
    key: 'bouquets',
    leftHeadline: 'Our bouquets',
    leftText:
      'Explore hand-tied bouquets with roses, lilies, tulips, sunflowers, and seasonal blooms. Each design is arranged carefully to match your preferred color tone and occasion.',
    rightHeadline:
      'Choose from classic, premium, and custom bouquet collections with same-day preparation options.'
  },
  specials: {
    key: 'specials',
    leftHeadline: 'Special offers',
    leftText:
      'Check out our weekly specials, holiday combos, and limited-time discounts. We regularly update featured products so you can get beautiful flowers at great value.',
    rightHeadline:
      'Follow our specials page for Valentine, Women\'s Day, and seasonal promotional sets.'
  },
  contacts: {
    key: 'contacts',
    leftHeadline: 'Contact us',
    leftText:
      'Need help choosing flowers? Reach us by phone at (0123) 456 789 or email floraldesign@example.com. Our shop is open daily from 8:00 AM to 8:00 PM.',
    rightHeadline:
      'You can also visit us directly for custom consultation and event flower planning.'
  }
};

const renderPage = (pageKey) => (req, res) => {
  const content = pageContent[pageKey] || pageContent.home;
  res.render('index', { page: content });
};

app.get(['/', '/home', '/index', '/index.ejs'], renderPage('home'));
app.get(['/about', '/about-us'], renderPage('about'));
app.get('/bouquets', renderPage('bouquets'));
app.get('/specials', renderPage('specials'));
app.get('/contacts', renderPage('contacts'));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
