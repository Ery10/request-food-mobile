export interface ItemProps {
  image: any;
  title: string;
  price: number;
  quantity: number;
  category?: string;
  newPrice?: number;
}

// Constantes para as imagens
const imageCamarao = require("../assets/images/crepes/crepe-camarão.jpg");
const imageFrango = require("../assets/images/crepes/crepe-frango.jpg");
const imageCharque = require("../assets/images/crepes/crepe-charque.jpg");
const imageCalabresa = require("../assets/images/crepes/crepe-calabresa.jpg");
const imagePeitoDePeru = require("../assets/images/crepes/crepe-peito-de-peru.jpeg");
const imageBacon = require("../assets/images/crepes/crepe-bacon.jpg");
const imageSalame = require("../assets/images/crepes/crepe-salame.webp");
const imageAtum = require("../assets/images/crepes/crepe-atum.jpg");
const imageMarguerita = require("../assets/images/crepes/crepe-marguerita.jpg");
const imagePalmitoErvas = require("../assets/images/crepes/crepe-palmito-ervas.jpg");
const imageQueijo = require("../assets/images/crepes/crepe-queijo.jpg");
const imageCartola = require("../assets/images/crepes/crepe-cartola.jpg");
const imageRomeuEJulieta = require("../assets/images/crepes/crepe-romeu-e-julieta.webp");
const imageDoceDeLeite = require("../assets/images/crepes/crepe-doce-de-leite.jpg");
const imageBrigadeiro = require("../assets/images/crepes/crepe-brigadeiro.jpg");
const imageChocolate = require("../assets/images/crepes/crepe-chocolate.jpg");

const imageCoxinhaCharque = require("../assets/images/salgados/coxinha-charque.jpg");
const imageEmpadaCamarao = require("../assets/images/salgados/empada-camarão.webp");
const imageCoxinhaFrango = require("../assets/images/salgados/coxinha-frango.jpg");
const imageCoxinhaFrangoCatupiry = require("../assets/images/salgados/coxinha-frango-catupiry.jpg");
const imageCoxinhaFrangoCheddar = require("../assets/images/salgados/coxinha-frango-cheddar.jpeg");
const imageEmpadaFrango = require("../assets/images/salgados/empada-frango.jpg");
const imageRisoleCarne = require("../assets/images/salgados/risole-carne.jpg");
const imageEnroladinho = require("../assets/images/salgados/enroladinho.jpg");
const imageEsfirraFrango = require("../assets/images/salgados/esfirra-frango.jpg");
const imageEsfirraCarne = require("../assets/images/salgados/esfirra-carne.jpg");
const imageEsfirraCalabresa = require("../assets/images/salgados/esfirra-calabresa.jpg");

const imageSucosPolpa = require("../assets/images/bebidas/sucos-polpa.jpg");
const imageRefrigeranteLata = require("../assets/images/bebidas/refrigerante-lata.jpg");
const imageRefrigerante1L = require("../assets/images/bebidas/refrigerante-1l.jpg");
const imageH2oLimoneto = require("../assets/images/bebidas/h2o-limoneto.webp");

// Dados
export const menuProducts = [
  {
    category: "Crepes",
    items: [
      {
        image: imageCamarao,
        title: "Camarão ao catupiry",
        price: 9.0,
        quantity: 1,
        newPrice: 9.0,
      },
      {
        image: imageFrango,
        title: "Frango",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageCharque,
        title: "Charque",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageCalabresa,
        title: "Calabresa",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imagePeitoDePeru,
        title: "Peito de peru",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageBacon,
        title: "Bacon",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageSalame,
        title: "Salame",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageAtum,
        title: "Atum",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageMarguerita,
        title: "Marguerita",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imagePalmitoErvas,
        title: "Palmito com ervas",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageQueijo,
        title: "3 Queijos",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageCartola,
        title: "Cartola",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageRomeuEJulieta,
        title: "Romeu e Julieta",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageDoceDeLeite,
        title: "Doce de leite",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageBrigadeiro,
        title: "Brigadeiro",
        price: 8.0,
        quantity: 1,
      },
      {
        image: imageChocolate,
        title: "Chocolate",
        price: 8.0,
        quantity: 1,
      },
    ],
  },
  {
    category: "Salgados",
    items: [
      {
        image: imageCoxinhaCharque,
        title: "Coxinha de charque",
        price: 4.5,
        quantity: 1,
      },
      {
        image: imageEmpadaCamarao,
        title: "Empada de camarão",
        price: 4.5,
        quantity: 1,
      },
      {
        image: imageCoxinhaFrango,
        title: "Coxinha de frango",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageCoxinhaFrangoCatupiry,
        title: "Coxinha frango com catupiry",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageCoxinhaFrangoCheddar,
        title: "Coxinha frango com cheddar",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageEmpadaFrango,
        title: "Empada de frango",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageRisoleCarne,
        title: "Risole de carne",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageEnroladinho,
        title: "Enroladinho",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageEsfirraFrango,
        title: "Esfirra de frango",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageEsfirraCarne,
        title: "Esfirra de carne",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageEsfirraCalabresa,
        title: "Esfirra de calabresa",
        price: 4.0,
        quantity: 1,
      },
    ],
  },
  {
    category: "Bebidas",
    items: [
      {
        image: imageSucosPolpa,
        title: "Sucos de Polpa (500ml)",
        price: 5.0,
        quantity: 1,
      },
      {
        image: imageRefrigeranteLata,
        title: "Refrigerante lata",
        price: 4.0,
        quantity: 1,
      },
      {
        image: imageRefrigerante1L,
        title: "Refrigerante 1L",
        price: 6.0,
        quantity: 1,
      },
      {
        image: imageH2oLimoneto,
        title: "H20 Limoneto",
        price: 4.0,
        quantity: 1,
      },
    ],
  },
];
