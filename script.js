const cars = [
  {
    id: 1,
    brand: 'Maruti Suzuki',
    model: 'Baleno',
    price: '₹7.5 Lakh',
    range: '20 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/maruti-baleno.jpeg',
    review: 'A reliable hatchback with great fuel efficiency and modern safety features.',
    score: 4.5,
  },
  {
    id: 2,
    brand: 'Maruti Suzuki',
    model: 'Swift',
    price: '₹6.0 Lakh',
    range: '21 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/maruti-swift.jpeg',
    review: 'Popular hatchback with a sporty drive and excellent resale value.',
    score: 4.4,
  },
  {
    id: 3,
    brand: 'Maruti Suzuki',
    model: 'Brezza',
    price: '₹8.2 Lakh',
    range: '18 kmpl',
    engine: '1.5L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/maruti-brezza.jpeg',
    review: 'Compact SUV with strong fuel efficiency, comfort and value.',
    score: 4.5,
  },
  {
    id: 4,
    brand: 'Tata',
    model: 'Nexon',
    price: '₹8.7 Lakh',
    range: '18 kmpl',
    engine: '1.2L Turbo Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/tata-nexon.jpeg',
    review: 'Premium SUV feel, strong build quality and excellent safety ratings.',
    score: 4.6,
  },
  {
    id: 5,
    brand: 'Tata',
    model: 'Harrier',
    price: '₹16.5 Lakh',
    range: '16 kmpl',
    engine: '2.0L Diesel',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/tata-harrier.jpeg',
    review: 'Robust SUV with a premium cabin and refined ride comfort.',
    score: 4.5,
  },
  {
    id: 6,
    brand: 'Tata',
    model: 'Punch',
    price: '₹7.1 Lakh',
    range: '18 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/tata-punch.jpeg',
    review: 'Compact SUV with bold styling and agile handling for cities.',
    score: 4.3,
  },
  {
    id: 7,
    brand: 'Mahindra',
    model: 'Thar',
    price: '₹13.5 Lakh',
    range: '15 kmpl',
    engine: '2.0L Petrol',
    seating: '4 seats',
    image: 'car-web-pro/assets/cars/mahindra-thar.jpeg',
    review: 'Iconic off-roader with rugged appeal and modern comfort features.',
    score: 4.7,
  },
  {
    id: 8,
    brand: 'Mahindra',
    model: 'XUV700',
    price: '₹17.9 Lakh',
    range: '14 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/mahindra-xuv700.jpeg',
    review: 'Feature-loaded SUV with strong performance and spacious cabin.',
    score: 4.6,
  },
  {
    id: 9,
    brand: 'Mahindra',
    model: 'Scorpio-N',
    price: '₹15.4 Lakh',
    range: '13 kmpl',
    engine: '2.2L Diesel',
    seating: '7 seats',
    image: 'car-web-pro/assets/cars/mahindra-scorpio-n.jpeg',
    review: 'Popular large SUV with rugged capability and modern tech features.',
    score: 4.4,
  },
  {
    id: 10,
    brand: 'Hyundai',
    model: 'Creta',
    price: '₹11.2 Lakh',
    range: '17 kmpl',
    engine: '1.5L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/hyundai-creta.jpeg',
    review: 'Balanced SUV with premium cabin, technology and smooth drive.',
    score: 4.4,
  },
  {
    id: 11,
    brand: 'Hyundai',
    model: 'Venue',
    price: '₹8.5 Lakh',
    range: '18 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/hyundai-venue.jpeg',
    review: 'Compact SUV with strong safety ratings and modern connectivity.',
    score: 4.3,
  },
  {
    id: 12,
    brand: 'Hyundai',
    model: 'Verna',
    price: '₹10.8 Lakh',
    range: '15 kmpl',
    engine: '1.5L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/hyundai-verna.jpeg',
    review: 'Sleek sedan with comfortable ride quality and refined engine.',
    score: 4.4,
  },
  {
    id: 13,
    brand: 'Toyota',
    model: 'Urban Cruiser',
    price: '₹9.3 Lakh',
    range: '19 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/toyota-urban-cruiser.jpeg',
    review: 'Efficient compact SUV with brand reliability and appealing styling.',
    score: 4.2,
  },
  {
    id: 14,
    brand: 'Toyota',
    model: 'Innova Crysta',
    price: '₹19.5 Lakh',
    range: '12 kmpl',
    engine: '2.4L Diesel',
    seating: '7 seats',
    image: 'car-web-pro/assets/cars/toyota-innova-crysta.jpeg',
    review: 'Comfortable MPV ideal for family travel with premium space.',
    score: 4.6,
  },
  {
    id: 15,
    brand: 'Toyota',
    model: 'Fortuner',
    price: '₹33.5 Lakh',
    range: '10 kmpl',
    engine: '2.7L Petrol',
    seating: '7 seats',
    image: 'car-web-pro/assets/cars/toyota-fortuner.jpeg',
    review: 'Luxury SUV with strong off-road capability and premium comforts.',
    score: 4.7,
  },
  {
    id: 16,
    brand: 'Kia',
    model: 'Seltos',
    price: '₹10.5 Lakh',
    range: '16 kmpl',
    engine: '1.5L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/kia-seltos.jpeg',
    review: 'Stylish and feature-rich mid-size SUV with a strong highway presence.',
    score: 4.5,
  },
  {
    id: 17,
    brand: 'Kia',
    model: 'Sonet',
    price: '₹8.7 Lakh',
    range: '17 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/kia-sonet.jpeg',
    review: 'Compact SUV with bold looks and smart interior technology.',
    score: 4.3,
  },
  {
    id: 18,
    brand: 'Kia',
    model: 'Carnival',
    price: '₹33.4 Lakh',
    range: '11 kmpl',
    engine: '2.2L Diesel',
    seating: '7 seats',
    image: 'car-web-pro/assets/cars/kia-carnival.jpeg',
    review: 'Premium MPV with spacious seating and advanced convenience features.',
    score: 4.4,
  },
  {
    id: 19,
    brand: 'Skoda',
    model: 'Octavia',
    price: '₹28.8 Lakh',
    range: '13 kmpl',
    engine: '2.0L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/skoda-octavia.jpeg',
    review: 'Premium sedan with a spacious cabin, refined drive and safety features.',
    score: 4.3,
  },
  {
    id: 20,
    brand: 'Skoda',
    model: 'Kushaq',
    price: '₹11.5 Lakh',
    range: '16 kmpl',
    engine: '1.5L Turbo Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/skoda-kushaq.jpeg',
    review: 'Modern compact SUV with sharp handling and premium build quality.',
    score: 4.4,
  },
  {
    id: 21,
    brand: 'Skoda',
    model: 'Superb',
    price: '₹34.9 Lakh',
    range: '12 kmpl',
    engine: '2.0L Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/skoda-superb.jpeg',
    review: 'Executive sedan with a luxurious interior and powerful drive.',
    score: 4.5,
  },
  {
    id: 22,
    brand: 'BMW',
    model: '3 Series',
    price: '₹45.2 Lakh',
    range: '12 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/bmw-3-series.jpeg',
    review: 'Luxury sport sedan with strong performance and elegant interior quality.',
    score: 4.8,
  },
  {
    id: 23,
    brand: 'BMW',
    model: 'X1',
    price: '₹44.9 Lakh',
    range: '13 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/bmw-x1.jpeg',
    review: 'Premium compact SUV with excellent refinement and modern tech.',
    score: 4.6,
  },
  {
    id: 24,
    brand: 'BMW',
    model: '5 Series',
    price: '₹67.9 Lakh',
    range: '11 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/bmw-5-series.jpeg',
    review: 'High-end executive sedan with exceptional comfort and performance.',
    score: 4.8,
  },
  {
    id: 25,
    brand: 'Renault',
    model: 'Kiger',
    price: '₹7.1 Lakh',
    range: '20 kmpl',
    engine: '1.0L Turbo Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/renault-kiger.jpeg',
    review: 'Affordable compact SUV with modern styling and balanced efficiency.',
    score: 4.1,
  },
  {
    id: 26,
    brand: 'Renault',
    model: 'Triber',
    price: '₹6.3 Lakh',
    range: '18 kmpl',
    engine: '1.0L Petrol',
    seating: '7 seats',
    image: 'car-web-pro/assets/cars/renault-triber.jpeg',
    review: 'Flexible 7-seater MPV with smart storage and great affordability.',
    score: 4.0,
  },
  {
    id: 27,
    brand: 'Renault',
    model: 'Duster',
    price: '₹10.5 Lakh',
    range: '17 kmpl',
    engine: '1.5L Turbo Petrol',
    seating: '5 seats',
    image: 'car-web-pro/assets/cars/renault-duster.jpeg',
    review: 'Rugged SUV with a spacious cabin and comfortable long-distance ride.',
    score: 4.2,
  },
];

const reviews = [
  {
    author: 'Amit',
    model: 'Baleno',
    text: 'Excellent mileage and comfortable ride for city driving. Great value in its segment.',
    rating: 4.5,
  },
  {
    author: 'Priya',
    model: 'Nexon',
    text: 'Spacious interior, strong safety features and a smooth drive. Perfect for family use.',
    rating: 4.6,
  },
  {
    author: 'Rahul',
    model: 'Thar',
    text: 'A fun adventure car. Powerful and stylish, yet comfortable enough for daily drives.',
    rating: 4.7,
  },
];

const brands = [...new Set(cars.map((car) => car.brand))];

const brandLogoMap = {
  'Maruti Suzuki': 'car-web-pro/assets/brands/maruti-suzuki.jpeg',
  Tata: 'car-web-pro/assets/brands/tata.jpeg',
  Mahindra: 'car-web-pro/assets/brands/mahindra.jpeg',
  Hyundai: 'car-web-pro/assets/brands/hyundai.jpeg',
  Toyota: 'car-web-pro/assets/brands/toyota.jpeg',
  Kia: 'car-web-pro/assets/brands/kia.jpeg',
  Skoda: 'car-web-pro/assets/brands/skoda.jpeg',
  BMW: 'car-web-pro/assets/brands/bmw.jpeg',
  Renault: 'car-web-pro/assets/brands/renault.jpeg',
};

const brandWebsiteMap = {
  'Maruti Suzuki': 'https://www.marutisuzuki.com/',
  Tata: 'https://www.tatamotors.com/',
  Mahindra: 'https://www.mahindra.com/',
  Hyundai: 'https://www.hyundai.com/in/en',
  Toyota: 'https://www.toyotabharat.com/',
  Kia: 'https://www.kia.com/in/home.html',
  Skoda: 'https://www.skoda-auto.co.in/',
  BMW: 'https://www.bmw.in/en/index.html',
  Renault: 'https://www.renault.co.in/',
};

const brandGrid = document.getElementById('brandGrid');
const brandFilter = document.getElementById('brandFilter');
const clearFilter = document.getElementById('clearFilter');
const carList = document.getElementById('carList');
const reviewList = document.getElementById('reviewList');
const compareOne = document.getElementById('compareOne');
const compareTwo = document.getElementById('compareTwo');
const compareResult = document.getElementById('compareResult');

function renderBrands() {
  brands.forEach((brand) => {
    const card = document.createElement('button');
    card.className = 'brand-card';
    const logoSrc = brandLogoMap[brand] || '';
    card.innerHTML = `
      ${logoSrc ? `<img src="${logoSrc}" alt="${brand} logo">` : ''}
      <span>${brand}</span>
    `;
    card.addEventListener('click', () => {
      brandFilter.value = brand;
      renderCars();
    });
    brandGrid.appendChild(card);
  });
}

function renderBrandOptions() {
  brands.forEach((brand) => {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });
}

function renderCars() {
  const selectedBrand = brandFilter.value;
  carList.innerHTML = '';
  const filteredCars = selectedBrand === 'all' ? cars : cars.filter((car) => car.brand === selectedBrand);

  filteredCars.forEach((car) => {
    const card = document.createElement('article');
    card.className = 'car-card';
    const imageSrc = car.image || 'assets/cars/placeholder.svg';
    const brandWebsite = brandWebsiteMap[car.brand] || '#';

    card.innerHTML = `
      <img src="${imageSrc}" alt="${car.brand} ${car.model}" onerror="this.src='assets/cars/placeholder.svg'">
      <h3>${car.model}</h3>
      <div class="meta">Brand: ${car.brand}</div>
      <div class="price">${car.price}</div>
      <ul>
        <li>Engine: ${car.engine}</li>
        <li>Fuel Efficiency: ${car.range}</li>
        <li>Seating: ${car.seating}</li>
      </ul>
      <p>${car.review}</p>
      <div class="meta">Rating: ${car.score} / 5</div>
      <button class="btn btn-primary book-btn" data-brand="${car.brand}">Book Now</button>
    `;

    // Add event listener for the book button
    const bookBtn = card.querySelector('.book-btn');
    bookBtn.addEventListener('click', () => {
      if (brandWebsite !== '#') {
        window.open(brandWebsite, '_blank');
      }
    });

    carList.appendChild(card);
  });
}

function renderReviews() {
  reviews.forEach((review) => {
    const card = document.createElement('article');
    card.className = 'review-card';
    card.innerHTML = `
      <h3>${review.model}</h3>
      <div class="meta">By ${review.author}</div>
      <p>${review.text}</p>
      <div class="rating">Rating: ${review.rating} / 5</div>
    `;
    reviewList.appendChild(card);
  });
}

function renderCompareOptions() {
  [compareOne, compareTwo].forEach((select) => {
    select.innerHTML = '<option value="0">Select a model</option>';
    cars.forEach((car) => {
      const option = document.createElement('option');
      option.value = car.id;
      option.textContent = `${car.brand} ${car.model}`;
      select.appendChild(option);
    });
  });
}

function renderComparison() {
  const idOne = parseInt(compareOne.value, 10);
  const idTwo = parseInt(compareTwo.value, 10);
  compareResult.innerHTML = '';

  if (!idOne || !idTwo || idOne === idTwo) {
    compareResult.innerHTML = '<div class="compare-card"><p>Select two different models to compare.</p></div>';
    return;
  }

  const firstCar = cars.find((car) => car.id === idOne);
  const secondCar = cars.find((car) => car.id === idTwo);

  [firstCar, secondCar].forEach((car) => {
    const card = document.createElement('article');
    card.className = 'compare-card';
    card.innerHTML = `
      <h3>${car.brand} ${car.model}</h3>
      <div class="meta">${car.price}</div>
      <ul>
        <li>Engine: ${car.engine}</li>
        <li>Fuel Efficiency: ${car.range}</li>
        <li>Seating: ${car.seating}</li>
        <li>Rating: ${car.score} / 5</li>
      </ul>
    `;
    compareResult.appendChild(card);
  });
}

brandFilter.addEventListener('change', renderCars);
clearFilter.addEventListener('click', () => {
  brandFilter.value = 'all';
  renderCars();
});
compareOne.addEventListener('change', renderComparison);
compareTwo.addEventListener('change', renderComparison);

renderBrands();
renderBrandOptions();
renderCars();
renderReviews();
renderCompareOptions();
renderComparison();
