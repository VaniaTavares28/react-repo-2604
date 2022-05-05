import instagram from "./001-instagram-2.png"
import magnifying from "./glass.png";
import homeFlask from './home-image.png';
import baseHome from './updated_Header-1.png';
import manInBlue from './man-flower.png';
import armWithTattoo from './sincerely-media-CjHJbp-1.png';
import menu from './menu.png';

import acneCreamBottom from './Cream-2.png';
import orangeBalm from "./person-holding-a-hand-cream-3059398 (1).png";
import vitiligioSolution from "./vitiligio-9.png";
import upperLeftFace from './linh-ha-nt-2.png';
import ezcemaCreamSpecial from './special-ezcema.png';
import applyCream from './applying-body-lotion-care-cosmetic-product-286951.png'
import sunOintment from './suburn-6.png';
import ezcemaCream from './ezcema-9.png';
import psoriasisCream from './psoriasis_treatment-4.png';
import vitBalm from './vitiglio_treatment-4.png';
import bigAcneCream from './acne_Cream.png';
import ezcemaOil from './ezema_dropper-11.png';
import applyBlueCream from './person-pouring-plastic-tube-bottle-1.png'

export const images = {
instagram,
magnifying,
homeFlask,
baseHome,
manInBlue,
armWithTattoo,
menu
}

export const cardImages = [
  {
    id: "img001",
    image: acneCreamBottom,
    overlay: orangeBalm,
    title: "Acne Cream",
    category: ["most popular"]
  },
  {
    id: "img002",
    image: vitiligioSolution,
    overlay: upperLeftFace,
    title: "Vitiligio Solution",
    type: "new",
    text: "New!",
    category: ["most popular"]
  },
  {
    id: "img003",
    image: ezcemaCream,
    title: "Ezcema Cream",
    category: ["most popular"]
  },
  {
    id: "img006",
    image: ezcemaCreamSpecial,
    overlay: applyCream,
    title: "Ezcema Cream",
    category: ["most popular", "special"]
  },
  {
    id: "img005",
    image: sunOintment,
    overlay: applyBlueCream,
    title: "Sunburn Ointment",
    text: "15% off",
    type: "discount",
    category: ["all"]
  },
  {
    id: "img006",
    image: psoriasisCream,
    title: "Psoriasis Cream",
    category: ["all"]
  },
  {
    id: "img007",
    image: vitBalm,
    title: "Vitiligio Balm",
    category: ["regular"]
  },
  {
    id: "img008",
    image: bigAcneCream,
    title: "Acne Cream",
    category: ["regular"]
  },
  {
    id: "img009",
    image: ezcemaOil,
    title: "Ezcema Oil",
    category: ["regular"]
  },
]