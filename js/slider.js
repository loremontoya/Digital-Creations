//slider

let products = [
  {
    productName: "Libro El principito - Antoine de Saint-Exupéry.",
    category: "mente",
    price: "50000",
    image: "/assets/e-tech-sustain-producto1.png",
  },
  {
    productName: "Libro El Alquimista De Paulo Coelho.",
    category: "mente",
    price: "50000",
    image: "/assets/assets lista dinamica/zapatillas.jpg",
  },
  {
    productName: "El viejo y el mar - Ernest Hemingway.",
    category: "famosos",
    price: "50000",
    image: "/assets/assets lista dinamica/masajeador.jpg",
  },
  {
    productName: "Ensayo sobre la ceguera - José Saramago",
    category: "famosos",
    price: "50000",
    image: "/assets/assets lista dinamica/termometro.jpg",
  },
  {
    productName: "Cien años de soledad - Gabriel García Márquez",
    category: "famosos",
    price: "74000",
    image: "/assets/assets lista dinamica/monitor.jpg",
  },
];

let containerSlider = document.getElementById('slider-container');

products.forEach((product) => {
  let card = document.createElement('article');
  card.className = 'card__article swiper-slide';
  card.innerHTML = `
    
    <div class="card__image">
      <img src="${product.image}" alt="image" class="card__img">
      <div class="card__shadow"></div>
    </div>

    <div class="card__data">
      <h3 class="card__name">${product.productName}</h3>
      <p class="card__description">
        ${product.price}
      </p>
      <a href="/pages/page-catalogo.html" class="card__button">
        <button class="add-to-cart-button">
          Conocer más <i class="fas fa-arrow-right"></i>
        </button>
      </a>
    </div>

  `;
  containerSlider.appendChild(card);
});