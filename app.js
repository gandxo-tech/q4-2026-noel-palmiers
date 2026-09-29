/**
 * Noël sous les Palmiers — Application Client
 * Décoration de Noël artisanale en raphia, wax et teck · Cotonou, Bénin
 * Expérience raffinée : SVG Only, Zéro Emoji, Typographie aérée & Micro-interactions
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CONFIGURATION & DONNÉES DU CATALOGUE
  // =========================================================================

  const CONFIG = {
    freeShippingThreshold: 25000,
    shippingFee: 1500,
    phoneWhatsApp: '22997000000',
    currency: 'FCFA',
    targetDate: new Date(new Date().getFullYear(), 11, 20, 23, 59, 59).getTime()
  };

  const PRODUCTS = [
    {
      id: 'pack-sapin',
      name: 'Pack Salon Féerique complet',
      category: 'packs',
      categoryLabel: 'Pack clé en main',
      price: 49900,
      wasPrice: 58600,
      image: '/img/hero.webp',
      badge: '-15% Économie',
      rating: 4.9,
      reviews: 94,
      artisan: 'Collectif d’artisans · Ganvié, Dantokpa & Abomey',
      shortDesc: 'La quintessence de notre artisanat : le sapin 1,5m en raphia naturel, 12 boules en wax revalorisé, la guirlande LED ornée de cauris et l’étoile en calebasse pyrogravée. Prêt en 10 minutes.',
      specs: [
        'Sapin raphia 1,50 m pliable sur socle teck robuste',
        '12 boules en chutes de wax revalorisées (incassables)',
        'Guirlande 5 m micro-LED blanc chaud parée de cauris',
        'Étoile de cime sculptée en calebasse pyrogravée',
        'Économisez 8 700 FCFA par rapport à l’achat individuel'
      ]
    },
    {
      id: 'sapin-raphia',
      name: 'Sapin en Raphia tressé main',
      category: 'sapins',
      categoryLabel: 'Sapin d’art',
      price: 34900,
      wasPrice: 39900,
      image: '/img/sapin-raphia.webp',
      badge: 'Bestseller',
      rating: 4.9,
      reviews: 214,
      artisan: 'Koffi A., Maître vannier à Ganvié',
      shortDesc: 'Tressé brin par brin en fibres de raphia naturel de la vallée de l’Ouémé. Son armature repliable en teck massif vous garantit des années de réveillons sans perdre la moindre aiguille.',
      options: [
        { label: 'Taille Standard · 1,20 m', price: 26900 },
        { label: 'Taille Salon · 1,50 m', price: 34900, default: true },
        { label: 'Taille Majestueuse · 1,80 m', price: 44900 }
      ],
      specs: [
        'Fibres de raphia naturel 100% végétales et douces',
        'Armature et pied stable en teck massif de récupération',
        'Montage et démontage facile en 5 minutes chrono',
        'Pochon en toile de jute naturelle offert pour le rangement'
      ]
    },
    {
      id: 'boules-wax',
      name: 'Coffret Boules en Wax revalorisé',
      category: 'deco',
      categoryLabel: 'Ornements & Suspensions',
      price: 11900,
      wasPrice: 13900,
      image: '/img/boules-wax.webp',
      badge: 'Zéro Déchet',
      rating: 4.8,
      reviews: 152,
      artisan: 'Akouavi D., Couturière à Dantokpa',
      shortDesc: 'L’âme vibrante des marchés de Cotonou : chutes de wax festif sélectionnées et cousues sur noyau léger ultra-résistant. Totalement incassables, idéales pour les enfants et les animaux.',
      options: [
        { label: 'Coffret 6 boules assorties', price: 11900, default: true },
        { label: 'Coffret Prestige 12 boules', price: 21900 }
      ],
      specs: [
        'Tissus wax authentiques aux couleurs chatoyantes',
        'Boules incassables, résistantes aux chutes et aux chocs',
        'Attaches dorées nouées prêtes à suspendre',
        'Pochon kraft & brin de raphia protecteur offert'
      ]
    },
    {
      id: 'creche-teck',
      name: 'Crèche de la Nativité en Teck d’Abomey',
      category: 'creches',
      categoryLabel: 'Sculpture d’art',
      price: 38500,
      wasPrice: 42000,
      image: '/img/creche.webp',
      badge: 'Pièce Rare',
      rating: 5.0,
      reviews: 46,
      artisan: 'Dossou G., Sculpteur sur bois à Abomey',
      shortDesc: 'Une œuvre d’art et de tradition : personnages bibliques sculptés dans du teck d’Abomey ciré à la cire d’abeille pure, incarnant la bienveillance universelle au cœur du patrimoine béninois.',
      specs: [
        'Bois de teck & iroko issu de forêts gérées durablement',
        'Finition lustrée naturelle à la cire d’abeille parfumée',
        'Ensemble complet : Marie, Joseph, Enfant Jésus, Rois mages et bergers',
        'Chaque pièce porte le poinçon de l’atelier d’Abomey'
      ]
    },
    {
      id: 'couronne-porte',
      name: 'Couronne d’Accueil Raphia & Cauris',
      category: 'deco',
      categoryLabel: 'Couronne festive',
      price: 14500,
      wasPrice: 16500,
      image: '/img/couronne.webp',
      badge: 'Accueil festif',
      rating: 4.7,
      reviews: 68,
      artisan: 'Atelier Ganvié & Cotonou',
      shortDesc: 'Accueillez vos convives avec la grâce des traditions : tressage circulaire généreux paré de véritables cauris polis et d’un élégant ruban de wax aux teintes d’or et de carmin.',
      specs: [
        'Diamètre généreux : 38 cm',
        'Raphia naturel blond et cauris protecteurs polis',
        'Boucle d’accroche invisible prête à poser',
        'Idéale pour porte d’entrée ou centre de table de réveillon'
      ]
    },
    {
      id: 'guirlande-cauris',
      name: 'Guirlande Lumineuse Cauris & Raphia 5m',
      category: 'deco',
      categoryLabel: 'Lumières de Noël',
      price: 12900,
      wasPrice: 14900,
      image: '/img/guirlande.webp',
      badge: 'Lumière douce',
      rating: 4.8,
      reviews: 91,
      artisan: 'Atelier Cotonou Plage',
      shortDesc: 'Une lumière douce et féerique : 40 micro-LED blanc chaud, chacune enchâssée dans un coquillage cauris naturel et une fine tresse de raphia. Alimentation mixte piles ou port USB.',
      specs: [
        'Longueur totale 5 mètres (40 LED basse consommation)',
        'Boîtier piles (AA) + adaptateur USB inclus',
        'Câble cuivre tressé de raphia fin ultra discret',
        'Ne chauffe jamais, totalement sécurisé pour les enfants'
      ]
    },
    {
      id: 'etoile-calebasse',
      name: 'Étoile de Cime en Calebasse pyrogravée',
      category: 'deco',
      categoryLabel: 'Cime de sapin',
      price: 9500,
      wasPrice: 11000,
      image: '/img/etoile.webp',
      badge: 'Coup de cœur',
      rating: 4.9,
      reviews: 78,
      artisan: 'Atelier artisanal d’Allada',
      shortDesc: 'Le joyau du sapin : étoile façonnée dans une calebasse séchée locale, pyrogravée à la main de motifs géométriques béninois qui diffusent une lueur féerique quand la guirlande scintille.',
      specs: [
        'Diamètre 22 cm, manchon de fixation universel pour sapin',
        'Pyrogravure réalisée pièce par pièce au fer rouge',
        'Poids plume, ne fait jamais pencher la branche maîtresse'
      ]
    },
    {
      id: 'table-fete',
      name: 'Ensemble Art de la Table Festif',
      category: 'packs',
      categoryLabel: 'Table de fête',
      price: 28900,
      wasPrice: 34000,
      image: '/src/assets/images/table_noel_tropical_1790705299830.jpg',
      badge: 'Nouveauté',
      rating: 4.9,
      reviews: 35,
      artisan: 'Tisseurs d’Allada & Ébénistes de Cotonou',
      shortDesc: 'Habillez votre banquet de Noël aux couleurs du Bénin : chemin de table en tissage traditionnel Kanvo et wax, 6 ronds de serviette tressés de cauris et 2 photophores sculptés en teck.',
      specs: [
        'Grand chemin de table 200 x 40 cm en coton lourd tissé main',
        '6 ronds de serviette tressés de raphia et cauris',
        '2 photophores en teck massif sculpté avec bougies chauffe-plat',
        'Lavable en machine délicat à 30°C'
      ]
    }
  ];

  const PROMO_CODES = {
    PALMIER10: { type: 'pct', value: 10, label: '-10% sur toute la boutique' },
    AVENT15: { type: 'pct', value: 15, label: '-15% dès 30 000 FCFA', min: 30000 },
    CAURIS2000: { type: 'fixed', value: 2000, label: '-2 000 FCFA immédiats' },
    LIVRAISONGRATUITE: { type: 'free_shipping', value: 0, label: 'Livraison express offerte' },
    WAXPLUS1: { type: 'gift', value: 0, label: '1 Boule en wax exclusive offerte' }
  };

  const ADVENT_DAYS = [
    { day: 1, title: 'L’Harmattan & la Nuit Magique', type: 'tale', icon: 'icon-sparkle', text: 'Bienvenue dans la féerie de Décembre ! Au Bénin, l’Harmattan apporte ce vent doux du Nord qui annonce les grandes retrouvailles familiales et la lumière dorée des veillées.' },
    { day: 2, title: 'Code Privilège : PALMIER10', type: 'promo', promo: 'PALMIER10', icon: 'icon-tag', text: 'Un cadeau de bienvenue : profitez de -10% immédiats sur toute la collection avec le code exclusif PALMIER10 !' },
    { day: 3, title: 'Recette : Le Bissap Impérial', type: 'recipe', icon: 'icon-recipe', text: 'Infusez des fleurs d’hibiscus séchées avec deux clous de girofle, un bâton de cannelle, du zeste d’orange fraîche et un filet de sirop de gingembre. Servez glacé pour le réveillon !' },
    { day: 4, title: 'Le Secret du Raphia Durable', type: 'craft', icon: 'icon-leaf', text: 'À Ganvié, nos vanniers récoltent les folioles de jeunes palmiers sans jamais abattre l’arbre. Une ressource 100% renouvelable et biodégradable qui protège la lagune.' },
    { day: 5, title: 'Code Flash : CAURIS2000', type: 'promo', promo: 'CAURIS2000', icon: 'icon-tag', text: 'Économisez 2 000 FCFA sur votre commande aujourd’hui avec le code spécial CAURIS2000 !' },
    { day: 6, title: 'Le Chant des Enfants de Cotonou', type: 'tale', icon: 'icon-book', text: 'Dès la tombée du soir, les ruelles résonnent du tam-tam et des grelots improvisés. Les enfants chantent la joie de la Nativité en échange de quelques douceurs.' },
    { day: 7, title: 'Astuce Déco : Centre de Table Royal', type: 'craft', icon: 'icon-craft', text: 'Prenez 3 grandes feuilles de palmier séchées, disposez au centre 4 boules en wax et notre guirlande en cauris. Une atmosphère festive en 3 minutes chrono.' },
    { day: 8, title: 'Code : LIVRAISONGRATUITE', type: 'promo', promo: 'LIVRAISONGRATUITE', icon: 'icon-truck', text: 'Votre livraison à domicile à Cotonou et Calavi est offerte avec le code promo LIVRAISONGRATUITE !' },
    { day: 9, title: 'La Noblesse du Teck d’Abomey', type: 'craft', icon: 'icon-craft', text: 'Le bois utilisé pour sculpter nos crèches provient d’anciennes charpentes et de chutes revalorisées. Poli à la cire d’abeille pure, il dégage une douce fragrance d’antan.' },
    { day: 10, title: 'Gourmandise : Bâtonnets Kloui-Kloui', type: 'recipe', icon: 'icon-recipe', text: 'Les fameux bâtonnets croustillants d’arachide parfumés à l’oignon et au piment doux : la gourmandise incontournable à grignoter au pied du sapin.' },
    { day: 11, title: 'Code Privilège : AVENT15', type: 'promo', promo: 'AVENT15', icon: 'icon-tag', text: 'Profitez de -15% de réduction dès 30 000 FCFA d’achat avec le code exclusif AVENT15 !' },
    { day: 12, title: 'La Bénédiction des Cauris', type: 'tale', icon: 'icon-shell', text: 'Ancienne monnaie des souverains du Dahomey, le coquillage cauris symbolise la prospérité, la fertilité et la protection du foyer pour l’année nouvelle.' },
    { day: 13, title: 'L’Atelier Flottant de Ganvié', type: 'craft', icon: 'icon-hands', text: 'C’est sur l’eau, dans des pirogues d’iroko, que Koffi et ses apprentis font sécher les tresses de raphia au grand soleil pour leur donner cette couleur d’or ambré.' },
    { day: 14, title: 'Cadeau Exclusif : WAXPLUS1', type: 'promo', promo: 'WAXPLUS1', icon: 'icon-gift', text: 'Ajoutez le code WAXPLUS1 pour recevoir 1 boule en wax collector offerte dans votre colis de Noël !' },
    { day: 15, title: 'L’Arôme des Mandarines de Fête', type: 'tale', icon: 'icon-recipe', text: 'Les pyramides de mandarines juteuses sur les étals de Dantokpa et les ananas pain de sucre doux comme du miel : le parfum authentique de notre Noël tropical.' },
    { day: 16, title: 'Le Marché Dantokpa Scintillant', type: 'tale', icon: 'icon-sparkle', text: 'Akouavi parcourt les allées aux mille couleurs pour dénicher les coupons de wax les plus précieux délaissés par les grands ateliers de couture.' },
    { day: 17, title: 'La Pyrogravure au Fer Rouge', type: 'craft', icon: 'icon-craft', text: 'Chaque étoile de cime est gravée patiemment à main levée au fer rouge pour y dessiner des motifs géométriques royaux du sud-Bénin.' },
    { day: 18, title: 'Dernière Ligne Droite Livraisons', type: 'tale', icon: 'icon-truck', text: 'Plus que 2 jours avant la clôture des commandes garanties sous le sapin pour le 24 décembre au soir !' },
    { day: 19, title: 'Le Conte du Colibri Doré', type: 'tale', icon: 'icon-book', text: 'Une légende béninoise raconte qu’un petit oiseau déposa la première étincelle d’étoile sur la cime du grand arbre pour réconcilier tous les hommes de la forêt.' },
    { day: 20, title: 'Dernier Jour Garanti', type: 'tale', icon: 'icon-clock', text: 'Aujourd’hui 20 décembre est le dernier délai pour commander avec livraison garantie sous le sapin à Cotonou et Calavi.' },
    { day: 21, title: 'Le Festin du Réveillon', type: 'recipe', icon: 'icon-recipe', text: 'Le poulet bicyclette braisé aux épices douces et l’igname pilée fumante accompagnée de sa sauce d’arachide onctueuse : le grand banquet est en chemin !' },
    { day: 22, title: 'La Veillée aux Mille Flammes', type: 'craft', icon: 'icon-sparkle', text: 'Allumez votre guirlande en cauris, tamisez le salon et écoutez le doux cliquetis des coquillages bercé par le vent.' },
    { day: 23, title: 'Les Paquets Déposés sous les Palmiers', type: 'tale', icon: 'icon-gift', text: 'Les cadeaux enveloppés de papier kraft et noués de raphia sont prêts. Le cœur des enfants bat la chamade.' },
    { day: 24, title: 'Joyeux Noël sous les Palmiers', type: 'tale', icon: 'icon-tree', text: 'Que cette nuit bénie apporte paix, santé, prospérité et amour dans votre foyer et auprès de tous vos proches ! Joyeux Noël !' }
  ];

  // =========================================================================
  // 2. ÉTAT DE L'APPLICATION
  // =========================================================================

  let cart = [];
  let appliedPromo = null;
  let activeCategory = 'all';
  let searchQuery = '';
  let openedDays = new Set();
  // Selected state for PDP
  let currentPDP = {
    product: null,
    selectedOption: null,
    quantity: 1
  };

  function formatFCFA(amount) {
    return new Intl.NumberFormat('fr-FR').format(Math.round(amount)) + ' ' + CONFIG.currency;
  }

  function loadState() {
    try {
      const savedCart = localStorage.getItem('nsp_cart_v5');
      if (savedCart) cart = JSON.parse(savedCart);

      const savedPromo = localStorage.getItem('nsp_promo_v5');
      if (savedPromo && PROMO_CODES[savedPromo]) appliedPromo = PROMO_CODES[savedPromo];

      const savedDays = localStorage.getItem('nsp_advent_v5');
      if (savedDays) openedDays = new Set(JSON.parse(savedDays));
    } catch (e) {
      console.warn('LocalStorage indisponible:', e);
    }
  }

  function saveCart() {
    try {
      localStorage.setItem('nsp_cart_v5', JSON.stringify(cart));
      if (appliedPromo) {
        const promoKey = Object.keys(PROMO_CODES).find(k => PROMO_CODES[k] === appliedPromo);
        if (promoKey) localStorage.setItem('nsp_promo_v5', promoKey);
      } else {
        localStorage.removeItem('nsp_promo_v5');
      }
    } catch (e) {
      console.warn('Erreur sauvegarde panier:', e);
    }
  }

  function saveAdvent() {
    try {
      localStorage.setItem('nsp_advent_v5', JSON.stringify(Array.from(openedDays)));
    } catch (e) {
      console.warn('Erreur sauvegarde avent:', e);
    }
  }

  // =========================================================================
  // 3. LOGIQUE DU PANIER (CART) & LIVRAISON
  // =========================================================================

  function getCartSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  function calculateCart() {
    const subtotal = getCartSubtotal();
    let discount = 0;
    let freeShipping = subtotal >= CONFIG.freeShippingThreshold;
    let shipping = freeShipping ? 0 : (subtotal > 0 ? CONFIG.shippingFee : 0);
    let giftBadge = null;

    if (appliedPromo) {
      if (appliedPromo.type === 'pct') {
        if (!appliedPromo.min || subtotal >= appliedPromo.min) {
          discount = Math.round(subtotal * (appliedPromo.value / 100));
        }
      } else if (appliedPromo.type === 'fixed') {
        discount = Math.min(subtotal, appliedPromo.value);
      } else if (appliedPromo.type === 'free_shipping') {
        shipping = 0;
        freeShipping = true;
      } else if (appliedPromo.type === 'gift') {
        giftBadge = appliedPromo.label;
      }
    }

    const total = Math.max(0, subtotal - discount + shipping);

    return {
      subtotal,
      discount,
      shipping,
      freeShipping,
      total,
      giftBadge,
      itemsCount: cart.reduce((acc, item) => acc + item.quantity, 0)
    };
  }

  function addToCart(productId, optionLabel = null, quantity = 1) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    let price = prod.price;
    let chosenOption = optionLabel;

    if (prod.options && prod.options.length) {
      if (!chosenOption) {
        const defaultOpt = prod.options.find(o => o.default) || prod.options[0];
        chosenOption = defaultOpt.label;
        price = defaultOpt.price;
      } else {
        const matched = prod.options.find(o => o.label === chosenOption);
        if (matched) price = matched.price;
      }
    }

    const existingIndex = cart.findIndex(item => item.id === prod.id && item.option === chosenOption);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: prod.id,
        name: prod.name,
        price: price,
        image: prod.image,
        option: chosenOption,
        quantity: quantity
      });
    }

    saveCart();
    updateCartUI();
    showToast(`Ajouté au panier : ${prod.name}`);
    playFestiveChime('bell');

    const badge = document.getElementById('header-cart-badge');
    if (badge) {
      badge.classList.remove('bump');
      void badge.offsetWidth;
      badge.classList.add('bump');
    }
  }

  function updateQuantity(index, delta) {
    if (!cart[index]) return;
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }

  function applyPromoCode() {
    const input = document.getElementById('cart-promo-input');
    const feedback = document.getElementById('cart-promo-feedback');
    if (!input || !feedback) return;

    const raw = input.value.trim().toUpperCase();
    if (!raw) {
      feedback.textContent = 'Veuillez saisir un code promotionnel.';
      feedback.className = 'cart-promo-feedback error';
      return;
    }

    const promo = PROMO_CODES[raw];
    if (!promo) {
      feedback.textContent = 'Code invalide ou expiré pour Noël.';
      feedback.className = 'cart-promo-feedback error';
      return;
    }

    const subtotal = getCartSubtotal();
    if (promo.min && subtotal < promo.min) {
      feedback.textContent = `Ce code nécessite un panier minimum de ${formatFCFA(promo.min)}.`;
      feedback.className = 'cart-promo-feedback error';
      return;
    }

    appliedPromo = promo;
    saveCart();
    updateCartUI();
    feedback.textContent = `Code ${raw} validé : ${promo.label}`;
    feedback.className = 'cart-promo-feedback success';
    playFestiveChime('chord');
    showToast(`Code promo ${raw} appliqué !`);
  }

  function updateCartUI() {
    const calc = calculateCart();

    const headerBadge = document.getElementById('header-cart-badge');
    if (headerBadge) {
      headerBadge.textContent = calc.itemsCount;
      headerBadge.setAttribute('aria-label', `${calc.itemsCount} article${calc.itemsCount > 1 ? 's' : ''}`);
    }

    const mobileBadge = document.getElementById('mobile-cart-badge');
    if (mobileBadge) mobileBadge.textContent = calc.itemsCount;

    const cartCountTitle = document.getElementById('cart-drawer-count');
    if (cartCountTitle) {
      cartCountTitle.textContent = `(${calc.itemsCount} article${calc.itemsCount > 1 ? 's' : ''})`;
    }

    const stickyBar = document.getElementById('mobile-sticky-bar');
    const stickyCount = document.getElementById('sticky-cart-count');
    const stickyTotal = document.getElementById('sticky-cart-total');

    if (stickyBar) {
      if (calc.itemsCount > 0) {
        stickyBar.classList.add('is-visible');
        if (stickyCount) stickyCount.textContent = `${calc.itemsCount} article${calc.itemsCount > 1 ? 's' : ''}`;
        if (stickyTotal) stickyTotal.textContent = formatFCFA(calc.total);
      } else {
        stickyBar.classList.remove('is-visible');
      }
    }

    const shippingBar = document.getElementById('cart-shipping-bar');
    const shippingMsg = document.getElementById('cart-shipping-msg');

    if (shippingBar && shippingMsg) {
      const remaining = CONFIG.freeShippingThreshold - calc.subtotal;
      const pct = Math.min(100, Math.round((calc.subtotal / CONFIG.freeShippingThreshold) * 100));
      shippingBar.style.width = `${pct}%`;

      if (calc.subtotal === 0) {
        shippingMsg.innerHTML = `Livraison offerte dès <strong>${formatFCFA(CONFIG.freeShippingThreshold)}</strong>`;
      } else if (remaining > 0 && !calc.freeShipping) {
        shippingMsg.innerHTML = `Plus que <strong>${formatFCFA(remaining)}</strong> pour la livraison offerte`;
      } else {
        shippingMsg.innerHTML = `<strong>Livraison offerte partout à Cotonou &amp; Calavi</strong>`;
      }
    }

    const container = document.getElementById('cart-items-container');
    const emptyNotice = document.getElementById('cart-empty-notice');
    const footer = document.getElementById('cart-footer');

    if (container && emptyNotice && footer) {
      if (cart.length === 0) {
        container.innerHTML = '';
        emptyNotice.style.display = 'flex';
        footer.style.display = 'none';
      } else {
        emptyNotice.style.display = 'none';
        footer.style.display = 'flex';

        container.innerHTML = cart.map((item, idx) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" width="72" height="72" loading="lazy">
            <div class="cart-item-info">
              <span class="cart-item-title">${item.name}</span>
              ${item.option ? `<span class="cart-item-option">${item.option}</span>` : ''}
              <div class="cart-item-bottom">
                <span class="cart-item-price">${formatFCFA(item.price * item.quantity)}</span>
                <div class="cart-qty-ctrl">
                  <button class="qty-btn" onclick="window.NSP.updateQuantity(${idx}, -1)" aria-label="Diminuer la quantité de 1">&minus;</button>
                  <span class="qty-val">${item.quantity}</span>
                  <button class="qty-btn" onclick="window.NSP.updateQuantity(${idx}, 1)" aria-label="Augmenter la quantité de 1">&plus;</button>
                </div>
              </div>
            </div>
          </div>
        `).join('');
      }
    }

    const subtotalEl = document.getElementById('cart-subtotal');
    if (subtotalEl) subtotalEl.textContent = formatFCFA(calc.subtotal);

    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount');
    const discountLbl = document.getElementById('cart-discount-label');

    if (discountRow && discountEl) {
      if (calc.discount > 0) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `-${formatFCFA(calc.discount)}`;
        if (discountLbl && appliedPromo) discountLbl.textContent = appliedPromo.label;
      } else {
        discountRow.style.display = 'none';
      }
    }

    const shippingEl = document.getElementById('cart-shipping');
    if (shippingEl) {
      shippingEl.textContent = calc.shipping === 0 ? 'Offerte' : formatFCFA(calc.shipping);
    }

    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = formatFCFA(calc.total);

    const giftBadge = document.getElementById('cart-gift-badge');
    if (giftBadge) {
      if (calc.giftBadge) {
        giftBadge.style.display = 'block';
        giftBadge.innerHTML = `<svg class="svg-ico svg-ico-xs"><use href="#icon-gift"/></svg> Cadeau inclus : ${calc.giftBadge}`;
      } else {
        giftBadge.style.display = 'none';
      }
    }

    const waBtn = document.getElementById('btn-checkout-whatsapp');
    if (waBtn) {
      waBtn.href = generateWhatsAppCartURL(calc);
    }
  }

  function generateWhatsAppCartURL(calc) {
    let msg = `Bonjour Noël sous les Palmiers !\n\n`;
    msg += `Je souhaite passer commande pour ma décoration de fête :\n`;

    cart.forEach(item => {
      msg += `- ${item.quantity}x ${item.name}`;
      if (item.option) msg += ` (${item.option})`;
      msg += ` : ${formatFCFA(item.price * item.quantity)}\n`;
    });

    msg += `\nSous-total : ${formatFCFA(calc.subtotal)}\n`;

    if (calc.discount > 0) {
      msg += `Remise promo : -${formatFCFA(calc.discount)}\n`;
    }

    msg += `Livraison : ${calc.shipping === 0 ? 'Offerte' : formatFCFA(calc.shipping)}\n`;

    if (calc.giftBadge) {
      msg += `Cadeau inclus : ${calc.giftBadge}\n`;
    }

    msg += `TOTAL : ${formatFCFA(calc.total)}\n\n`;
    msg += `Pouvez-vous me confirmer la disponibilité et le créneau de livraison à mon adresse (Cotonou / Calavi / autre) ? Merci !`;

    return `https://wa.me/${CONFIG.phoneWhatsApp}?text=${encodeURIComponent(msg)}`;
  }

  function openCart() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer && backdrop) {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      backdrop.style.display = 'block';
      document.body.style.overflow = 'hidden';
      initAudio();
    }
  }

  function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      backdrop.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  // =========================================================================
  // 4. RENDU DE LA BOUTIQUE & RECHERCHE INSTANTANÉE (SVG ONLY)
  // =========================================================================

  function renderProducts() {
    const grid = document.getElementById('products-grid');
    const status = document.getElementById('shop-results-status');
    if (!grid) return;

    let filtered = PRODUCTS.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery) ||
        p.shortDesc.toLowerCase().includes(searchQuery) ||
        p.artisan.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });

    if (status) {
      status.textContent = `${filtered.length} création${filtered.length > 1 ? 's' : ''} d’art disponible${filtered.length > 1 ? 's' : ''} pour votre fête`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="margin-bottom: 1rem; color: var(--gold);">
            <svg class="svg-ico svg-ico-xl"><use href="#icon-search"/></svg>
          </div>
          <h3 style="font-family: var(--font-display); color: var(--primary); font-size: 1.4rem;">Aucune création ne correspond à votre recherche</h3>
          <p style="color: var(--text-muted); margin-top: 0.4rem;">Essayez avec un autre mot-clé comme "sapin", "wax", "cauris" ou "crèche".</p>
          <button class="btn btn-outline btn-sm" style="margin-top: 1.2rem;" onclick="window.NSP.resetFilters()">
            Afficher toutes les créations
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(prod => {
      let badgeClass = 'gold';
      if (prod.badge.includes('%')) badgeClass = 'accent';

      return `
        <article class="product-card reveal-on-scroll is-revealed" data-id="${prod.id}">
          <div class="product-thumb-wrap" onclick="window.NSP.openPDP('${prod.id}')" role="button" tabindex="0" aria-label="Voir la fiche détaillée de ${prod.name}">
            <img 
              src="${prod.image}" 
              alt="${prod.name} – Décoration artisanale béninoise" 
              class="product-thumb" 
              loading="lazy" 
              decoding="async"
              width="340" 
              height="340"
            >
            <span class="product-badge ${badgeClass}">${prod.badge}</span>
            <span class="product-quick-view-hint">
              <span>Aperçu</span>
              <svg class="svg-ico svg-ico-xs"><use href="#icon-arrow-right"/></svg>
            </span>
          </div>

          <div class="product-body">
            <div class="product-meta">
              <span class="product-artisan-chip">${prod.artisan.split('·')[0].trim()}</span>
              <div class="product-rating" aria-label="Noté ${prod.rating} sur 5 par nos clients">
                <svg class="svg-star-sm"><use href="#icon-star"/></svg>
                <span>${prod.rating}</span>
                <span class="product-reviews-count">(${prod.reviews})</span>
              </div>
            </div>

            <h3 class="product-title" onclick="window.NSP.openPDP('${prod.id}')" role="button" tabindex="0">
              ${prod.name}
            </h3>

            <p class="product-desc">${prod.shortDesc}</p>

            <div class="product-footer">
              <div class="product-pricing">
                <span class="product-price-current">${formatFCFA(prod.price)}</span>
                ${prod.wasPrice ? `<span class="product-price-old">${formatFCFA(prod.wasPrice)}</span>` : ''}
              </div>

              <button 
                class="product-add-btn" 
                onclick="window.NSP.quickAddToCart('${prod.id}', this)" 
                aria-label="Ajouter ${prod.name} au panier"
                title="Ajouter au panier"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function quickAddToCart(productId, btnEl) {
    addToCart(productId);
    if (btnEl) {
      btnEl.classList.add('added');
      btnEl.innerHTML = `<svg class="svg-ico"><use href="#icon-check"/></svg>`;
      setTimeout(() => {
        btnEl.classList.remove('added');
        btnEl.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"></path></svg>`;
      }, 1500);
    }
  }

  function resetFilters() {
    activeCategory = 'all';
    searchQuery = '';
    const input = document.getElementById('shop-search-input');
    if (input) input.value = '';
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) clearBtn.style.display = 'none';

    document.querySelectorAll('.cat-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === 'all');
      b.setAttribute('aria-selected', b.dataset.cat === 'all' ? 'true' : 'false');
    });

    renderProducts();
  }

  // =========================================================================
  // 5. MODALE DÉTAIL PRODUIT (PDP)
  // =========================================================================

  function openPDP(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    currentPDP.product = prod;
    currentPDP.selectedOption = prod.options ? (prod.options.find(o => o.default) || prod.options[0]) : null;
    currentPDP.quantity = 1;

    const modal = document.getElementById('pdp-modal');
    const container = document.getElementById('pdp-content-container');
    if (!modal || !container) return;

    const currentPrice = currentPDP.selectedOption ? currentPDP.selectedOption.price : prod.price;

    container.innerHTML = `
      <div class="pdp-grid">
        <div class="pdp-gallery-wrap">
          <img src="${prod.image}" alt="${prod.name}" width="500" height="500">
        </div>

        <div class="pdp-info-wrap">
          <span class="pdp-category-kicker">${prod.categoryLabel} · Bénin</span>
          <h2 class="pdp-title" id="pdp-modal-title">${prod.name}</h2>
          <div class="pdp-artisan-note">
            <svg class="svg-ico svg-ico-xs"><use href="#icon-hands"/></svg>
            Façonné avec fierté par <strong>${prod.artisan}</strong>
          </div>

          <div class="pdp-pricing-row">
            <span class="pdp-price-current" id="pdp-live-price">${formatFCFA(currentPrice)}</span>
            ${prod.wasPrice ? `<span class="pdp-price-old">${formatFCFA(prod.wasPrice)}</span>` : ''}
          </div>

          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
            ${prod.shortDesc}
          </p>

          ${prod.options && prod.options.length ? `
            <div class="pdp-options-container">
              <span class="pdp-options-title">Choisissez votre format :</span>
              ${prod.options.map(opt => `
                <button 
                  class="pdp-option-btn ${opt.label === currentPDP.selectedOption.label ? 'active' : ''}" 
                  onclick="window.NSP.selectPDPOption('${opt.label}')"
                >
                  <span>${opt.label}</span>
                  <strong>${formatFCFA(opt.price)}</strong>
                </button>
              `).join('')}
            </div>
          ` : ''}

          <ul class="pdp-specs-list">
            ${prod.specs.map(s => `
              <li>
                <svg class="svg-ico svg-ico-xs text-gold"><use href="#icon-check"/></svg>
                <span>${s}</span>
              </li>
            `).join('')}
          </ul>

          <div class="pdp-actions-row">
            <button class="btn btn-primary btn-block btn-lg" onclick="window.NSP.addCurrentPDPToCart()">
              <svg class="svg-ico"><use href="#icon-cart"/></svg>
              <span>Ajouter au panier</span>
            </button>
            <a 
              href="https://wa.me/${CONFIG.phoneWhatsApp}?text=${encodeURIComponent(`Bonjour, j'aimerais commander directement le \"${prod.name}\" (${formatFCFA(currentPrice)}) sur WhatsApp.`)}"
              target="_blank" 
              rel="noopener" 
              class="btn btn-whatsapp btn-lg"
              title="Commander directement sur WhatsApp"
            >
              <svg class="svg-ico" aria-hidden="true"><use href="#icon-send"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    initAudio();
  }

  function selectPDPOption(label) {
    if (!currentPDP.product || !currentPDP.product.options) return;
    const opt = currentPDP.product.options.find(o => o.label === label);
    if (!opt) return;

    currentPDP.selectedOption = opt;

    document.querySelectorAll('.pdp-option-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.includes(label));
    });

    const priceEl = document.getElementById('pdp-live-price');
    if (priceEl) priceEl.textContent = formatFCFA(opt.price);
  }

  function addCurrentPDPToCart() {
    if (!currentPDP.product) return;
    addToCart(
      currentPDP.product.id,
      currentPDP.selectedOption ? currentPDP.selectedOption.label : null,
      currentPDP.quantity
    );
    closePDP();
    openCart();
  }

  function closePDP() {
    const modal = document.getElementById('pdp-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  // =========================================================================
  // 6. CALENDRIER DE L'AVENT INTERACTIF (SVG ONLY)
  // =========================================================================

  function renderAdventCalendar() {
    const grid = document.getElementById('advent-grid');
    const unlockedEl = document.getElementById('advent-unlocked-count');
    const meterFill = document.getElementById('advent-meter-fill');
    if (!grid) return;

    if (unlockedEl) unlockedEl.textContent = `${openedDays.size} / 24`;
    if (meterFill) {
      const pct = Math.round((openedDays.size / 24) * 100);
      meterFill.style.width = `${pct}%`;
    }

    grid.innerHTML = ADVENT_DAYS.map(item => {
      const isOpened = openedDays.has(item.day);

      return `
        <div 
          class="advent-box ${isOpened ? 'is-opened' : ''}" 
          onclick="window.NSP.openAdventDay(${item.day})"
          role="button"
          tabindex="0"
          aria-label="Jour ${item.day} du calendrier de l'Avent, ${isOpened ? 'déjà débloqué' : 'cliquer pour ouvrir'}"
        >
          <div class="advent-box-seal">
            <svg class="svg-ico svg-ico-xs"><use href="${isOpened ? '#icon-check' : '#icon-star'}"/></svg>
          </div>
          <div class="advent-box-num">${item.day}</div>
          <div class="advent-box-title">${isOpened ? item.title : 'Surprise de fête'}</div>
          <div class="advent-box-status">
            ${isOpened ? 'Débloqué' : 'Découvrir'}
          </div>
        </div>
      `;
    }).join('');
  }

  function openAdventDay(dayNum) {
    const item = ADVENT_DAYS.find(d => d.day === dayNum);
    if (!item) return;

    openedDays.add(dayNum);
    saveAdvent();
    renderAdventCalendar();

    const modal = document.getElementById('advent-modal');
    const title = document.getElementById('advent-modal-title');
    const dayBadge = document.getElementById('advent-modal-day-badge');
    const body = document.getElementById('advent-modal-body');

    if (!modal || !title || !dayBadge || !body) return;

    dayBadge.textContent = `Jour ${item.day} de Décembre`;
    title.textContent = item.title;

    let contentHtml = `
      <div class="advent-surprise-icon-wrap">
        <svg class="svg-ico svg-ico-xl text-gold"><use href="#${item.icon}"/></svg>
      </div>
      <p class="advent-surprise-text">${item.text}</p>
    `;

    if (item.type === 'promo' && item.promo) {
      contentHtml += `
        <div class="advent-promo-code-card">
          <span class="advent-promo-kicker">Votre code secret exclusif</span>
          <div class="advent-promo-code-val">${item.promo}</div>
          <p class="advent-promo-label">${PROMO_CODES[item.promo].label}</p>
        </div>
        <button class="btn btn-primary btn-block" onclick="window.NSP.applyPromoFromAdvent('${item.promo}')">
          <svg class="svg-ico"><use href="#icon-cart"/></svg>
          <span>Appliquer immédiatement au panier</span>
        </button>
      `;
    } else {
      contentHtml += `
        <button class="btn btn-outline btn-block" onclick="window.NSP.closeAdventModal()">
          Fermer la surprise
        </button>
      `;
    }

    body.innerHTML = contentHtml;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    playFestiveChime('chord');
  }

  function applyPromoFromAdvent(code) {
    closeAdventModal();
    const input = document.getElementById('cart-promo-input');
    if (input) input.value = code;
    openCart();
    applyPromoCode();
  }

  function closeAdventModal() {
    const modal = document.getElementById('advent-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  // =========================================================================
  // 7. GÉNÉRATEUR DE LETTRE AU PÈRE NOËL (WISH LIST)
  // =========================================================================

  function renderSantaChecklist() {
    const checklist = document.getElementById('santa-wishes-checklist');
    if (!checklist) return;

    checklist.innerHTML = PRODUCTS.map(prod => `
      <label class="wish-item">
        <input 
          type="checkbox" 
          value="${prod.id}" 
          data-price="${prod.price}" 
          data-name="${prod.name}" 
          onchange="window.NSP.updateSantaLetterPreview()"
        >
        <div class="wish-info">
          <span class="wish-name">${prod.name}</span>
          <span class="wish-price">${formatFCFA(prod.price)}</span>
        </div>
      </label>
    `).join('');

    updateSantaLetterPreview();
  }

  function getSelectedSantaWishes() {
    const checked = document.querySelectorAll('#santa-wishes-checklist input[type="checkbox"]:checked');
    return Array.from(checked).map(cb => ({
      id: cb.value,
      name: cb.dataset.name,
      price: parseInt(cb.dataset.price, 10)
    }));
  }

  function updateSantaLetterPreview() {
    const nameInput = document.getElementById('santa-sender-name');
    const recipientSelect = document.getElementById('santa-recipient');
    const noteInput = document.getElementById('santa-custom-note');
    const previewEl = document.getElementById('santa-preview-text');
    const totalEl = document.getElementById('santa-estimated-total');
    const shareBtn = document.getElementById('santa-share-whatsapp');

    const sender = (nameInput && nameInput.value.trim()) || 'Moi';
    const recipient = (recipientSelect && recipientSelect.value) || 'Père Noël sous les Palmiers';
    const note = (noteInput && noteInput.value.trim()) || 'J’ai hâte de réunir toute notre famille autour d’un salon chaleureux !';

    const wishes = getSelectedSantaWishes();
    const totalBudget = wishes.reduce((sum, w) => sum + w.price, 0);

    if (totalEl) totalEl.textContent = formatFCFA(totalBudget);

    if (!previewEl) return;

    if (wishes.length === 0) {
      previewEl.innerHTML = `<i>Cochez vos créations d'art coup de cœur ci-dessus pour composer votre lettre...</i>`;
      if (shareBtn) shareBtn.href = '#';
      return;
    }

    let letterText = `Ma Lettre de Vœux sous les Palmiers\n\n`;
    letterText += `Cher ${recipient},\n\n`;
    letterText += `${note}\n\n`;
    letterText += `Voici les créations artisanales béninoises que je rêve d'accueillir dans notre foyer :\n`;

    wishes.forEach(w => {
      letterText += `- ${w.name} (${formatFCFA(w.price)})\n`;
    });

    letterText += `\nBudget estimé des souhaits : ${formatFCFA(totalBudget)}\n\n`;
    letterText += `Avec toute mon affection,\n`;
    letterText += `— ${sender}`;

    previewEl.textContent = letterText;

    if (shareBtn) {
      shareBtn.href = `https://wa.me/?text=${encodeURIComponent(letterText)}`;
    }
  }

  function addSantaWishesToCart() {
    const wishes = getSelectedSantaWishes();
    if (wishes.length === 0) {
      showToast('Veuillez cocher au moins une création de votre liste');
      return;
    }

    wishes.forEach(w => addToCart(w.id));
    openCart();
    showToast(`${wishes.length} création(s) ajoutée(s) au panier`);
    playFestiveChime('chord');
  }

  // =========================================================================
  // 8. COMPTE À REBOURS LIVRAISON GARANTIE (COUNTDOWN)
  // =========================================================================

  function startCountdown() {
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-minutes');
    const secsEl = document.getElementById('cd-seconds');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    function update() {
      const now = Date.now();
      let diff = CONFIG.targetDate - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);

      const mins = Math.floor(diff / (1000 * 60));
      diff -= mins * (1000 * 60);

      const secs = Math.floor(diff / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(mins).padStart(2, '0');
      secsEl.textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  // =========================================================================
  // 9. NOTIFICATIONS TOAST & SCROLL REVEAL (SVG ONLY)
  // =========================================================================

  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <svg class="svg-ico svg-ico-sm text-gold" aria-hidden="true"><use href="#icon-check"/></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // =========================================================================
  // 10. GESTION DU SCROLL REVEAL & ANIMATIONS D'ÉCRITURE (TYPEWRITER)
  // =========================================================================

  function initTypewriter() {
    const prefersReducedMotion = typeof window.matchMedia === 'function' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;

    // 1. Machine à écrire tournante sur le titre principal Hero
    const heroTarget = document.getElementById('hero-typewriter');
    if (heroTarget) {
      let phrases = [];
      try {
        const raw = heroTarget.getAttribute('data-phrases');
        phrases = raw ? JSON.parse(raw) : ['du raphia béninois.'];
      } catch (err) {
        phrases = ['du raphia béninois.', 'de nos artisans de Ganvié.', 'des étoffes wax de Cotonou.', 'du teck d\'Abomey.'];
      }

      if (prefersReducedMotion) {
        heroTarget.textContent = phrases[0];
        return;
      }

      let phraseIndex = 0;
      let charIndex = phrases[0].length;
      let isDeleting = false;
      let typingDelay = 70;

      function typeLoop() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
          charIndex--;
          heroTarget.textContent = currentPhrase.substring(0, charIndex);
          typingDelay = 35;
        } else {
          charIndex++;
          heroTarget.textContent = currentPhrase.substring(0, charIndex);
          typingDelay = 65;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          typingDelay = 2200; // Pause à la fin de la phrase
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typingDelay = 380; // Petite pause avant la nouvelle phrase
        }

        setTimeout(typeLoop, typingDelay);
      }

      // Initialiser avec un petit délai fluide après chargement
      setTimeout(typeLoop, 1800);
    }

    // 2. Machine à écrire d'apparition sur les titres de section (au scroll)
    document.querySelectorAll('.typewriter-reveal').forEach(el => {
      const fullText = el.getAttribute('data-text') || el.textContent;
      if (prefersReducedMotion) {
        el.textContent = fullText;
        return;
      }

      // Sauvegarde du texte original pour réinjection lettre par lettre
      el.textContent = '';
      el.classList.add('is-typing-ready');
    });
  }

  function playHeadlineTypewriter(element) {
    if (!element || element.dataset.hasTyped) return;
    element.dataset.hasTyped = 'true';

    const textToType = element.getAttribute('data-text') || '';
    if (!textToType) return;

    let index = 0;
    element.textContent = '';
    element.classList.add('is-typing');

    function step() {
      if (index < textToType.length) {
        element.textContent += textToType.charAt(index);
        index++;
        setTimeout(step, 45);
      } else {
        setTimeout(() => {
          element.classList.remove('is-typing');
          element.classList.add('is-typed-complete');
        }, 1000);
      }
    }

    setTimeout(step, 120);
  }

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed');
        const typewriterEl = el.querySelector('.typewriter-reveal');
        if (typewriterEl) typewriterEl.textContent = typewriterEl.getAttribute('data-text') || '';
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');

          // Déclencher l'animation d'écriture si un titre phare est présent
          const typewriterEl = entry.target.querySelector('.typewriter-reveal');
          if (typewriterEl) {
            playHeadlineTypewriter(typewriterEl);
          } else if (entry.target.classList.contains('typewriter-reveal')) {
            playHeadlineTypewriter(entry.target);
          }

          // Cascade fluide (stagger) pour les enfants
          const staggerItems = entry.target.querySelectorAll('.stagger-item, .product-card, .artisan-card, .faq-item, .testimonial-card');
          staggerItems.forEach((item, idx) => {
            item.style.transitionDelay = `${(idx * 0.08) + 0.05}s`;
            item.classList.add('is-revealed');
          });

          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    document.querySelectorAll('.reveal-on-scroll, .section-head, .artisan-card, .faq-item, .testimonial-card').forEach(el => {
      observer.observe(el);
    });
  }

  // =========================================================================
  // 11. GESTION DES ÉVÉNEMENTS GLOBAUX
  // =========================================================================

  function initEventListeners() {
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      if (header) {
        header.classList.toggle('is-scrolled', window.scrollY > 30);
      }
    }, { passive: true });

    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartBackdrop = document.getElementById('cart-backdrop');

    if (openCartBtn) openCartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

    const burgerBtn = document.getElementById('burger-btn');
    const closeMobileNav = document.getElementById('close-mobile-nav');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileBackdrop = document.getElementById('mobile-nav-backdrop');

    function openMobileMenu() {
      if (mobileNav && mobileBackdrop) {
        mobileNav.classList.add('is-open');
        mobileNav.setAttribute('aria-hidden', 'false');
        mobileBackdrop.classList.add('is-active');
        if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMobileMenu() {
      if (mobileNav && mobileBackdrop) {
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
        mobileBackdrop.classList.remove('is-active');
        if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }

    if (burgerBtn) burgerBtn.addEventListener('click', openMobileMenu);
    if (closeMobileNav) closeMobileNav.addEventListener('click', closeMobileMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    const searchInput = document.getElementById('shop-search-input');
    const searchClear = document.getElementById('search-clear-btn');

    if (searchInput) {
      let debounceTimer = null;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          searchQuery = e.target.value.trim().toLowerCase();
          if (searchClear) searchClear.style.display = searchQuery ? 'grid' : 'none';
          renderProducts();
        }, 120);
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        renderProducts();
        if (searchInput) searchInput.focus();
      });
    }

    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeCategory = btn.dataset.cat;
        renderProducts();
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCart();
        closePDP();
        closeAdventModal();
        closeMobileMenu();
      }
    });

    const pdpModal = document.getElementById('pdp-modal');
    if (pdpModal) {
      pdpModal.addEventListener('click', (e) => {
        if (e.target === pdpModal) closePDP();
      });
    }

    const adventModal = document.getElementById('advent-modal');
    if (adventModal) {
      adventModal.addEventListener('click', (e) => {
        if (e.target === adventModal) closeAdventModal();
      });
    }
  }

  // =========================================================================
  // 11. INITIALISATION GÉNÉRALE
  // =========================================================================

  function init() {
    loadState();
    renderProducts();
    renderAdventCalendar();
    renderSantaChecklist();
    startCountdown();
    updateCartUI();
    initEventListeners();
    initScrollReveal();
    initTypewriter();
  }

  window.NSP = {
    addToCart,
    quickAddToCart,
    updateQuantity,
    applyPromoCode,
    applyPromoFromAdvent,
    openCart,
    closeCart,
    openPDP,
    closePDP,
    selectPDPOption,
    addCurrentPDPToCart,
    openAdventDay,
    closeAdventModal,
    updateSantaLetterPreview,
    addSantaWishesToCart,
    resetFilters
  };

  if (document.getElementById('products-grid')) {
    init();
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
