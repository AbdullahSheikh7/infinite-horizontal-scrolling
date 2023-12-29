// Write code to create and object of positions for controlling every slider element
// let lefts = {};
// let totalHorizontalSlidersContainer = Array.from(document.querySelectorAll(".container .images"));
// totalHorizontalSlidersContainer.forEach((slider, i) => {
//   lefts[i] = slider
// });

let taking = 1;
let slide = -1;
let totalHorizontalSlidersContainer = Array.from(document.getElementsByClassName("images"));

totalHorizontalSlidersContainer.forEach((slider, i) => {
    slider.style.transform = `translateX(${slider.firstElementChild.offsetWidth * slide}px)`;
    let first = slider.firstElementChild.cloneNode(true);
    let last = slider.lastElementChild.cloneNode(true);
    slider.append(first);
    slider.prepend(last);
    slider.style.transition = "all 500ms ease-in-out";
});

const moveLeft = (caller) => {
    if (taking == 0) {
        return;
    } else {
        taking = 0;
        slide -= 1;
        let images = caller.parentElement.previousElementSibling.firstElementChild;
        let length = images.childElementCount - 2;
        let one = images.firstElementChild.offsetWidth;
        console.log(slide)
        images.style.transform = `translateX(${one * slide}px)`;
        if (slide == -length) {
            setTimeout(() => {
                images.style.transition = "";
                slide = 0;
                images.style.transform = `translateX(${one * slide}px)`;
            }, 500);
            setTimeout(() => {
                images.style.transition = "all 500ms ease-in-out";
            }, 600);
        }
        setTimeout(() => {
            taking = 1;
        }, 600);
    }
}

const moveRight = (caller) => {
    if (taking == 0) {
        return;
    } else {
        taking = 0;
        slide += 1;
        let images = caller.parentElement.previousElementSibling.firstElementChild;
        let length = images.childElementCount - 2;
        let one = images.firstElementChild.offsetWidth;
        images.style.transform = `translateX(${one * slide}px)`;
        if (slide == 0) {
            setTimeout(() => {
                images.style.transition = "";
                slide = -length;
                images.style.transform = `translateX(${one * slide}px)`;
            }, 500);
            setTimeout(() => {
                images.style.transition = "all 500ms ease-in-out";
            }, 600);
        }
        setTimeout(() => {
            taking = 1;
        }, 600);
    }
}
