import Glide from "@glidejs/glide";
import { Controls } from "@glidejs/glide/dist/glide.modular.esm";

export function slideIndex() {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    focusAt: "center",
    animationDuration: 2500,
    // breakpoints: {
    //   1024: {
    //     perView: 1
    //   },
    //   600: {
    //     perView: 1
    //   }
    // },
    autoplay: 5000,
  }).mount({ Controls });
}
