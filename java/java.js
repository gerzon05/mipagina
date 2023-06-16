// ------- menu desplegable ----

document.querySelector(".menu").addEventListener("click", ()=>{
    document.querySelector("header nav").classList.add("nav_menu")
})
document.querySelector(".close_movil").addEventListener("click", ()=>{
    document.querySelector("header nav").classList.remove("nav_menu")
})

// ------ Slider ------------
const $slider = document.querySelector(".contenido_parte_cinco");
let sliderSection = document.querySelectorAll(".slider");
let sliderSectionLast = sliderSection[sliderSection.length -1];

function next() {
    let $sliderSectionFirst = document.querySelectorAll(".slider")[0];

    $slider.style.marginLeft = "-200%";
    $slider.style.transition = "margin-left 1s";
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("beforeend", $sliderSectionFirst)
        $slider.style.marginLeft = "-100%"
    }, 1000);
}

function prev() {
    let sliderSection = document.querySelectorAll(".slider");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    $slider.style.marginLeft = "0";
    $slider.style.transition = "margin-left 1s";
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("afterbegin", sliderSectionLast)
        $slider.style.marginLeft = "-100%"
    }, 1000);

}

// ------ preguntas parte seis -------
(function(){
    const titleQuestions = [...document.querySelectorAll('.title_preguntas')];

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('img_ratar');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();