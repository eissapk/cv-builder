class MainApp {
    static global() {
        // nav
        MainApp.nav = document.querySelector("#nav");
        // buttons
        MainApp.nextBtn = document.getElementById("nextBtn");
        MainApp.prevBtn = document.getElementById("previousBtn");
        // info
        MainApp.counter = 0;
        // header
        MainApp.startBtn = document.getElementById('getStartedBtn');
        // loader
        MainApp.loader = document.getElementById('loader');
    }

    // next
    static next() {
        const sections = document.querySelectorAll('.formSection');
        // *show previous button
        MainApp.prevBtn.classList.remove('hideBtn');
        // update counter
        if (MainApp.counter >= 0) {
            MainApp.counter += 1;
        }
        if (MainApp.counter >= sections.length - 1) {
            MainApp.counter = sections.length - 1;
            // hide next button
            MainApp.nextBtn.classList.add('hideBtn');
            // show print button
            document.getElementById("submitBtn").classList.remove('hideBtn');
        }
        //! remove active class
        sections.forEach(function (item) {
            item.classList.remove("active");
            // remove backword effect
            item.classList.remove("backword");
        });
        //* add active class to current section
        sections[MainApp.counter].classList.add('active');

        // style nav anchors
        const anchors = document.querySelectorAll('#nav ul li a');
        // !reset anchors
        anchors.forEach(function (a) {
            a.style.cssText = "color:#262b33; font-weight:normal";
        });
        // *enable relative anchor
        anchors[MainApp.counter].style.cssText = "color:#2196f3; font-weight:600";

    }

    // prev
    static prev() {
        const sections = document.querySelectorAll('.formSection');
        // *show next button
        MainApp.nextBtn.classList.remove('hideBtn');
        // !hide print button
        document.getElementById("submitBtn").classList.add('hideBtn');
        // update counter
        if (MainApp.counter <= sections.length - 1) {
            MainApp.counter -= 1;
        }
        if (MainApp.counter <= 0) {
            MainApp.counter = 0;
            // hide prev button
            MainApp.prevBtn.classList.add('hideBtn');
        }
        //! remove active class
        sections.forEach(function (item) {
            item.classList.remove("active");
            // add backword effect
            item.classList.add("backword");
        });
        //* add active class to current section
        sections[MainApp.counter].classList.add('active');

        // style nav anchors
        const anchors = document.querySelectorAll('#nav ul li a');
        // !reset anchors
        anchors.forEach(function (a) {
            a.style.cssText = "color:#262b33; font-weight:normal";
        });
        // *enable relative anchor
        anchors[MainApp.counter].style.cssText = "color:#2196f3; font-weight:600";

    }

    // navigate
    static navigate(e) {
        const sections = document.querySelectorAll('.formSection');
        const printBtn = document.getElementById("submitBtn");

        if (e.target.nodeName === "A") {
            const anchor = e.target;
            const anchors = document.querySelectorAll('#nav ul li a');
            // !reset anchors
            anchors.forEach(function (a) {
                a.style.cssText = "color:#262b33; font-weight:normal";
            });
            // *enable relative anchor
            anchor.style.cssText = "color:#2196f3; font-weight:600";

            // get current number
            let data = Number(e.target.getAttribute('data'));
            //! remove active class
            sections.forEach(function (item) {
                item.classList.remove("active");
                if (data > MainApp.counter) { // next
                    // remove backword effect
                    item.classList.remove("backword");
                } else { // prev
                    // add backword effect
                    item.classList.add("backword");
                }
            });
            // update counter
            MainApp.counter = data;
            //* add active class to current section
            sections[MainApp.counter].classList.add('active');

            // !sync next, prev and print buttons
            if (data <= 0) {
                // !hide prev & print
                MainApp.prevBtn.classList.add('hideBtn');
                printBtn.classList.add('hideBtn');
                //* show next
                MainApp.nextBtn.classList.remove('hideBtn');
            }
            if (data >= sections.length - 1) {
                // *show prev & print
                MainApp.prevBtn.classList.remove('hideBtn');
                printBtn.classList.remove('hideBtn');
                //! hide next
                MainApp.nextBtn.classList.add('hideBtn');
            }
            if (data > 0 && data < sections.length - 1) {
                // *show prev & next
                MainApp.prevBtn.classList.remove('hideBtn');
                MainApp.nextBtn.classList.remove('hideBtn');
                //! hide print
                printBtn.classList.add('hideBtn');
            }

        }

    }

}
// init global
MainApp.global();

// !Events
// next
MainApp.nextBtn.addEventListener('click', MainApp.next, true);
// prev
MainApp.prevBtn.addEventListener('click', MainApp.prev, true);
// nav
MainApp.nav.addEventListener('click', MainApp.navigate, true);
// click start button
MainApp.startBtn.addEventListener('click', () => {
    document.querySelector('header').style.display = 'none';
});
// loader
window.addEventListener('load', () => MainApp.loader.style.display = 'none');