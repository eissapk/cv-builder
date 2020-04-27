class Educ {
    static global() {
        // // add btn
        Educ.addBtn = document.getElementById("addEdu");
        // Educ section
        Educ.eduCon = document.querySelector('.education');
        Educ.startY = "Year";
        Educ.endY = "Year";
    }

    // add section
    static addSection(e) {
        // select wrapper
        const wrapper = document.querySelector(".education");
        // select section
        const origin = document.querySelector(".innerEduCon");
        // clone section
        const cloned = origin.cloneNode(true);

        // create delete button
        const delBtn = document.createElement("button");
        // add type
        delBtn.type = "button";
        // add class
        delBtn.className = "delEduSec";
        // add text
        delBtn.textContent = 'delete';

        // *prepend delete button
        cloned.prepend(delBtn);

        //! RESETTING ELEMS IN CLONED
        // wipe out inputs
        let inputs = cloned.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.value = "";
        });
        // reset select
        let selectTag = cloned.querySelectorAll('select');
        selectTag.forEach(function (item) {
            // select zero index
            item.selectedIndex = "0";
        });

        // remove zero based classes
        cloned.classList.remove('innerEduCon0');
        cloned.querySelector('.school').classList.remove('school0');
        cloned.querySelector('.degree').classList.remove('degree0');
        cloned.querySelector('.major').classList.remove('major0');
        cloned.querySelector('.sY').classList.remove('sY0');
        cloned.querySelector('.eY').classList.remove('eY0');
        cloned.querySelector('.grade').classList.remove('grade0');

        // select container cv
        const eduP = document.querySelector('.eduP');

        // create div cv
        const div = document.createElement('div');
        // add class cv
        div.className = "eduCon";
        // create content cv
        let content = `
                    <div>
                        <span class="edu-school">london university</span>
                    </div>
                    <div>
                        <span class="edu-degree">bachelor</span>
                        <span class="edu-split">in</span>
                        <span class="edu-field">computer science</span>
                        <span class="edu-grade"></span>
                    </div>
                    <div>
                        <span class="edu-period">Year - Year</span>
                    </div>
                `;

        // append to div cv
        div.innerHTML = content;

        // *append to container cv
        eduP.appendChild(div);

        // select cv elements
        const school = div.querySelector('.edu-school');
        const degree = div.querySelector('.edu-degree');
        const field = div.querySelector('.edu-field');
        const period = div.querySelector('.edu-period');
        const grade = div.querySelector('.edu-grade');

        // define date variables
        let startY = "Year";
        let endY = "Year";

        // !link [cloned] with [div]
        cloned.addEventListener('input', function (e) {
            // get value
            let val = e.target.value;

            // school
            if (e.target.classList.contains('school')) {
                school.textContent = val;
            }
            // degree
            if (e.target.classList.contains('degree')) {
                degree.textContent = val;
            }
            // field
            if (e.target.classList.contains('major')) {
                field.textContent = val;
            }
            // grade
            if (e.target.classList.contains('grade')) {
                if (val.trim() === "") {
                    grade.textContent = "";
                } else {
                    grade.textContent = `(${val})`;
                }
            }
            // !DATE
            if (e.target.classList.contains('sY')) {
                startY = val;
                period.textContent = `${startY} - ${endY}`;
            }
            if (e.target.classList.contains('eY')) {
                endY = val;
                period.textContent = `${startY} - ${endY}`;
            }
        });

        // *append to wrapper
        wrapper.insertBefore(cloned, Educ.addBtn);
        // call remove func
        Educ.removeSection(cloned, delBtn, div);

    }

    // remove section
    static removeSection(item, btn, div) {
        btn.addEventListener('click', function (e) {
            item.remove();
            div.remove();
        });
    }

    // fireEduc
    static fireEduc(e) {
        // !get value
        let val = e.target.value;

        // select cv elements
        const cvCon = document.querySelector('.eduCon');
        const school = cvCon.querySelector('.edu-school');
        const degree = cvCon.querySelector('.edu-degree');
        const field = cvCon.querySelector('.edu-field');
        const period = cvCon.querySelector('.edu-period');
        const grade = cvCon.querySelector('.edu-grade');

        // !link [cloned] with [div]
        // school
        if (e.target.classList.contains('school0')) {
            school.textContent = val;
        }
        // degree
        if (e.target.classList.contains('degree0')) {
            degree.textContent = val;
        }
        // field
        if (e.target.classList.contains('major0')) {
            field.textContent = val;
        }
        // grade
        if (e.target.classList.contains('grade0')) {
            if (val.trim() === "") {
                grade.textContent = "";
            } else {
                grade.textContent = `(${val})`;
            }
        }
        // ! DATE 
        if (e.target.classList.contains('sY0')) {
            Educ.startY = val;
            period.textContent = `${Educ.startY} - ${Educ.endY}`;
        }
        if (e.target.classList.contains('eY0')) {
            Educ.endY = val;
            period.textContent = `${Educ.startY} - ${Educ.endY}`;
        }

    }

}
// init global
Educ.global();

// !Events
// click add more
Educ.addBtn.addEventListener('click', Educ.addSection, true);
// experience section
Educ.eduCon.addEventListener('input', Educ.fireEduc, true);