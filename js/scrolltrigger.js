
const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
            

        }

    });    
});

const hiddenbottomElements = document.querySelectorAll('.hidden-bottom');
hiddenbottomElements.forEach((el)=>observer.observe(el));

const hiddentopElements = document.querySelectorAll('.hidden-top');
hiddentopElements.forEach((el)=>observer.observe(el));


const hiddenleftElements = document.querySelectorAll('.hidden-left');
hiddenleftElements.forEach((el)=>observer.observe(el));


window.addEventListener("scroll", reveal);

function reveal (){
    var reveals = document.querySelectorAll(".reveal-right, .reveal-left, .reveal-top, .reveal-bottom, .reveal-right-slider, .reveal-left-slider");

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 160;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

