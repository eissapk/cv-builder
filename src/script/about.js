class About {
    static global() {
        // img container
        About.img = document.querySelector(".avatarCon");
        // file
        About.input = document.getElementById("file");
        // about section
        About.aboutCon = document.querySelector('.about');
        About.counter = 100;
    }

    // click avatar
    static clickAvatar(e) {
        // select file
        const file = document.getElementById('file');
        if (e.target.classList.contains('clickAvatar')) {
            // fire up input 
            file.click();
        }
    }
    // zoom-in-out avatar
    static editAvatar(e) {
        // form avatar
        const avatar = document.querySelector('.avatar');
        // cv page avatar
        const avatar2 = document.querySelector('.innerImgP');

        // zoom-in
        if (e.target.classList.contains("avPlusBtn")) {
            if (About.counter >= 100) {
                About.counter += 5;
            }
            if (About.counter > 200) {
                About.counter = 100;
            }
        }
        // zoom-out
        if (e.target.classList.contains("avMinusBtn")) {
            if (About.counter <= 200) {
                About.counter -= 5;
            }
            if (About.counter < 100) {
                About.counter = 100;
            }
        }
        // *update form avatar
        avatar.style.backgroundSize = `${About.counter}% auto`;
        // *update cv page avatar
        avatar2.style.backgroundSize = `${About.counter}% auto`;
    }
    // previewFile
    static previewFile() {
        const file = document.getElementById('file').files[0];
        const img = document.querySelector(".avatar");
        const reader = new FileReader();
        // load img
        reader.addEventListener("load", function () {
            // update img src with base64
            img.style.backgroundImage = `url("${reader.result}")`;
            // *sync cv img
            const imgCV = document.querySelector('.innerImgP');
            imgCV.style.backgroundImage = `url("${reader.result}")`;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    // fireAbout
    static fireAbout(e) {
        // !get value
        let val = e.target.value;
        // select cv elements
        const firstName = document.querySelector('.firstNameP');
        const lastName = document.querySelector('.lastNameP');
        const jobTitle = document.querySelector('.jobP');
        const location = document.querySelector('.locationP');
        const description = document.querySelector('.desc');

        // first name
        if (e.target.classList.contains('firstName')) {
            firstName.textContent = val;
        }
        // last name
        if (e.target.classList.contains('lastName')) {
            lastName.textContent = val;
        }
        // job title
        if (e.target.classList.contains('jobTitle')) {
            jobTitle.textContent = val;
        }
        // location
        if (e.target.classList.contains('location')) {
            location.textContent = val;
        }
        // description
        if (e.target.classList.contains('brief')) {
            description.textContent = val;
        }
    }

}
// init global
About.global();

// !Events
// avatar click
About.img.addEventListener('click', About.clickAvatar, true);
// input change
About.input.addEventListener('change', About.previewFile, true);
// about section
About.aboutCon.addEventListener('input', About.fireAbout, true);
// click avatar buttons
About.aboutCon.addEventListener('click', About.editAvatar, true);