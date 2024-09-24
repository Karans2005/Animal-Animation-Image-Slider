let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

// NEXT BUTTON IN LOGIC.
nextDom.onclick = function(){
    showSlider('next');
}
// PREV BUTTON IN LOGIC
prevDom.onclick = function(){
    showSlider('prev');
}
// Animation time next and prev button work.rule-1.
let timeRunning = 3000;
let timeAutoNext = 6300;
let runTimeOut;
let runAutoRun = setTimeout(()=>{                                   //use of array function.
    nextDom.click();
},timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    // logic next button.
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next')
    //  logic prev button.    
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');

    }
// proper  next and prev button work.rule-1.
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{                                    //use of array function.
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{                                 
        nextDom.click();
    },timeAutoNext);
}