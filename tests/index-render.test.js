const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ejs = require('ejs');

const templatePath = path.join(__dirname, '..', 'views', 'listings', 'index.ejs');
const template = fs.readFileSync(templatePath, 'utf8');

test('index template renders all listings without referencing an undefined listing variable', async () => {
  const html = await ejs.render(template, {
    allListings: [{
      _id: 'listing-1',
      title: 'Beach View Villa',
      price: 1200,
      image: 'https://example.com/beach.jpg'
    }],
    layout: () => ''
  }, {
    filename: templatePath,
    views: path.join(__dirname, '..', 'views')
  });

  assert.match(html, /Beach View Villa/);
  assert.match(html, /listing-1/);
});
