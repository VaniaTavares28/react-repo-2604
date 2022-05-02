import instagram from "./001-instagram-2.png"
import magnifying from "./glass.png";
import homeFlask from './home-image.png';
import baseHome from './updated_Header-1.png'

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
baseHome
}

export const cardImages = [
  {
    id: "img001",
    source: acneCreamBottom,
    overlay: orangeBalm,
    caption: "Acne Cream",
    category: ["most popular"]
  },
  {
    id: "img002",
    source: vitiligioSolution,
    overlay: upperLeftFace,
    caption: "Vitiligio Solution",
    type: "new",
    text: "New!",
    category: ["most popular"]
  },
  {
    id: "img003",
    source: ezcemaCream,
    caption: "Ezcema Cream",
    category: ["most popular"]
  },
  {
    id: "img006",
    source: ezcemaCreamSpecial,
    overlay: applyCream,
    caption: "Ezcema Cream",
    category: ["most popular", "special"]
  },
  {
    id: "img005",
    source: sunOintment,
    overlay: applyBlueCream,
    caption: "Sunburn Ointment",
    text: "15% off",
    type: "discount",
    category: ["all"]
  },
  {
    id: "img006",
    source: psoriasisCream,
    caption: "Psoriasis Cream",
    category: ["all"]
  },
  {
    id: "img007",
    source: vitBalm,
    caption: "Vitiligio Balm",
    category: ["regular"]
  },
  {
    id: "img008",
    source: bigAcneCream,
    caption: "Acne Cream",
    category: ["regular"]
  },
  {
    id: "img009",
    source: ezcemaOil,
    caption: "Ezcema Oil",
    category: ["regular"]
  },
]