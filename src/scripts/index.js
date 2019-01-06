import '../styles/index.scss';
import data from '../data';
import Slider from "./render.js";

const slider = new Slider(data);

window.addEventListener("load", function(){
    slider.render();
    slider.tabs();

    sliderNavigation();
});

function sliderNavigation(){
    const prev = document.getElementsByClassName('surfboard-nav__prev')[0],
          next = document.getElementsByClassName('surfboard-nav__next')[0];

    prev.addEventListener("click", slider.prev.bind(slider));
    next.addEventListener("click", slider.next.bind(slider));
}






