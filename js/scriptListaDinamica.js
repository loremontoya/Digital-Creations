let products = {
  data: [
    {
      productName: "Elon Musk: El empresario que anticipa el futuro - Ashlee Vance",
      category: "tecnología",
      price: "76900",
      image: "/assets/assets lista dinamica/Smart-Watch-SIM.jpg",

    },
    {
      productName: "Steve Jobs: La biografía - Walter Isaacson",
      category: "tecnología",
      price: "119200",
      image: "/assets/assets lista dinamica/mini-teclado.jpg",

    },
    {
      productName: "Inteligencia artificial: Guía para humanos que piensan",
      category: "tecnología",
      price: "100000",
      image: "/assets/assets lista dinamica/consola-videojuegos.jpg",

    },
    {
      productName: "Las claves del éxito: La transformación digital - Enrique Dans",
      category: "tecnología",
      price: "55600",
      image: "/assets/assets lista dinamica/controlador-electrico.jpg",

    },
    {
      productName: "La ética del hacker y la era de la información - Pekka Himanen",
      category: "tecnología",
      price: "90900",
      image: "/assets/assets lista dinamica/dron.jpg",

    },
    {
      productName: "De 0 a 1: Cómo inventar el futuro - Peter Thiel y Blake Masters",
      category: "tecnología",
      price: "46900",
      image: "/assets/assets lista dinamica/luces-led.jpg",

    },
    {
      productName: "Libro María Cristina Restrepo - La Mujer De Los Sueños Rotos",
      category: "mujeres",
      price: "70000",
      image: "/assets/assets lista dinamica/Depiladora.jpg",
    },
    {
      productName: "Libro Margarita García Robayo - El Sonido De Las Olas",
      category: "mujeres",
      price: "70000",
      image: "/assets/assets lista dinamica/Mini-Plancha.jpg",
    },
    {
      productName: "Libro Quino - Mafalda. femenino singular",
      category: "mujeres",
      price: "43000",
      image: "/assets/assets lista dinamica/como-onikuma.jpg",
    },
    {
      productName: "Libro Louisa May Alcott - Mujercitas",
      category: "mujeres",
      price: "50000",
      image: "/assets/assets lista dinamica/termodigital.jpg",
    },
    {
      productName: "Libro Melissa Ibarra - Indeleble",
      category: "mujeres",
      price: "85000",
      image: "/assets/assets lista dinamica/relooj.jpg",
    },
    {
      productName: "Yo Soy Malala",
      category: "mujeres",
      price: "160000",
      image: "/assets/assets lista dinamica/lamaparauñas.jpg",
    },
    {
      productName: "El gran Gatsby - F. Scott Fitzgerald",
      category: "hombres",
      price: "53000 ",
      image: "/assets/assets lista dinamica/consola-mano.jpg",
    },

    {
      productName: "Lenguaje Corporal Atractivo para Hombres - Ferris Becker",
      category: "hombres",
      price: "76000 ",
      image: "/assets/assets lista dinamica/Afeitadora.jpg",
    },
    {
      productName: "Cómo Escapar de la Friend Zone - Ferris Becker",
      category: "hombres",
      price: "76000 ",
      image: "/assets/assets lista dinamica/gaming-Mouse.jpg",
    },
    {
      productName: "Cómo Entender a las Mujeres - Ferris Becker",
      category: "hombres",
      price: "76000 ",
      image: "/assets/assets lista dinamica/audifonos-man.jpg",
    },
    {
      productName: "Lenguaje Alfa - Alexandro Mayer,Ferris Becker",
      category: "hombres",
      price: "76000 ",
      image: "/assets/assets lista dinamica/gp-pro.jpg",
    },
    {
      productName: "Cómo Atraer Mujeres Nuevas y Mantenerlas",
      category: "hombres",
      price: "76000 ",
      image: "/assets/assets lista dinamica/silla-gamer.jpg",
    },
    {
      productName: "Oda a la oscuridad - Sigrid Sandberg",
      category: "historias",
      price: "88900",
      image: "/assets/assets lista dinamica/vaporizador-facial.jpg",
    },
    {
      productName: "El libro de la tristeza de Gabriel Ebensperger",
      category: "historias",
      price: "86900",
      image: "/assets/assets lista dinamica/bcepillo.jpg",
    },
    {
      productName: "El ingenioso hidalgo Don Quijote de la Mancha",
      category: "historias",
      price: "109900",
      image: "/assets/assets lista dinamica/bdepilacion.jpg",
    },
    {
      productName: "Cómo triunfar en la era de la distracción - Derek Thomson",
      category: "historias",
      price: "45900",
      image: "/assets/assets lista dinamica/bmascarilla.jpg",
    },
    {
      productName: "Una lección olvidada - Guillermo Altares",
      category: "historias",
      price: "86900",
      image: "/assets/assets lista dinamica/bsecadora.jpg",
    },
    {
      productName: "El viejo y el mar - Ernest Hemingway.",
      category: "historias",
      price: "50000",
      image: "/assets/assets lista dinamica/masajeador.jpg",
    },
    {
      productName: "El laberinto mental",
      category: "mente",
      price: "90000",
      image: "/assets/assets lista dinamica/balon.jpg",
    },
    {
      productName: "El camino de la guerrera",
      category: "mente",
      price: "89000",
      image: "/assets/assets lista dinamica/auriculares-bluetooth.jpg",
    },
    {
      productName: "Más fuerte que la adversidad - Walter Riso",
      category: "mente",
      price: "109000",
      image: "/assets/assets lista dinamica/gafas3d.jpg",
    },
    {
      productName: "Libro El Alquimista De Paulo Coelho.",
      category: "famosos",
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
    {
      productName: "Crónica de una muerte anunciada - Gabriel García Márquez",
      category: "famosos",
      price: "50000",
      image: "/assets/assets lista dinamica/masajeadorpies.jpg",
    },
    {
      productName: " El amor en los tiempos del cólera - Gabriel García Márquez",
      category: "famosos",
      price: "50000",
      image: "/assets/assets lista dinamica/termometrodigital.jpg",
    },

    {
      productName: "Libro Ismael Cala - El arte de escuchar(te)",
      category: "arte",
      price: "89000",
      image: "/assets/assets lista dinamica/proyector-estrellas.jpg",
    },
    {
      productName: "Libro Disney - Princesas: Mi primer libro de arte",
      category: "arte",
      price: "28900",
      image: "/assets/assets lista dinamica/airflayer.jpg",
    },
    {
      productName: "Lettering Para Todos caligrafía y lettering",
      category: "arte",
      price: "60000",
      image: "/assets/assets lista dinamica/alexa.jpg",
    },
    {
      productName: "Lettering Para Todos 2 caligrafía y lettering",
      category: "arte",
      price: "60000",
      image: "/assets/assets lista dinamica/difusor.jpg",
    },
    {
      productName: "Libro Encanto -Historias en Casita. Mi primer cómic",
      category: "arte",
      price: "29000",
      image: "/assets/assets lista dinamica/ledhadas.jpg",
    },
    {
      productName: "Libro Disney- Decora, recorta y juega con Red",
      category: "arte",
      price: "29000",
      image: "/assets/assets lista dinamica/rosaeterna.jpg",
    },
    {
      productName: "El hilo invisible - Míriam Tirado",
      category: "descuentos",
      price: "16300",
      image: "/assets/assets lista dinamica/mini-camara.jpg",
    },
    {
      productName: "Mandalas Y Canciones",
      category: "descuentos",
      price: "15000",
      image: "/assets/assets lista dinamica/camarita.jpg",
    },
    {
      productName: "El Gran Libro de los Súper Poderes",
      category: "descuentos",
      price: "25000",
      image: "/assets/assets lista dinamica/gafassol.jpg",
    },




  ],
};

for (let i of products.data) {
  // Crear la tarjeta
  let card = document.createElement("div");
  // La tarjeta debe tener una clase de categoría y debe permanecer oculta inicialmente
  card.classList.add("card", i.category, "hide");

  // Contenedor de imagen
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // Etiqueta de imagen
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.classList.add("imageLista");
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // Contenedor
  let container = document.createElement("div");
  container.classList.add("container");

  // Nombre del producto
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  // Precio
  let price = document.createElement("h6");
  const precioFormateado = new Intl.NumberFormat('es-ES').format(i.price);
  price.innerText = `$${precioFormateado}`;

  container.appendChild(price);

  // Botón "Añadir al carrito" con icono de carrito
  let addButton = document.createElement("button");
  addButton.classList.add("add-to-cart-button");
  addButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Añadir al carrito';
  addButton.addEventListener("click", function() {
    // Función para manejar el evento de clic del botón
    addToCart(i); // Aquí deberías pasar el ID del producto
  });
  container.appendChild(addButton);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

function addToCart(product) {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.productName === product.productName);

  if (existingItemIndex !== -1) {
    // Si el producto ya está en el carrito, aumenta la cantidad en 1
    cart[existingItemIndex].quantity += 1;

    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Se agregó una unidad al carrito",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    // Si el producto no está en el carrito, agrégalo con cantidad 1
    const newItem = {
      image: product.image,
      productName: product.productName,
      category: product.category,
      price: product.price,
      quantity: 1,
    };
    cart.push(newItem);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El producto se añadió correctamente al carrito",
      showConfirmButton: false,
      timer: 1500
    });
  }

  // Actualiza el carrito en el almacenamiento local y renderiza el carrito
  updateCart(cart);
  renderCart();
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "todo") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("buscar").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("buscar-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("todo");
};

function renderizarProductos() {
  baseDeDatos.forEach((info) => {
    // Crear la estructura de la tarjeta del producto
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "col-sm-4");

    // Crear el cuerpo de la tarjeta
    const miNodoCardBody = document.createElement("div");
    miNodoCardBody.classList.add("card-body");

    // Crear el título del producto
    const miNodoTitle = document.createElement("h5");
    miNodoTitle.classList.add("card-title");
    miNodoTitle.textContent = info.nombre;

    // Crear la imagen del producto
    const miNodoImagen = document.createElement("img");
    miNodoImagen.classList.add("img-fluid");
    miNodoImagen.setAttribute("src", info.imagen);

    // Crear el precio del producto
    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.classList.add("card-text");
    miNodoPrecio.textContent = `${info.precio}${divisa}`;

    // Crear el botón "Añadir al carrito" con un ícono
    const miNodoBoton = document.createElement("button");
    miNodoBoton.classList.add("btn", "btn-primary");
    miNodoBoton.textContent = "Añadir al carrito";

    const miNodoIcono = document.createElement("i");
    miNodoIcono.classList.add("fas", "fa-cart-plus");
    miNodoBoton.appendChild(miNodoIcono);

    // Agregar el evento click al botón
    miNodoBoton.addEventListener("click", () => {
      anyadirProductoAlCarrito(info.id);
    });

    // Agregar elementos al cuerpo de la tarjeta
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);

    // Agregar el cuerpo de la tarjeta al nodo del producto
    miNodo.appendChild(miNodoCardBody);

    // Agregar el nodo del producto al DOM
    DOMitems.appendChild(miNodo);
  });
}

// Función para mostrar productos en una página específica
// function renderProducts(page) {
//   const startIndex = (page - 1) * productsPerPage; 
//   const endIndex = startIndex + productsPerPage;
//   const currentProducts = products.data.slice(startIndex, endIndex);
//   console.log(currentProducts);
//   document.getElementById("products").innerHTML = "";

//   currentProducts.forEach((i) => {
//     let card = document.createElement("div");
//     card.classList.add("card", i.category, "hide");
//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");

//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     image.classList.add("imageLista");
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);

//     let container = document.createElement("div");
//     container.classList.add("container");

//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);

//     let price = document.createElement("h6");
//     const precioFormateado = new Intl.NumberFormat('es-ES').format(i.price);
//     price.innerText = `$${precioFormateado}`;

//     container.appendChild(price);

//     let addButton = document.createElement("button");
//     addButton.classList.add("add-to-cart-button");
//     addButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Añadir al carrito';
//     addButton.addEventListener("click", function () {
//       addToCart(i);
//     });
//     container.appendChild(addButton);

//     card.appendChild(container);
//     document.getElementById("products").appendChild(card);
//     
//   });
// }

// Llamar a la función para renderizar los productos en la página inicial
renderProducts(currentPage);
// Llamar a la función para actualizar la paginación
updatePagination();
