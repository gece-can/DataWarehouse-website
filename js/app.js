// ============= NAVBAR SHADOW =============
window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.header');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }
    else
    {
      nav.classList.remove("add-shadow");
    }
  });

// ============= NAVBAR SHADOW =============
const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

    function handleScrollNext (direction) {
        const cards = document.querySelector('.card-content')
        cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
    }

    function handleScrollPrev (direction) {
        const cards = document.querySelector('.card-content')
        cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100
    }

    next.addEventListener('click', handleScrollNext)
    prev.addEventListener('click', handleScrollPrev)