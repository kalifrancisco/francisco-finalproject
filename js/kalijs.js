//js for custom large cursor:

let innerC = document.querySelector(".inner_cursor");
let outerC = document.querySelector(".outer_cursor");

document.addEventListener("mousemove", moveCurs);


function moveCurs(e) {
    let x = e.clientX;
    let y = e.clientY;

    console.log(x);
    console.log(y);

    innerC.style.left = `${x}px`;
    innerC.style.top = `${y}px`;

    outerC.style.left = `${x}px`;
    outerC.style.top = `${y}px`;

}


//paralaz slide in effect:
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
        });
 });


 const hiddenTest = document.querySelectorAll(".hidden");

hiddenElements.forEach((thing) => observer.observe(thing))

