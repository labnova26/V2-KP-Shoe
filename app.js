/* ═══════════════════════════════
   KP PRODUCTION — SHOE STORE JS
   ═══════════════════════════════ */

// ── DATA ──────────────────────────────────────────────────────────
const PRODUCTS = [
  // ── KP PRODUCTION ──
  {
    id:1, brand:'KP Production', name:'KP Air Classic', cat:'sneakers', label:'mens',
    img:'images/01_kp_air_classic.svg',
    price:899, oldPrice:null, badge:'New', color:'White/Black',
    desc:'Ultra-light cushioned sneaker built for all-day comfort. Perfect for casual wear or light sport. Features a breathable mesh upper and responsive foam midsole.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5}],
    reviews:[{author:'Kabo M.',stars:5,text:'Amazing fit, very comfortable!'},{author:'Lesego T.',stars:4,text:'Worth every Pula.'}]
  },
  {
    id:2, brand:'KP Production', name:'KP Exec Oxford', cat:'formal', label:'mens',
    img:'images/02_kp_exec_oxford.svg',
    price:1250, oldPrice:null, badge:'Best', color:'Black',
    desc:'Sharp Oxford leather shoes for the professional man. Durable rubber sole with elegant hand-stitched finish. Perfect for the boardroom or a wedding.',
    sizes:[{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5}],
    reviews:[{author:'Thato D.',stars:5,text:'Wore these to my interview and got the job!'}]
  },
  {
    id:3, brand:'KP Production', name:'KP Glam Heel', cat:'formal', label:'womens',
    img:'images/03_kp_glam_heel.svg',
    price:750, oldPrice:950, badge:'Sale', color:'Nude/Black',
    desc:'Elegant block heel for formal occasions. Low block design gives stability without sacrificing style. Comfortable enough for long events and ceremonies.',
    sizes:[{eu:35,uk:2.5},{eu:36,uk:3},{eu:37,uk:4},{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5}],
    reviews:[{author:'Neo S.',stars:5,text:'So comfortable and beautiful!'}]
  },
  {
    id:4, brand:'KP Production', name:'KP Comfort Flat', cat:'sneakers', label:'womens',
    img:'images/04_kp_comfort_flat.svg',
    price:549, oldPrice:null, badge:null, color:'White/Pink',
    desc:'Everyday flat shoe with memory foam insole. Lightweight slip-resistant outsole. Great for work, errands or casual outings.',
    sizes:[{eu:35,uk:2.5},{eu:36,uk:3},{eu:37,uk:4},{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7}],
    reviews:[]
  },
  {
    id:5, brand:'KP Production', name:'KP Mini Runner', cat:'sneakers', label:'kids',
    img:'images/05_kp_mini_runner.svg',
    price:399, oldPrice:499, badge:'Sale', color:'Blue/Yellow',
    desc:'Bright durable kids sneakers with Velcro strap for easy on-off. Non-slip rubber sole keeps active kids safe on any surface.',
    sizes:[{eu:28,uk:'C10'},{eu:29,uk:'C11'},{eu:30,uk:'C12'},{eu:31,uk:'C12.5'},{eu:32,uk:'C13'},{eu:33,uk:'1'},{eu:34,uk:'2'},{eu:35,uk:'2.5'}],
    reviews:[{author:'Parent R.',stars:5,text:'My daughter loves them!'}]
  },
  {
    id:6, brand:'KP Production', name:'KP Street Hype', cat:'sneakers', label:'sneakers',
    img:'images/06_kp_street_hype.svg',
    price:1099, oldPrice:null, badge:'New', color:'Black/Gold',
    desc:'Bold streetwear sneaker with chunky layered sole. High-top ankle support with premium lace system. Turns heads wherever you go.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Mpho K.',stars:5,text:'Drip confirmed.'}]
  },
  {
    id:7, brand:'KP Production', name:'KP Classic Derby', cat:'formal', label:'formal',
    img:'images/07_kp_classic_derby.svg',
    price:980, oldPrice:null, badge:null, color:'Brown',
    desc:'Timeless Derby shoes crafted for the modern professional. Genuine leather upper with cushioned insole for all-day comfort. Polished look.',
    sizes:[{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5}],
    reviews:[]
  },
  {
    id:8, brand:'KP Production', name:'KP Weekend Slip', cat:'sneakers', label:'mens',
    img:'images/08_kp_weekend_slip.svg',
    price:420, oldPrice:550, badge:'Sale', color:'Navy',
    desc:'Casual slip-on for weekends and quick errands. Lightweight EVA sole and elastic gusset for easy wear. Easy to clean canvas upper.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5}],
    reviews:[{author:'Bofelo J.',stars:4,text:'Great for the braai!'}]
  },
  {
    id:9, brand:'KP Production', name:'KP Ankle Boot', cat:'formal', label:'womens',
    img:'images/09_kp_ankle_boot.svg',
    price:1350, oldPrice:null, badge:'New', color:'Black',
    desc:'Trendy ankle boot with side zipper entry. Stacked heel adds height without sacrificing comfort. Pairs beautifully with jeans or a dress.',
    sizes:[{eu:35,uk:2.5},{eu:36,uk:3},{eu:37,uk:4},{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5}],
    reviews:[]
  },
  {
    id:10, brand:'KP Production', name:'KP Safari Trail', cat:'sneakers', label:'mens',
    img:'images/10_kp_safari_trail.svg',
    price:1150, oldPrice:null, badge:null, color:'Tan/Brown',
    desc:"Rugged outdoor boot built for Botswana's terrain. Water-resistant upper, reinforced steel toe cap and deep-lug rubber outsole for grip on any surface.",
    sizes:[{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Keene B.',stars:5,text:'Perfect for the bush.'}]
  },
  {
    id:11, brand:'KP Production', name:'KP Princess Pump', cat:'formal', label:'kids',
    img:'images/11_kp_princess_pump.svg',
    price:320, oldPrice:400, badge:'Sale', color:'Pink/Silver',
    desc:'Adorable patent pump for little princesses. Low stable heel, cushioned insole and T-bar strap keep little feet comfortable and secure.',
    sizes:[{eu:28,uk:'C10'},{eu:29,uk:'C11'},{eu:30,uk:'C12'},{eu:31,uk:'C12.5'},{eu:32,uk:'C13'},{eu:33,uk:'1'}],
    reviews:[]
  },
  {
    id:12, brand:'KP Production', name:'KP Pro Runner', cat:'sneakers', label:'sneakers',
    img:'images/12_kp_pro_runner.svg',
    price:1200, oldPrice:null, badge:'New', color:'Grey/Lime',
    desc:'Performance running shoe with ergonomic arch support and breathable 3D mesh upper. Responsive foam midsole absorbs impact on every stride.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[]
  },

  // ── NIKE ──
  {
    id:13, brand:'Nike', name:'Nike Air Force 1 \'07', cat:'sneakers', label:'sneakers',
    img:'images/13_nike_af1.svg',
    price:1899, oldPrice:null, badge:'New', color:'White',
    desc:"The radically designed Nike Air Force 1 '07 is the OG basketball shoe. Iconic leather upper, visible Air unit in the heel, and a classic low-top silhouette that has stood the test of time since 1982.",
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Tebogo M.',stars:5,text:'Classic! Never goes out of style.'},{author:'Sello K.',stars:5,text:'Best sneaker ever made.'}]
  },
  {
    id:14, brand:'Nike', name:'Nike Air Max 270', cat:'sneakers', label:'mens',
    img:'images/14_nike_airmax270.svg',
    price:2199, oldPrice:2499, badge:'Sale', color:'Black/White',
    desc:"Nike's biggest Air unit to date sits beneath a breathable mesh upper. The 270-degree heel Air unit provides maximum cushioning. Bold silhouette, superior comfort.",
    sizes:[{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Kagiso L.',stars:4,text:'Super comfortable for long walks.'}]
  },
  {
    id:15, brand:'Nike', name:'Nike Revolution 7', cat:'sneakers', label:'mens',
    img:'images/15_nike_revolution7.svg',
    price:1299, oldPrice:null, badge:null, color:'Blue/White',
    desc:'Lightweight everyday running shoe with foam midsole cushioning and breathable mesh upper. Durable rubber outsole for traction on roads and pavements.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Onkabetse T.',stars:4,text:'Great running shoe for the price.'}]
  },
  {
    id:16, brand:'Nike', name:'Nike Air Max SC (Women)', cat:'sneakers', label:'womens',
    img:'images/16_nike_airmax_women.svg',
    price:1750, oldPrice:null, badge:'New', color:'White/Pink',
    desc:"Retro-inspired women's Air Max with a visible Air unit. Leather and mesh upper with clean lines and bold colour blocking. Designed for style-conscious women.",
    sizes:[{eu:35,uk:2.5},{eu:36,uk:3},{eu:37,uk:4},{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7}],
    reviews:[{author:'Boitumelo N.',stars:5,text:'Love the colours and the fit!'}]
  },
  {
    id:17, brand:'Nike', name:'Nike Flex Runner 2 (Kids)', cat:'sneakers', label:'kids',
    img:'images/17_nike_flex_kids.svg',
    price:899, oldPrice:1099, badge:'Sale', color:'Purple/White',
    desc:'Super flexible kids running shoe with slip-on design — no laces needed! 11 flex grooves in the outsole let natural foot movement happen freely.',
    sizes:[{eu:28,uk:'C10'},{eu:29,uk:'C11'},{eu:30,uk:'C12'},{eu:31,uk:'C12.5'},{eu:32,uk:'C13'},{eu:33,uk:'1'},{eu:34,uk:'2'},{eu:35,uk:'2.5'}],
    reviews:[{author:'Parent K.',stars:5,text:'My son wears these every day!'}]
  },
  {
    id:18, brand:'Nike', name:'Nike Court Vision Low', cat:'formal', label:'sneakers',
    img:'images/18_nike_court_vision.svg',
    price:1599, oldPrice:null, badge:null, color:'White/Black',
    desc:'Basketball-inspired court shoe with durable leather upper and pivot circle outsole. Clean look that pairs effortlessly with smart-casual and semi-formal outfits.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[]
  },

  // ── ADIDAS ──
  {
    id:19, brand:'Adidas', name:'Adidas Stan Smith', cat:'sneakers', label:'sneakers',
    img:'images/19_adidas_stan_smith.svg',
    price:1799, oldPrice:null, badge:'Best', color:'White/Green',
    desc:'The legendary Stan Smith — originally a tennis shoe, now the most iconic sneaker in history. Perforated 3-Stripes on the side, clean leather upper, minimal design.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Dineo P.',stars:5,text:'Clean, fresh and timeless.'},{author:'Mpho R.',stars:5,text:'Goes with everything!'}]
  },
  {
    id:20, brand:'Adidas', name:'Adidas Ultraboost 23', cat:'sneakers', label:'mens',
    img:'images/20_adidas_ultraboost.svg',
    price:2799, oldPrice:3199, badge:'Sale', color:'Black/White',
    desc:"Adidas' most responsive running shoe. BOOST midsole technology returns energy with every step. Adaptive PRIMEKNIT+ upper wraps your foot in seamless comfort.",
    sizes:[{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Godfrey S.',stars:5,text:'Best running shoe I have ever owned!'}]
  },
  {
    id:21, brand:'Adidas', name:'Adidas Samba OG', cat:'sneakers', label:'sneakers',
    img:'images/21_adidas_samba.svg',
    price:1950, oldPrice:null, badge:'New', color:'White/Black/Gum',
    desc:'Born on the football pitch in 1950, the Samba is now the hottest lifestyle sneaker on the planet. Suede upper, T-toe overlay, and that iconic gum outsole.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5}],
    reviews:[{author:'Lebogang M.',stars:5,text:'Absolute heat. Everyone asks where I got these!'}]
  },
  {
    id:22, brand:'Adidas', name:'Adidas Cloudfoam Pure (Women)', cat:'sneakers', label:'womens',
    img:'images/22_adidas_cloudfoam.svg',
    price:1350, oldPrice:null, badge:null, color:'White/Pink',
    desc:"Ultra-soft Cloudfoam cushioning in a sleek women's lifestyle shoe. Knit upper adapts to your foot shape for a glove-like fit. All-day comfort, every day.",
    sizes:[{eu:35,uk:2.5},{eu:36,uk:3},{eu:37,uk:4},{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7}],
    reviews:[{author:'Refilwe T.',stars:5,text:'So light, I forget I am wearing shoes!'}]
  },
  {
    id:23, brand:'Adidas', name:'Adidas Tensaur Sport (Kids)', cat:'sneakers', label:'kids',
    img:'images/23_adidas_tensaur_kids.svg',
    price:799, oldPrice:999, badge:'Sale', color:'Blue/White',
    desc:'Durable kids sport shoe with elastic laces and hook-and-loop strap closure. Grippy rubber outsole for active children. Reinforced toe cap for durability.',
    sizes:[{eu:28,uk:'C10'},{eu:29,uk:'C11'},{eu:30,uk:'C12'},{eu:31,uk:'C12.5'},{eu:32,uk:'C13'},{eu:33,uk:'1'},{eu:34,uk:'2'},{eu:35,uk:'2.5'}],
    reviews:[{author:'Parent B.',stars:4,text:'Very sturdy, my kids are rough on shoes!'}]
  },
  {
    id:24, brand:'Adidas', name:'Adidas Grand Court 2.0', cat:'formal', label:'formal',
    img:'images/24_adidas_grand_court.svg',
    price:1499, oldPrice:null, badge:null, color:'White',
    desc:'Clean court-style sneaker with genuine leather upper and classic 3-Stripes detailing. Smart-casual versatility — dress it up or down with ease.',
    sizes:[{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[]
  },

  // ── PUMA ──
  {
    id:25, brand:'Puma', name:'Puma Suede Classic XXI', cat:'sneakers', label:'sneakers',
    img:'images/25_puma_suede.svg',
    price:1650, oldPrice:null, badge:'New', color:'Black/White',
    desc:'The Puma Suede has been a street culture icon for over 50 years. Soft suede upper, Formstripe detail on the side, and a cupsole outsole. Timeless.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Nthatisi K.',stars:5,text:'Classic puma drip!'},{author:'Tumelo L.',stars:5,text:'So comfortable from day one.'}]
  },
  {
    id:26, brand:'Puma', name:'Puma RS-X³ Super', cat:'sneakers', label:'mens',
    img:'images/26_puma_rsx.svg',
    price:1999, oldPrice:2299, badge:'Sale', color:'White/Multi',
    desc:'Bold chunky sneaker inspired by 80s Running System technology. Thick layered midsole, mesh and synthetic upper, RS cushioning in the heel. Statement streetwear.',
    sizes:[{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[{author:'Keabetswe D.',stars:5,text:'The chunkiness is everything!'}]
  },
  {
    id:27, brand:'Puma', name:'Puma Cali Dream (Women)', cat:'sneakers', label:'womens',
    img:'images/27_puma_cali_women.svg',
    price:1799, oldPrice:null, badge:'New', color:'White/Pink',
    desc:"Women's lifestyle platform sneaker with sleek leather upper and chunky sole. The perfect blend of femininity and street edge. Turn heads with every step.",
    sizes:[{eu:35,uk:2.5},{eu:36,uk:3},{eu:37,uk:4},{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7}],
    reviews:[{author:'Kgomotso P.',stars:5,text:'Love the platform sole, very chic!'}]
  },
  {
    id:28, brand:'Puma', name:'Puma Softride Enzo Evo', cat:'sneakers', label:'mens',
    img:'images/28_puma_softride.svg',
    price:1399, oldPrice:null, badge:null, color:'Black/Red',
    desc:'Lightweight running and training shoe with SoftRide foam midsole for cloud-like cushioning. Breathable engineered mesh upper for ventilation during workouts.',
    sizes:[{eu:38,uk:5},{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[]
  },
  {
    id:29, brand:'Puma', name:'Puma Smash v2 (Kids)', cat:'sneakers', label:'kids',
    img:'images/29_puma_smash_kids.svg',
    price:749, oldPrice:899, badge:'Sale', color:'White/Navy',
    desc:'Fun and durable kids sneaker with hook-and-loop strap closure for easy on-off. Padded collar for ankle comfort. EVA midsole for cushioning during play.',
    sizes:[{eu:28,uk:'C10'},{eu:29,uk:'C11'},{eu:30,uk:'C12'},{eu:31,uk:'C12.5'},{eu:32,uk:'C13'},{eu:33,uk:'1'},{eu:34,uk:'2'},{eu:35,uk:'2.5'}],
    reviews:[{author:'Parent M.',stars:4,text:'Great quality for the price.'}]
  },
  {
    id:30, brand:'Puma', name:'Puma Turin 3', cat:'formal', label:'formal',
    img:'images/30_puma_turin.svg',
    price:1250, oldPrice:null, badge:null, color:'White/Navy',
    desc:'Sleek minimalist court-inspired shoe with clean lines and low profile. Leather upper with tonal Formstripe detailing. Easy to dress up or down.',
    sizes:[{eu:39,uk:6},{eu:40,uk:6.5},{eu:41,uk:7},{eu:42,uk:8},{eu:43,uk:9},{eu:44,uk:9.5},{eu:45,uk:10}],
    reviews:[]
  },
];

const NOTIFICATIONS = [
  { icon:'🔥', title:'Weekend Flash Sale!', text:"Up to 40% off selected styles this Saturday and Sunday only. Don't miss out!", time:'2 hrs ago' },
  { icon:'📦', title:'New Arrivals Dropped', text:'Nike Air Force 1, Adidas Samba OG and Puma Suede Classic just landed. Limited sizes!', time:'5 hrs ago' },
  { icon:'✅', title:'Your Order Was Shipped', text:'Order KP-20240708-003 has been dispatched and is on its way to you.', time:'1 day ago' },
  { icon:'🎉', title:'Loyalty Reward Earned', text:"You've earned 50 KP Points on your last purchase. Redeem on your next order.", time:'2 days ago' },
  { icon:'📢', title:'Store Notice', text:'KP Production Jwaneng branch will be open on public holidays from 10AM–3PM.', time:'3 days ago' },
];

const QUEUE_ORDERS = [
  { id:'KP-20240710-001', item:'Nike Air Force 1 (Size EU 42)', status:'shipped' },
  { id:'KP-20240710-002', item:'Adidas Stan Smith (Size EU 37)', status:'packing' },
  { id:'KP-20240709-005', item:'Puma Suede Classic (Size EU 41)', status:'delivered' },
];

// ── STATE ──────────────────────────────────────────────────────────
let cart = [];
let wishlist = [];
let currentUser = null;
let orderHistory = [];
let selectedSize = null;
let currentProduct = null;
let selectedPayment = 'cash';
let activeCat = 'all';
let activeBrand = 'all';

// ── INIT ──────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderNotifications();
  renderQueueItems();
  renderArrivals();
  updateCartUI();
  scrollNavEffect();
});

// ── NAVBAR SCROLL ──────────────────────────────────────────────────
function scrollNavEffect() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });
}
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── PRODUCTS ──────────────────────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  let items = [...PRODUCTS];
  if (activeCat === 'sale') items = items.filter(p => p.badge === 'Sale');
  else if (activeCat !== 'all') items = items.filter(p => p.label === activeCat);
  if (activeBrand !== 'all') items = items.filter(p => p.brand === activeBrand);
  if (!items.length) {
    grid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;padding:2rem 0">No shoes found for this selection.</p>';
    return;
  }
  grid.innerHTML = items.map(p => productCard(p)).join('');
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn:not(.brand-btn)').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCat = cat;
  renderProducts();
}

function filterBrand(brand, btn) {
  document.querySelectorAll('.brand-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeBrand = brand;
  renderProducts();
}

function filterAndGo(cat) {
  activeCat = cat;
  activeBrand = 'all';
  document.querySelectorAll('.filter-btn:not(.brand-btn)').forEach(b => {
    const match = cat === 'mens' ? "men's" : cat === 'womens' ? "women's" : cat;
    b.classList.toggle('active', b.textContent.toLowerCase().includes(match));
  });
  document.querySelectorAll('.brand-btn').forEach(b => b.classList.toggle('active', b.textContent === 'All Brands'));
  renderProducts();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function brandClass(brand) {
  if (brand === 'Nike') return 'brand-nike';
  if (brand === 'Adidas') return 'brand-adidas';
  if (brand === 'Puma') return 'brand-puma';
  return 'brand-kp';
}

function starsHtml(n) {
  return '★'.repeat(n) + '☆'.repeat(5-n);
}

function productCard(p) {
  const inWish = wishlist.find(w => w.id === p.id);
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-thumb">
      ${p.badge ? `<span class="product-badge ${p.badge === 'Sale' ? 'sale' : ''}">${p.badge}</span>` : ''}
      <button class="wishlist-btn ${inWish ? 'active' : ''}" onclick="toggleWishlist(event,${p.id})" title="Wishlist">❤</button>
      <img src="${p.img}" alt="${p.name}"/>
    </div>
    <div class="product-info">
      <div class="product-top-row">
        <span class="brand-tag ${brandClass(p.brand)}">${p.brand}</span>
        <span class="product-color">⬤ ${p.color}</span>
      </div>
      <p class="product-name">${p.name}</p>
      <div class="size-preview">
        ${p.sizes.slice(0,4).map(s=>`<span class="size-chip" onclick="quickSelectSize(event,${p.id},${JSON.stringify(s).replace(/"/g,"'")})">${s.eu}</span>`).join('')}
        ${p.sizes.length > 4 ? `<span class="size-chip more">+${p.sizes.length-4}</span>` : ''}
      </div>
      <div class="price-row">
        <span class="product-price">P ${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="product-old-price">P ${p.oldPrice.toLocaleString()}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="add-cart-btn" onclick="openProduct(${p.id})">Select Size & Buy</button>
        <button class="view-btn" onclick="openProduct(${p.id})">👁</button>
      </div>
    </div>
  </div>`;
}

// ── NEW ARRIVALS ──────────────────────────────────────────────────
function renderArrivals() {
  const newItems = PRODUCTS.filter(p => p.badge === 'New');
  document.getElementById('arrivalsGrid').innerHTML = newItems.map(p => productCard(p)).join('');
}

// ── PRODUCT MODAL ──────────────────────────────────────────────────
function openProduct(id) {
  currentProduct = PRODUCTS.find(p => p.id === id);
  selectedSize = null;
  const p = currentProduct;
  const avgStars = p.reviews.length ? Math.round(p.reviews.reduce((s,r)=>s+r.stars,0)/p.reviews.length) : 0;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.img}" alt="${p.name}"/>
    </div>
    <div class="modal-details">
      <div class="modal-brand-row">
        <span class="brand-tag ${brandClass(p.brand)}">${p.brand}</span>
        <span class="product-color">⬤ ${p.color}</span>
      </div>
      <h2 class="modal-name">${p.name}</h2>
      ${p.reviews.length ? `<div class="modal-stars">${starsHtml(avgStars)} <span>(${p.reviews.length} review${p.reviews.length>1?'s':''})</span></div>` : ''}
      <div class="modal-price-row">
        <span class="modal-price">P ${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="modal-old-price">P ${p.oldPrice.toLocaleString()}</span>` : ''}
        ${p.oldPrice ? `<span class="modal-saving">Save P ${(p.oldPrice-p.price).toLocaleString()}</span>` : ''}
      </div>
      <p class="modal-desc">${p.desc}</p>
      <div class="size-section">
        <div class="size-header">
          <p class="size-label">Select Size (EU)</p>
          <span class="size-guide">EU / UK Guide</span>
        </div>
        <div class="sizes" id="modalSizes">
          ${p.sizes.map(s => `
            <button class="size-opt" onclick="selectSize(${JSON.stringify(s).replace(/"/g,"'")}, this)">
              <span class="size-eu">${s.eu}</span>
              <span class="size-uk">UK ${s.uk}</span>
            </button>`).join('')}
        </div>
        <p class="size-selected-msg" id="sizeMsg"></p>
      </div>
      <div class="modal-actions">
        <button class="btn-primary modal-add-btn" onclick="addToCartFromModal()">🛒 Add to Cart</button>
        <button class="btn-ghost modal-wish-btn" onclick="toggleWishlistModal(${p.id})">❤ Wishlist</button>
      </div>
      <div class="reviews">
        <h4>Customer Reviews (${p.reviews.length})</h4>
        ${p.reviews.length
          ? p.reviews.map(r => `
            <div class="review">
              <div class="review-top"><span class="review-author">${r.author}</span><span class="review-stars">${starsHtml(r.stars)}</span></div>
              <p class="review-text">${r.text}</p>
            </div>`).join('')
          : '<p style="color:var(--muted);font-size:0.82rem">No reviews yet — be the first!</p>'}
      </div>
    </div>`;
  document.getElementById('productModal').classList.add('active');
}

function quickSelectSize(e, id, size) {
  e.stopPropagation();
  openProduct(id);
}

function selectSize(size, btn) {
  selectedSize = size;
  document.querySelectorAll('.size-opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('sizeMsg').textContent = `✓ EU ${size.eu} / UK ${size.uk} selected`;
  document.getElementById('sizeMsg').style.color = 'var(--accent)';
}

function closeModal(e) {
  if (e.target === document.getElementById('productModal')) closeProductModal();
}
function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
}

function addToCartFromModal() {
  if (!selectedSize) {
    document.getElementById('sizeMsg').textContent = '⚠ Please select a size first!';
    document.getElementById('sizeMsg').style.color = 'var(--danger)';
    return;
  }
  addToCart(currentProduct, selectedSize);
  closeProductModal();
}

function quickAddCart(e, id) {
  e.stopPropagation();
  openProduct(id);
}

// ── CART ──────────────────────────────────────────────────────────
function addToCart(product, size) {
  const key = `${product.id}-${size.eu}`;
  const existing = cart.find(i => i.key === key);
  if (existing) { existing.qty++; }
  else { cart.push({ ...product, size, key, qty: 1 }); }
  updateCartUI();
  showToast(`${product.name} (EU ${size.eu}) added to cart!`);
  if (!document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('active');
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (!cart.length) {
    itemsEl.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    footerEl.style.display = 'none';
    return;
  }
  footerEl.style.display = 'block';
  itemsEl.innerHTML = cart.map((i, idx) => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${i.img}" alt="${i.name}"/></div>
      <div class="cart-item-info">
        <p class="cart-item-brand">${i.brand}</p>
        <p class="cart-item-name">${i.name}</p>
        <p class="cart-item-size">EU ${i.size.eu} / UK ${i.size.uk}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${idx},-1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
          <span class="cart-item-price">P ${(i.price * i.qty).toLocaleString()}</span>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${idx})">✕</button>
    </div>`).join('');
  const grandTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = `P ${grandTotal.toLocaleString()}`;
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}
function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}

// ── WISHLIST ──────────────────────────────────────────────────────
function toggleWishlist(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx > -1) { wishlist.splice(idx, 1); showToast('Removed from wishlist'); }
  else { wishlist.push(p); showToast(`${p.name} added to wishlist!`); }
  renderProducts();
  renderArrivals();
  renderWishlist();
}
function toggleWishlistModal(id) {
  toggleWishlist({ stopPropagation: () => {} }, id);
}
function renderWishlist() {
  const el = document.getElementById('wishlistItems');
  if (!el) return;
  el.innerHTML = wishlist.length
    ? wishlist.map(p => `
      <div class="wishlist-item">
        <img src="${p.img}" alt="${p.name}" style="width:50px;height:50px;object-fit:contain;border-radius:6px;background:var(--bg)"/>
        <div style="flex:1;margin-left:0.75rem">
          <p class="wishlist-item-name">${p.name}</p>
          <p class="wishlist-item-price">P ${p.price.toLocaleString()}</p>
        </div>
        <div style="display:flex;gap:0.5rem;align-items:center">
          <button class="add-cart-btn" style="font-size:0.75rem;padding:0.35rem 0.75rem" onclick="openProduct(${p.id})">Buy</button>
          <button onclick="toggleWishlist(event,${p.id})" style="background:none;border:none;color:var(--muted);cursor:pointer">✕</button>
        </div>
      </div>`).join('')
    : '<p style="color:var(--muted);font-size:0.85rem">Your wishlist is empty.</p>';
}

// ── CHECKOUT ──────────────────────────────────────────────────────
function proceedCheckout() {
  if (!cart.length) return;
  toggleCart();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const itemsHtml = cart.map(i => `
    <div class="checkout-item">
      <span>${i.name} (EU ${i.size.eu}) × ${i.qty}</span>
      <strong>P ${(i.price * i.qty).toLocaleString()}</strong>
    </div>`).join('');
  document.getElementById('checkoutContent').innerHTML = `
    <div class="checkout-items">${itemsHtml}</div>
    <div class="checkout-total"><span>Total</span><strong style="color:var(--accent)">P ${total.toLocaleString()}</strong></div>
    <div class="checkout-section">
      <h3>Shipping Information</h3>
      <div class="checkout-form">
        <div class="checkout-row">
          <input type="text" placeholder="First Name" class="form-input" id="co-fname"/>
          <input type="text" placeholder="Last Name" class="form-input" id="co-lname"/>
        </div>
        <input type="email" placeholder="Email address" class="form-input" id="co-email"/>
        <input type="tel" placeholder="Phone number" class="form-input" id="co-phone"/>
        <input type="text" placeholder="Delivery Address / Village" class="form-input" id="co-address"/>
        <div class="checkout-row">
          <input type="text" placeholder="City / Town" class="form-input" id="co-city"/>
          <input type="text" placeholder="District" class="form-input" id="co-district"/>
        </div>
      </div>
    </div>
    <div class="checkout-section">
      <h3>Payment Method</h3>
      <div class="payment-opts">
        <div class="payment-opt selected" onclick="selectPayment('cash',this)">💵 Cash on Delivery</div>
        <div class="payment-opt" onclick="selectPayment('orange',this)">🟠 Orange Money</div>
        <div class="payment-opt" onclick="selectPayment('myzetle',this)">💳 MyZetle</div>
      </div>
    </div>
    <button class="btn-primary full" style="margin-top:1rem" onclick="confirmOrder()">Confirm Order</button>
    <p class="form-msg" id="checkoutMsg" style="margin-top:0.75rem"></p>`;
  document.getElementById('checkoutModal').classList.add('active');
}

function selectPayment(method, btn) {
  selectedPayment = method;
  document.querySelectorAll('.payment-opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}
function closeCheckout(e) {
  if (e.target === document.getElementById('checkoutModal')) document.getElementById('checkoutModal').classList.remove('active');
}

function confirmOrder() {
  const fname = document.getElementById('co-fname')?.value.trim();
  const email = document.getElementById('co-email')?.value.trim();
  const phone = document.getElementById('co-phone')?.value.trim();
  const address = document.getElementById('co-address')?.value.trim();
  const msgEl = document.getElementById('checkoutMsg');
  if (!fname || !email || !phone || !address) {
    msgEl.textContent = 'Please fill in all required fields.';
    msgEl.className = 'form-msg error';
    return;
  }
  const orderId = `KP-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${String(Math.floor(Math.random()*999)+1).padStart(3,'0')}`;
  orderHistory.unshift({ id: orderId, items: [...cart], total: cart.reduce((s,i)=>s+i.price*i.qty,0), date: new Date().toLocaleDateString() });
  cart = [];
  updateCartUI();
  document.getElementById('checkoutModal').classList.remove('active');
  showToast(`✅ Order ${orderId} confirmed! Thank you!`);
  renderOrderHistory();
}

// ── ORDER TRACKING ──────────────────────────────────────────────────
function renderQueueItems() {
  document.getElementById('queueItems').innerHTML = QUEUE_ORDERS.map(q => `
    <div class="queue-item">
      <div>
        <p class="queue-id">${q.id}</p>
        <p style="font-size:0.8rem;color:var(--muted);margin-top:0.2rem">${q.item}</p>
      </div>
      <span class="queue-status ${q.status}">${q.status.charAt(0).toUpperCase()+q.status.slice(1)}</span>
    </div>`).join('');
}

function trackOrder() {
  const val = document.getElementById('trackingInput').value.trim();
  const el = document.getElementById('trackingResult');
  const found = QUEUE_ORDERS.find(q => q.id.toLowerCase() === val.toLowerCase());
  const userOrder = orderHistory.find(o => o.id.toLowerCase() === val.toLowerCase());
  if (found || userOrder) {
    const steps = [
      { label:'Order Received', desc:'Your order has been confirmed.', done:true },
      { label:'Being Packed', desc:'Items are being prepared for dispatch.', done: found?.status !== 'waiting' },
      { label:'Shipped', desc:'Your order is on its way.', done: found?.status === 'shipped' || found?.status === 'delivered' || !!userOrder },
      { label:'Delivered', desc:'Package delivered successfully.', done: found?.status === 'delivered' },
    ];
    el.innerHTML = `
      <p style="font-size:0.82rem;color:var(--accent);margin-bottom:1rem;font-family:'Space Mono'">Found: ${val}</p>
      <div class="tracking-steps">
        ${steps.map(s=>`<div class="track-step"><div class="track-dot ${s.done?'done':''}"></div><div class="track-info"><strong>${s.label}</strong><p>${s.desc}</p></div></div>`).join('')}
      </div>`;
  } else {
    el.innerHTML = `<p style="color:var(--danger);font-size:0.85rem;margin-top:0.75rem">Order not found. Please check your Order ID and try again.</p>`;
  }
}

// ── NOTIFICATIONS ──────────────────────────────────────────────────
function renderNotifications() {
  document.getElementById('notifList').innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item">
      <span class="notif-icon">${n.icon}</span>
      <div class="notif-text">
        <strong>${n.title}</strong>
        <p>${n.text}</p>
        <p class="notif-time">${n.time}</p>
      </div>
    </div>`).join('');
}
function subscribeNotif() {
  const email = document.getElementById('notifEmail').value.trim();
  const msg = document.getElementById('notifMsg');
  if (!email || !email.includes('@')) { msg.textContent = 'Please enter a valid email address.'; msg.className = 'form-msg error'; return; }
  msg.textContent = `✅ Subscribed! Updates will be sent to ${email}.`;
  msg.className = 'form-msg success';
  document.getElementById('notifEmail').value = '';
}

// ── ACCOUNT ──────────────────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.auth-tab:${tab==='login'?'first':'last'}-child`).classList.add('active');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('authMsg').textContent = '';
}
function registerUser() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value;
  const msg = document.getElementById('authMsg');
  if (!name || !email || !pass) { msg.textContent = 'Please fill in all fields.'; msg.className = 'form-msg error'; return; }
  currentUser = { name, email, phone, pass };
  showDashboard();
  showToast(`Welcome, ${name}! 🎉`);
}
function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const msg = document.getElementById('authMsg');
  if (!email || !pass) { msg.textContent = 'Please enter your email and password.'; msg.className = 'form-msg error'; return; }
  if (currentUser && currentUser.email === email && currentUser.pass === pass) { showDashboard(); showToast(`Welcome back, ${currentUser.name}!`); }
  else { msg.textContent = 'Invalid credentials. Please register first.'; msg.className = 'form-msg error'; }
}
function showDashboard() {
  document.getElementById('authBox').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('dashName').textContent = currentUser.name;
  document.getElementById('profileName').textContent = currentUser.name;
  document.getElementById('profileEmail').textContent = currentUser.email;
  document.getElementById('profilePhone').textContent = currentUser.phone || '—';
  renderOrderHistory();
  renderWishlist();
}
function logoutUser() {
  document.getElementById('authBox').style.display = 'block';
  document.getElementById('dashboard').style.display = 'none';
  showToast('Logged out successfully.');
}
function showDash(tab) {
  document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dash-panel').forEach(p => p.style.display = 'none');
  event.target.classList.add('active');
  document.getElementById(`dash${tab.charAt(0).toUpperCase()+tab.slice(1)}`).style.display = 'block';
  if (tab === 'wishlist') renderWishlist();
  if (tab === 'orders') renderOrderHistory();
}
function renderOrderHistory() {
  const el = document.getElementById('orderHistoryList');
  if (!el) return;
  el.innerHTML = orderHistory.length
    ? orderHistory.map(o=>`
      <div class="order-hist-item">
        <p class="order-hist-id">${o.id}</p>
        <p class="order-hist-name">${o.items.map(i=>i.name).join(', ')}</p>
        <p class="order-hist-price">P ${o.total.toLocaleString()} · ${o.date}</p>
      </div>`).join('')
    : '<p style="color:var(--muted);font-size:0.85rem">No orders yet. Start shopping!</p>';
}
function showSection(id) { document.getElementById(id).scrollIntoView({ behavior:'smooth' }); }

// ── CONTACT ──────────────────────────────────────────────────────
function sendMessage() {
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  const msg = document.getElementById('contactMsg');
  if (!name || !email || !message) { msg.textContent = 'Please fill in all required fields.'; msg.className = 'form-msg error'; return; }
  msg.textContent = `✅ Message sent! We'll get back to you at ${email} shortly.`;
  msg.className = 'form-msg success';
  ['cName','cEmail','cSubject','cMessage'].forEach(id => document.getElementById(id).value = '');
}

// ── TOAST ──────────────────────────────────────────────────────────
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
