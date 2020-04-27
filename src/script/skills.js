class Skill {
    static global() {
        // tech
        Skill.techInput = document.getElementById("techInput");
        Skill.techBtn = document.getElementById("addTech");
        Skill.toggleTech = true;
        // personal
        Skill.personalInput = document.getElementById("personalInput");
        Skill.personalBtn = document.getElementById("addPersonal");
        Skill.togglePersonal = true;
    }

    // addTechSkill
    static addTechSkill() {
        // get value
        let val = Skill.techInput.value;
        // select output
        const output = document.querySelectorAll(".skillOutput")[0];
        // select cv container
        const con = document.querySelector('.tech-itemsP');
        // !wipe out container once
        if (Skill.toggleTech) {
            con.innerHTML = "";
            // die
            Skill.toggleTech = false;
        }

        // create span
        const span = document.createElement('span');
        // add text
        span.textContent = val;
        // clone span
        const cloned = span.cloneNode(true);

        if (val.trim() !== "") {
            // *append to output
            output.appendChild(span);
            // *append to output cv
            con.appendChild(cloned);
            // !wipe out value 
            Skill.techInput.value = "";
        }

        // !remove skills on click
        span.addEventListener('click', function (e) {
            span.remove();
            cloned.remove();
        });

    }

    // addPersonalSkill
    static addPersonalSkill() {
        // get value
        const val = Skill.personalInput.value;
        // select output
        const output = document.querySelectorAll(".skillOutput")[1];

        // select cv container
        const con = document.querySelector('.personal-itemsP');
        // !wipe out container once
        if (Skill.togglePersonal) {
            con.innerHTML = "";
            // die
            Skill.togglePersonal = false;
        }

        // create span
        const span = document.createElement('span');
        // add text
        span.textContent = val;
        // clone span
        const cloned = span.cloneNode(true);

        if (val.trim() !== "") {
            // *append to output
            output.appendChild(span);
            // *append to output cv
            con.appendChild(cloned);
            // !wipe out value 
            Skill.personalInput.value = "";
        }

        // !remove skills on click
        span.addEventListener('click', function (e) {
            span.remove();
            cloned.remove();
        });

    }

    // display personal
    static displayPersonalSkills() {
        let con = document.querySelector('.personalP');
        let skills = document.querySelectorAll('.personal-itemsP span');

        if (skills.length > 0) { // has skills => show container
            con.style.display = 'block';
        } else { // no skills => hide container
            con.style.display = 'none';
        }
    }

}
// init global
Skill.global();

// !Events
// tech btn click 
Skill.techBtn.addEventListener('click', Skill.addTechSkill, true);
// tech input keyup
Skill.techInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) { // if enter key is pressed
        // fire up tech btn
        Skill.techBtn.click();
    }
}, true);

// personal btn click 
Skill.personalBtn.addEventListener('click', Skill.addPersonalSkill, true);
// personal input keyup
Skill.personalInput.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) { // if enter key is pressed
        // fire up tech btn
        Skill.personalBtn.click();
    }
}, true);