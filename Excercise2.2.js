const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

// Your hotel data here (as provided above)
let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];



//1 Sort By Pricing
app.get('/hotels/sort/pricing', (req, res) => {
  const { pricing } = req.query;

  if (!pricing || (pricing !== 'low-to-high' && pricing !== 'high-to-low')) {
    return res.status(400).json({ error: 'Invalid or missing "pricing" query parameter.' });
  }

  // Sort hotels based on the pricing condition
  const sortedHotels = [...hotels].sort((a, b) => {
    return pricing === 'low-to-high' ? a.price - b.price : b.price - a.price;
  });

  res.json(sortedHotels);
});


// Endpoint 2: Sort by rating
app.get('/hotels/sort/rating', (req, res) => {
  const { rating } = req.query;
  let result = [...hotels];

  result.sort((a, b) =>
    rating === 'low-to-high' ? a.rating - b.rating : b.rating - a.rating
  );
  res.json({ hotels: result });
});

// Endpoint 3: Sort by reviews
app.get('/hotels/sort/reviews', (req, res) => {
  const { reviews } = req.query;
  let result = [...hotels];

  result.sort((a, b) =>
    reviews === 'least-to-most' ? a.reviews - b.reviews : b.reviews - a.reviews
  );
  res.json({ hotels: result });
});

// Endpoint 4: Filter by amenity
app.get('/hotels/filter/amenity', (req, res) => {
  const { amenity } = req.query;
  let result = hotels.filter(
    (hotel) => hotel.amenity.toLowerCase() === amenity.toLowerCase()
  );
  res.json({ hotels: result });
});

// Endpoint 5: Filter by country
app.get('/hotels/filter/country', (req, res) => {
  const { country } = req.query;
  let result = hotels.filter(
    (hotel) => hotel.country.toLowerCase() === country.toLowerCase()
  );
  res.json({ hotels: result });
});

// Endpoint 6: Filter by category
app.get('/hotels/filter/category', (req, res) => {
  const { category } = req.query;
  let result = hotels.filter(
    (hotel) => hotel.category.toLowerCase() === category.toLowerCase()
  );
  res.json({ hotels: result });
});

// Endpoint 7: Send all hotels
app.get('/hotels', (req, res) => {
  res.json({ hotels });
});



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*
/hotels/sort/pricing?pricing=low-to-high
/hotels/sort/rating?rating=high-to-low
/hotels/sort/reviews?reviews=most-to-least
/hotels/filter/amenity?amenity=spa
/hotels/filter/country?country=india
/hotels/filter/category?category=luxury
/hotels
*/
