const navLinks = [
  {
    id: 'cocktails',
    title: 'Cocktailuri',
  },
  {
    id: 'about',
    title: 'Despre Noi',
  },
  {
    id: 'work',
    title: 'Arta',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const cocktailLists = [
  {
    name: 'Chapel Hill Shiraz',
    country: 'AU',
    detail: 'Sticlă',
    price: '120 MDL',
  },
  {
    name: 'Caten Malbec',
    country: 'AU',
    detail: 'Sticlă',
    price: '490 MDL',
  },
  {
    name: 'Rhino Pale Ale',
    country: 'CA',
    detail: '750 ml',
    price: '200 MDL',
  },
  {
    name: 'Irish Guinness',
    country: 'IE',
    detail: '600 ml',
    price: '290 MDL',
  },
];

const mockTailLists = [
  {
    name: 'Tropical Bloom',
    country: 'US',
    detail: 'Sticlă',
    price: '100 MDL',
  },
  {
    name: 'Passionfruit Mint',
    country: 'US',
    detail: 'Sticlă',
    price: '490 MDL',
  },
  {
    name: 'Citrus Glow',
    country: 'CA',
    detail: '750 ml',
    price: '200 MDL',
  },
  {
    name: 'Lavender Fizz',
    country: 'IE',
    detail: '600 ml',
    price: '290 MDL',
  },
];

const profileLists = [
  {
    imgPath: '/images/profile1.png',
  },
  {
    imgPath: '/images/profile2.png',
  },
  {
    imgPath: '/images/profile3.png',
  },
  {
    imgPath: '/images/profile4.png',
  },
];

const featureLists = [
  'Amestecuri perfect echilibrate',
  'Garnisit la perfecție',
  'Rece ca gheața de fiecare dată',
  'Agitat și amestecat cu măiestrie',
];

const goodLists = [
  'Ingrediente selectate manual',
  'Tehnici de semnătură',
  'Arta bartenderului în acțiune',
  'Arome proaspăt preparate',
];

const storeInfo = {
  heading: 'Unde Ne Găsești',
  address: 'Bd. Ștefan cel Mare 12, Chișinău, Moldova',
  contact: {
    phone: '+373 69 123 456',
    email: 'salut@themojito.md',
  },
};

const openingHours = [
  { day: 'Lun–Joi', time: '11:00 – 00:00' },
  { day: 'Vin', time: '11:00 – 02:00' },
  { day: 'Sâm', time: '09:00 – 02:00' },
  { day: 'Dum', time: '09:00 – 01:00' },
];

const socials = [
  {
    name: 'Instagram',
    icon: '/images/insta.png',
    url: '#',
  },
  {
    name: 'X (Twitter)',
    icon: '/images/x.png',
    url: '#',
  },
  {
    name: 'Facebook',
    icon: '/images/fb.png',
    url: '#',
  },
];

const allCocktails = [
  {
    id: 1,
    name: 'Classic Mojito',
    image: '/images/drink1.png',
    title: 'Ingrediente Simple, Gust Puternic',
    description:
      'Preparat cu rom alb, suc de lămâie verde și mentă proaspătă, Mojito Classic este ușor de făcut și plin de caracter. Adaugă puțin zahăr brun pentru băutura perfectă în serile de vară.',
  },
  {
    id: 2,
    name: 'Raspberry Mojito',
    image: '/images/drink2.png',
    title: 'Un Clasic Răcoritor Care Nu Dezamăgește Niciodată',
    description:
      'Mojito cu Zmeură îmbină dulceața zmeurilor cu prospețimea mentei și aciditatea lămâii verzi. Agitat, înghețat sau cu cuburi de gheață – mereu crocant și revigorant.',
  },
  {
    id: 3,
    name: 'Violet Breeze',
    image: '/images/drink3.png',
    title: 'Ingrediente Simple, Gust Puternic',
    description:
      'Preparat cu lavandă, suc de lămâie și un strop de sirop violet, Violet Breeze este ușor de savurat și plin de personalitate. Adaugă o floare pentru băutura perfectă în serile de vară.',
  },
  {
    id: 4,
    name: 'Curacao Mojito',
    image: '/images/drink4.png',
    title: 'Creat cu Grijă, Turnat cu Dragoste',
    description:
      'Fiecare cocktail este preparat cu ingrediente proaspete și cu pasiunea de a perfecționa fiecare turnare, fie că sărbătorești sau pur și simplu te relaxezi.',
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
