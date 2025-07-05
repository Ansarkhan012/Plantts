import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    {
        id: 101,
        name: "Peace Lily",
        price: 600,
        category: "new",
        displayPrice: "PKR 600",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=e72936993055c1a60b0d99fa01f36eaffe30423b-5585005-images-thumbs&n=13"
      },
      {
        id: 102,
        name: "Snake Plant",
        price: 540,
        category: "all",
        displayPrice: "PKR 540",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=dec4f4f4e09120e7ede539b05ceee011faa77622-9145889-images-thumbs&n=13"
      },
      {
        id: 103,
        name: "Aloe Vera",
        price: 360,
        category: "sale",
        originalPrice: 260,
        displayPrice: "PKR 360",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=997d5269c6497ba334d6c51ab8c60a8951d05310-12995656-images-thumbs&n=13"
      },
      {
        id: 104,
        name: "ZZ Plant",
        price: 750,
        category: "all",
        displayPrice: "PKR 750",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=a424a2de97345c20bd92b448a2efdb9c7247d7d7-9843420-images-thumbs&n=13"
      },
      {
        id: 105,
        name: "Monstera",
        price: 105,
        category: "all",
        displayPrice: "PKR 105",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=97862e834cab00e4503dbd411a8121a01378dd30-10734181-images-thumbs&n=13"
      },
      {
        id: 201,
        name: "Rose Bush",
        price: 720,
        category: "all",
        displayPrice: "PKR 720",
        rating: 5,
        image: "https://cdn.pixabay.com/photo/2018/01/29/07/11/flower-3115353_640.jpg"
      },
      {
        id: 202,
        name: "Lavender",
        price: 540,
        category: "all",
        displayPrice: "PKR 540",
        rating: 4,
        image: "https://fairweathers.co.uk/wp-content/uploads/2015/02/a.-Havana-RL0746-scaled.jpg"
      },
      {
        id: 203,
        name: "Boxwood Hedge",
        price: 840,
        category: "all",
        displayPrice: "PKR 840",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=0d387984946b77b02e5c1c4325e080cdc0ec5532-8474442-images-thumbs&n=13"
      },
      {
        id: 204,
        name: "Japanese Maple",
        price: 1350,
        category: "all",
        displayPrice: "PKR 1350",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=f1b424d7b39db3a58886b94557ad2f8d93c69e02-2361471-images-thumbs&n=13"
      },
      {
        id: 205,
        name: "Hydrangea",
        category: "all",
        price: 660,
        displayPrice: "PKR 660",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=2185cc896386da13e6f8ba03e847534054d335cd-5213641-images-thumbs&n=13"
      },
      {
        id: 301,
        name: "Ceramic Planter",
        price: 450,
        category: "all",
        displayPrice: "PKR 450",
        rating: 4,
        image: "https://cdn-bkjpo.nitrocdn.com/FIRiXZYTjwNkQkpWjWZcWBehGaEanfsH/assets/images/optimized/rev-51b299d/etree.pk/wp-content/uploads/2024/02/Gallery-Image-White-Ceramic-Pot-or-Planter-or-Vase-in-Pakistan-5.webp"
      },
      {
        id: 302,
        name: "Watering Can",
        price: 360,
        category: "all",
        displayPrice: "PKR 360",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=8f09b905fdbb1510d243227b19511485a6987087-12371535-images-thumbs&n=13"
      },
      {
        id: 303,
        name: "Plant Scissors",
        price: 270,
        category: "all",
        displayPrice: "PKR 270",
        rating: 4,
        image: "https://images.squarespace-cdn.com/content/v1/550b57f0e4b03338e0474a39/1565552587954-8SOKSWB7YGAD1O6KWRQ6/pruning+shears.jpg"
      },
      {
        id: 106,
        name: "Pothos",
        price: 420,
        category: "all",
        displayPrice: "PKR 420",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=284dd3427a6c79c5dde75657c723d9da648db797-12642203-images-thumbs&n=13"
      },
      {
        id: 107,
        name: "Fiddle Leaf Fig",
        price: 135,
        category: "all",
        displayPrice: "PKR 135",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=1b399110239bab158e77686dab75dc8a9badc0308235419c-5869613-images-thumbs&n=13"
      },
      {
        id: 108,
        name: "Spider Plant",
        price: 480,
        category: "all",
        displayPrice: "PKR 480",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=d91dc9cc37d83d250d7ac8853bc4c80c0543e693-10385608-images-thumbs&n=13"
      },
      {
        id: 109,
        name: "Rubber Plant",
        price: 900,
        displayPrice: "PKR 900",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=a9b84365bd62f973089d23a869cf5e790cc5e476-5381183-images-thumbs&n=13"
      },
      {
        id: 110,
        name: "Chinese Money Plant",
        price: 660,
        category: "all",
        displayPrice: "PKR 660",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=511e4bda705cdb10e581edb7d105585926d0df76-10576886-images-thumbs&n=13"
      },
      {
        id: 206,
        name: "Olive Tree",
        price: 1650,
        displayPrice: "PKR 1650",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=524af898a0032045fb8fdd98cb261c362a8376e4-4593014-images-thumbs&n=13"
      },
      {
        id: 207,
        name: "Boxwood Topiary",
        price: 1950,
        category: "all",
        displayPrice: "PKR 1950",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=b1145186301a5df172f17b86ec98ce173eed02bb-5220441-images-thumbs&n=13"
      },
      {
        id: 208,
        name: "Lemon Tree",
        price: 1470,
        category: "all",
        displayPrice: "PKR 1470",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=f4cf05ccfb48047de219be79b13dcce78c6606fa21b93d27-11407033-images-thumbs&n=13"
      },
      {
        id: 209,
        name: "Bamboo Plant",
        price: 450,
        category: "all",
        displayPrice: "PKR 450",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=c2f2c8eebe374fe71651fbbdb2181d1ba6bccebf-5037427-images-thumbs&n=13"
      },
      {
        id: 210,
        name: "Jasmine Vine",
        price: 320,
        category: "all",
        displayPrice: "PKR 320",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=97fc8a7ec6823309dbe0b690d4bb8f9fc989fcd5-9181123-images-thumbs&n=13"
      },
      {
        id: 304,
        name: "Soil Mix",
        price: 240,
        category: "all",
        displayPrice: "PKR 240",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=f7d0a5cc29c6d156715ec0957ad9970f32ef04ed-5239137-images-thumbs&n=13"
      },
      {
        id: 305,
        name: "Grow Light",
        price: 1000,
        category: "all",
        displayPrice: "PKR 1000",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=efc7639ac0f51b4edf5dcff9171d2d9d246bb82d-5434115-images-thumbs&n=13"
      },
      {
        id: 306,
        name: "Humidity Tray",
        price: 300,
        category: "new",
        displayPrice: "PKR 300",
        rating: 3,
        image: "https://avatars.mds.yandex.net/i?id=b7e48335f92bca35fe755892af4c26ad0b1b8a99-9269077-images-thumbs&n=13"
      },
      {
        id: 111,
        name: "Philodendron",
        price: 780,
        category: "all",
        displayPrice: "PKR 780",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=22be88e41b0befa12563126f43649ff618ab06c6-5521681-images-thumbs&n=13"
      },
      {
        id: 112,
        name: "String of Pearls",
        price: 540,
        displayPrice: "PKR 540",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=43e7d2cb280fb077accbeb808fa578e5a3ca1ba3-5220623-images-thumbs&n=13"
      },
      {
        id: 113,
        name: "Calathea",
        price: 840,
        displayPrice: "PKR 840",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=550a3a22e7f91b64aa0d10e4f2f56a4a3d00d5ef-9098836-images-thumbs&n=13"
      },
      {
        id: 114,
        name: "Bird's Nest Fern",
        price: 720,
        category: "new",
        displayPrice: "PKR 720",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=36065e40721e6aec532a5d4ee54fcd68ef17f3ea-9853960-images-thumbs&n=13"
      },
      {
        id: 211,
        name: "Cypress Tree",
        price: 1250,
        displayPrice: "PKR 1250",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=833ebe16ac09a5ccafd6e3753ec311de22d857b9-4554870-images-thumbs&n=13"
      },
      {
        id: 212,
        name: "Geranium",
        price: 800,
        displayPrice: "PKR 800",
        rating: 3,
        image: "https://avatars.mds.yandex.net/i?id=f7c2ad21fc8f3368948c630ee0173e42abb187a6-3193964-images-thumbs&n=13"
      },
      {
        id: 213,
        name: "Magnolia Tree",
        price: 189,
        displayPrice: "PKR 189",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=b85ae14fa0b8117750d83788891d6db7-5381133-images-thumbs&n=13"
      },
      {
        id: 214,
        name: "Hibiscus",
        price: 150,
        category: "new",
        displayPrice: "PKR 150",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=d3feab31bbdda27eb352b905fd7e3e74409b11d1-7051792-images-thumbs&n=13"
      },
      {
        id: 215,
        name: "Azalea Bush",
        price: 280,
        category: "sale",
        originalPrice: 380,
        displayPrice: "PKR 380",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=ed43a1a36af19178c9759e6d5a50ae08-4230863-images-thumbs&n=13"
      },
      {
        id: 307,
        name: "Plant Stand",
        price: 1200,
        category: "new",
        displayPrice: "PKR 1200",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=4c3e35cbbb62b86b63bcce3909e5e5866d4a2c07-5553356-images-thumbs&n=13"
      },
      {
        id: 308,
        name: "Gardening Gloves",
        price: 250,
        category: "sale",
        originalPrice: 350,
        displayPrice: "PKR 350",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=b46723d4ad60185d1cd9ad2a22a37f0cc87d7129-4589529-images-thumbs&n=13"
      },
      {
        id: 309,
        name: "Plant Mister",
        price: 400,
        category: "new",
        displayPrice: "PKR 400",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=b467465d0aa895a3d975f14fe97c594d06a8b3c9-8507274-images-thumbs&n=13"
      },
      {
        id: 115,
        name: "Parlor Palm",
        price: 760,
        category: "sale",
        originalPrice: 920,
        displayPrice: "PKR 960",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=e6bc2ac182e7d940a65fef28efa77514feb3b4f5-3480301-images-thumbs&n=13"
      },
      {
        id: 116,
        name: "Cast Iron Plant",
        price: 1020,
        category: "new",
        displayPrice: "PKR 1020",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=c3275a30af37b14d8adac9b1d9af38be6c5ddafa-10414364-images-thumbs&n=13"
      },
      {
        id: 117,
        name: "Dracaena",
        price: 670,
        category: "sale",
        originalPrice: 820,
        displayPrice: "PKR 870",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=18173fdbdd77e8b1ec1884eeae1bee10454802bc-4538573-images-thumbs&n=13"
      },
      {
        id: 118,
        name: "English Ivy",
        price: 350,
        category: "sale",
        originalPrice: 450,
        displayPrice: "PKR 450",
        rating: 3,
        image: "https://avatars.mds.yandex.net/i?id=63ac8479ace6ec064b9a7255bb64d4da906c75d5-11402271-images-thumbs&n=13"
      },
      {
        id: 119,
        name: "Pilea",
        price: 690,
        category: "new",
        displayPrice: "PKR 690",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=88f25a87a804ad04bdf6f7628c3c8a499fa8ae64-10521504-images-thumbs&n=13"
      },
      {
        id: 120,
        name: "Bromeliad",
        price: 710,
        category: "sale",
        originalPrice: 820,
        displayPrice: "PKR 810",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=897ff56e1ed7f7480f9687ccb40f790d43d81b14-5347559-images-thumbs&n=13"
      },
      {
        id: 216,
        name: "Palm Tree",
        price: 225,
        category: "new",
        displayPrice: "PKR 225",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=2261eecab3e9ff3eba6bf9874a62565345d0f734-7752085-images-thumbs&n=13"
      },
      {
        id: 217,
        name: "Peony",
        price: 280,
        displayPrice: "PKR 280",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=999fcb29a019e2f3f9ca579b696cc35d653e4b6e-8173266-images-thumbs&n=13"
      },
      {
        id: 218,
        name: "Cherry Blossom",
        price: 175,
        category: "new",
        displayPrice: "PKR 175",
        rating: 5,
        image: "https://avatars.mds.yandex.net/i?id=543c53ec3a8068731a2d091db46c8060333f2f19-12890380-images-thumbs&n=13"
      },
      {
        id: 219,
        name: "Sunflower",
        price: 900,
        displayPrice: "PKR 900",
        rating: 3,
        image: "https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_640.jpg"
      },
      {
        id: 220,
        name: "Bougainvillea",
        price: 320,
        category: "sale",
        originalPrice: 420,
        displayPrice: "PKR 420",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=6adbc3d4c1bf46158d7da99b0315cd79d7601a6c-10927571-images-thumbs&n=13"
      },
      {
        id: 310,
        name: "Decorative Pebbles",
        price: 180,
        category: "new",
        displayPrice: "PKR 180",
        rating: 4,
        image: "https://avatars.mds.yandex.net/i?id=fd2b1598739f1f17662936c3914df5d564a10ae6-4010583-images-thumbs&n=13"
      }

  ];

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(product => product.category === activeFilter);

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto ">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-green-600">Plants</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our best indoor plants that improve air quality, add nature's touch, and brighten your interior.
          </p>
        </div>

     
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {['all', 'new', 'sale'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-green-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {filter === 'all' && 'All Plants'}
              {filter === 'new' && 'New Arrivals'}
              {filter === 'sale' && 'On Sale'}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              
              <div className="relative overflow-hidden h-60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.category === 'sale' && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    SALE
                  </div>
                )}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300"
                >
                  {wishlist.includes(product.id)
                    ? <FaHeart className="text-red-500" />
                    : <FaRegHeart className="text-gray-400 hover:text-red-500" />}
                </button>
              </div>

              
              <div className="p-5">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) =>
                    i < product.rating
                      ? <FaStar key={i} className="text-yellow-400 text-sm" />
                      : <FaRegStar key={i} className="text-gray-300 text-sm" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-600 font-bold">Rs: {product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-sm line-through">Rs: {product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

       
      
      </div>
    </section>
  );
};

export default Products;
