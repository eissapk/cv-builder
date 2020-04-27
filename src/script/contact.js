class Contact {
    static global() {
        // contact section
        Contact.contactCon = document.querySelector('.contact');
        Contact.whats = document.getElementById('hasWhats');
    }

    // fireAbout
    static fireContact(e) {
        // !get value
        let val = e.target.value;
        // select cv elements
        const phone = document.querySelector('.phoneP');
        const email = document.querySelector('.emailP');
        // optional
        const website = document.querySelector('.websiteP');
        const linkedin = document.querySelector('.linkedinP');
        const twitter = document.querySelector('.twitterP');
        const behance = document.querySelector('.behanceP');
        const dribbble = document.querySelector('.dribbbleP');
        const github = document.querySelector('.githubP');
        const stack = document.querySelector('.stackP');

        // phone
        if (e.target.classList.contains('phone')) {
            phone.textContent = val;
        }
        // email
        if (e.target.classList.contains('mail')) {
            email.textContent = val;
        }
        // website
        if (e.target.classList.contains('website')) {
            website.textContent = val;
            if (val.trim() === "") {
                website.parentElement.style.display = "none";
            } else {
                website.parentElement.style.display = "block";
            }
        }
        // linkedin
        if (e.target.classList.contains('linkedin')) {
            linkedin.textContent = val;
            if (val.trim() === "") {
                linkedin.parentElement.style.display = "none";
            } else {
                linkedin.parentElement.style.display = "block";
            }
        }
        // twitter
        if (e.target.classList.contains('twitter')) {
            twitter.textContent = val;
            if (val.trim() === "") {
                twitter.parentElement.style.display = "none";
            } else {
                twitter.parentElement.style.display = "block";
            }
        }
        // behance
        if (e.target.classList.contains('behance')) {
            behance.textContent = val;
            if (val.trim() === "") {
                behance.parentElement.style.display = "none";
            } else {
                behance.parentElement.style.display = "block";
            }
        }
        // dribbble
        if (e.target.classList.contains('dribbble')) {
            dribbble.textContent = val;
            if (val.trim() === "") {
                dribbble.parentElement.style.display = "none";
            } else {
                dribbble.parentElement.style.display = "block";
            }
        }
        // github
        if (e.target.classList.contains('github')) {
            github.textContent = val;
            if (val.trim() === "") {
                github.parentElement.style.display = "none";
            } else {
                github.parentElement.style.display = "block";
            }
        }
        // stack
        if (e.target.classList.contains('stack')) {
            stack.textContent = val;
            if (val.trim() === "") {
                stack.parentElement.style.display = "none";
            } else {
                stack.parentElement.style.display = "block";
            }
        }

    }
    // check whats
    static checkWhats(e) {
        const whats = document.querySelector('.whatsP');
        if (Contact.whats.checked) {
            whats.style.display = 'inline-block';
        } else {
            whats.style.display = 'none';
        }
    }

}
// init global
Contact.global();

// !Events
// about section
Contact.contactCon.addEventListener('input', Contact.fireContact, true);
// click whats
Contact.whats.addEventListener('click', Contact.checkWhats, true);