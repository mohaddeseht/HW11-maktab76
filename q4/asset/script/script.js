
const wrapper = document.createElement('div');
wrapper.className = 'Carousel';
document.body.append(wrapper);


const div1 = document.createElement('div');
const title1 = document.createElement('h1');
title1.textContent = "React Vue and HTML";
const paragraph1 = document.createElement('p');
paragraph1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam harum quos incidunt a possimus suscipit ut perspiciatis asperiores vitae!"
div1.appendChild(title1);
div1.appendChild(paragraph1);
div1.className = 'slide';
div1.style.backgroundColor = "rgb(102, 19, 60)";
wrapper.appendChild(div1);


const div2 = document.createElement('div');
const title2 = document.createElement('h1');
title2.textContent = "tailwind CSS works by scanning all of your HTML";
const paragraph2 = document.createElement('p');
paragraph2.textContent = "Lorem ipsum dolor sit amet incidunt a possimus suscipit ut asperiores vitae!"
div2.appendChild(title2);
div2.appendChild(paragraph2);
div2.className = 'slide';
div2.style.backgroundColor = "rgb(102, 19, 95)";
wrapper.appendChild(div2);


const div3 = document.createElement('div');
const title3 = document.createElement('h1');
title3.textContent = "your big Idea";
const paragraph3 = document.createElement('p');
paragraph3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam harum quos incidunt vitae!"
div3.appendChild(title3);
div3.appendChild(paragraph3);
div3.className = 'slide';
div3.style.backgroundColor = "rgb(19, 58, 102)";
wrapper.appendChild(div3);

const slide = [div1, div2, div3];



let counter = 0;
setInterval(setSlide, 3000);
setSlide();
function setSlide() {
    slide.forEach((div, i) => {
        // if (i === counter) {
        //     div.style.display = 'block';
        // } else {
        //     div.style.display = 'none';
        // }
        div.style.display = i === counter ? 'flex' : 'none';
    });
    // counter = counter >= 2 ? 0 : counter + 1;
    counter = (counter + 1) % 3;
}
