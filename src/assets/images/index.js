import instagram from "./001-instagram-2.png"
import magnifying from "./glass.png";
import homeFlask from './home-image.png'

import acneCreamBottom from './Cream-2.png';
import brownBalm from "./person-holding-a-hand-cream-3059398 (1).png";
import vitiligioSolution from "./vitiligio-9.png";
import upperLeftFace from './linh-ha-nt-2.png';
import ezcemaCreamSpecial from './special-ezcema.png';
import applyCream from './applying-body-lotion-care-cosmetic-product-286951.png'
import sunOintment from './suburn-6.png';
import ezcemaCream from './ezcema-9.png';
import psoriasisCream from './psoriasis_treatment-4.png';
import vitBalm from './vitiglio_treatment-4.png';
import bigAcneCream from './acne_Cream.png';
import ezcemaOil from './ezema_dropper-11.png'

export const images = {
instagram,
magnifying,
homeFlask
}

export const cardImages = [
  {
    id: "img001",
    source: acneCreamBottom,
    overlay: brownBalm,
    caption: "Acne Cream"
  },
  {
    id: "img002",
    source: vitiligioSolution,
    overlay: upperLeftFace,
    caption: "Vitiligio Solution",
    type: "new"
  },
  {
    id: "img003",
    source: sunOintment,
    overlay: brownBalm,
    caption: "Sunburn Ointment",
    type: "discount"
  },
  {
    id: "img004",
    source: ezcemaCream,
    caption: "Ezcema Cream",
  },
  {
    id: "img005",
    source: psoriasisCream,
    overlay: upperLeftFace,
    caption: "Psoriasis Cream"
  },
  {
    id: "img006",
    source: vitBalm,
    caption: "Vitiligio Balm"
  },
  {
    id: "img007",
    source: bigAcneCream,
    caption: "Acne Cream"
  },
  {
    id: "img008",
    source: ezcemaOil,
    caption: "Ezcema Oil"
  },
  {
    id: "img009",
    source: ezcemaCreamSpecial,
    overlay: applyCream,
    caption: "Ezcema Cream"
  },
]