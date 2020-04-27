class Temp {
    static global() {
        Temp.carouselCon = document.getElementById('carouselHolder');
        Temp.isDown = false;
        Temp.startX;
        Temp.scrollLeft;
    }

    // select template
    static selectTemp(e) {
        const temp = document.querySelectorAll('.page');

        if (e.target.classList.contains('designBtn')) {

            if (e.target.classList.contains('designBtn1')) {
                temp.forEach((item) => {
                    item.style.display = 'none';
                    document.querySelector('.design_1').style.display = 'block';
                    if (item.style.display === "none") {
                        item.remove();
                    }
                });
            }
            if (e.target.classList.contains('designBtn2')) {
                temp.forEach((item) => {
                    item.style.display = 'none';
                    document.querySelector('.design_2').style.display = 'block';
                    if (item.style.display === "none") {
                        item.remove();
                    }
                });
            }
            if (e.target.classList.contains('designBtn3')) {
                temp.forEach((item) => {
                    item.style.display = 'none';
                    document.querySelector('.design_3').style.display = 'block';
                    if (item.style.display === "none") {
                        item.remove();
                    }
                });
            }
            //! hide template layer
            document.getElementById('tempCon').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

    }

    // cursor navigation
    static cursorNavigation() {
        const slider = document.getElementById('carousel');

        // mouse down
        slider.addEventListener('mousedown', (e) => {
            // active down
            Temp.isDown = true;
            // *get startX point
            Temp.startX = e.pageX - slider.offsetLeft;
            // !store last scrollleft value
            Temp.scrollLeft = slider.scrollLeft;
        });

        // mouse leave
        slider.addEventListener('mouseleave', () => {
            // disable down
            Temp.isDown = false;
        });

        // mouse up
        slider.addEventListener('mouseup', () => {
            // disable down
            Temp.isDown = false;
        });

        // mouse move
        slider.addEventListener('mousemove', (e) => {
            if (Temp.isDown) { // if isDown true
                // prevent default behaviour
                e.preventDefault();
                // get moveTo point
                const x = e.pageX - slider.offsetLeft;
                // calc diff
                const walk = (x - Temp.startX);
                // continue scroll from last scrollleft value - walk
                slider.scrollLeft = Temp.scrollLeft - walk;
            }
        });

    }

    // buttons navigation
    static btnsNavigation(e) {
        const slider = document.getElementById('carousel');

        if (e.target.classList.contains('clickNextSlide')) {
            // !scrollBy
            let boxWidth = 320;
            let boxMarginRight = 25;
            let scrollBy = boxWidth + boxMarginRight;
            // *scroll 
            slider.scrollBy({
                top: 0,
                left: scrollBy,
                behavior: 'smooth'
            });
        }

        if (e.target.classList.contains('clickPrevSlide')) {
            // !scrollBy
            let boxWidth = 320;
            let boxMarginRight = 25;
            let scrollBy = boxWidth + boxMarginRight;
            // *scroll 
            slider.scrollBy({
                top: 0,
                left: -scrollBy,
                behavior: 'smooth'
            });
        }
    }

}
// init global
Temp.global();
// init cursor
Temp.cursorNavigation();
// !Events
// cursor
Temp.carouselCon.addEventListener('click', (e) => Temp.selectTemp(e));
// btns
Temp.carouselCon.addEventListener('click', Temp.btnsNavigation);
// center slider
window.addEventListener('load', (e) => {
    const slider = document.getElementById('carousel');
    let w = slider.scrollWidth - slider.clientWidth;
    slider.scrollBy({
        top: 0,
        left: w / 2,
        behavior: 'smooth'
    });
});