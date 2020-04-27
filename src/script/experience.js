class Exper {
    static global() {
        // to container
        Exper.toCon = document.querySelector(".toCon");
        Exper.check = document.querySelector(".currentlyWork");
        Exper.select = document.querySelectorAll('.toCon select');
        // add btn
        Exper.addBtn = document.getElementById("addExp");
        // Exper section
        Exper.experCon = document.querySelector('.experience');
        Exper.startM = "Month";
        Exper.startY = "Year";
        Exper.endM = "Month";
        Exper.endY = "Year";
    }

    // isChecked
    static isChecked(con, input, select) {
        input.addEventListener('click', function (e) {
            if (input.checked) {
                // !hide to
                con.style.display = "none";
                // !disable select
                select.forEach(function (item) {
                    item.selectedIndex = "0";
                    item.removeAttribute('required');
                });
            } else {
                // *show to
                con.style.display = "block";
                // *enable select
                select.forEach(function (item) {
                    item.setAttribute('required', '');
                });
            }
        });
    }

    // add section
    static addSection(e) {
        // select wrapper
        const wrapper = document.querySelector(".experience");
        // select section
        const origin = document.querySelector(".innerExperCon");
        // clone section
        const cloned = origin.cloneNode(true);

        // create delete button
        const delBtn = document.createElement("button");
        // add type
        delBtn.type = "button";
        // add class
        delBtn.className = "delExperSec";
        // add text
        delBtn.textContent = 'delete';

        // *prepend delete button
        cloned.prepend(delBtn);

        // ?SELECTING ELMS IN CLONED
        // select toContainer
        let toCon = cloned.querySelector('.toCon');
        // select checkbox input
        let input = cloned.querySelector('.currentlyWork');
        // select select tag
        let select = cloned.querySelectorAll('.toCon select');
        // select textarea
        let textarea = cloned.querySelectorAll('textarea');

        //! RESETTING ELEMS IN CLONED
        toCon.style.display = "block";
        // wipe out inputs
        let inputs = cloned.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.value = "";
        });
        // uncheck input
        input.checked = false;
        // wipe out textarea
        cloned.querySelector("textarea").value = "";
        // reset select
        let selectTag = cloned.querySelectorAll('select');
        selectTag.forEach(function (item) {
            // select zero index
            item.selectedIndex = "0";
            // add required attr
            item.setAttribute('required', '');
        });
        // remove zero based classes
        cloned.classList.remove('innerExperCon0');
        cloned.querySelector('.currentlyWork').classList.remove('currentlyWork0');
        cloned.querySelector('.role').classList.remove('role0');
        cloned.querySelector('.company').classList.remove('company0');
        cloned.querySelector('.startM').classList.remove('startM0');
        cloned.querySelector('.startY').classList.remove('startY0');
        cloned.querySelector('.endM').classList.remove('endM0');
        cloned.querySelector('.endY').classList.remove('endY0');
        cloned.querySelector('.experDesc').classList.remove('experDesc0');

        // select container cv
        const experP = document.querySelector('.experP');

        // create div cv
        const div = document.createElement('div');
        // add class cv
        div.className = "experCon";
        // create content cv
        let content = `
            <div>
                <span class="exper-role">Web Designer</span>
                <span class="exper-period">Month Year - Month Year</span>
            </div>
            <div>
                <span class="exper-firm">Facebook</span>
            </div>
            <div>
                <p class="exper-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        `;

        // append to div cv
        div.innerHTML = content;

        // *append to container cv
        experP.appendChild(div);

        // define date variables
        let startM = "Month";
        let startY = "Year";
        let endM = "Month";
        let endY = "Year";
        let date = div.querySelector('.exper-period');

        // !link [cloned] with [div]
        cloned.addEventListener('input', function (e) {
            // get value
            let val = e.target.value;
            // role
            if (e.target.classList.contains('role')) {
                div.querySelector('.exper-role').textContent = val;
            }
            // firm
            if (e.target.classList.contains('company')) {
                div.querySelector('.exper-firm').textContent = val;
            }
            // description
            if (e.target.classList.contains('experDesc')) {
                div.querySelector('.exper-desc').textContent = val;
            }

            // ! DATE if currently work checked || unchecked
            if (input.checked === true) { //*checked
                // default
                date.textContent = `${startM} ${startY} - Present`;

                // start
                if (e.target.classList.contains('startM')) {
                    startM = val;
                    date.textContent = `${startM} ${startY} - Present`;
                }
                if (e.target.classList.contains('startY')) {
                    startY = val;
                    date.textContent = `${startM} ${startY} - Present`;
                }
            }
            if (input.checked === false) { //!unchecked
                // default
                // date.textContent = `${startM} ${startY} - Month Year`;

                // start
                if (e.target.classList.contains('startM')) {
                    startM = val;
                    date.textContent = `${startM} ${startY} - ${endM} ${endY}`;
                }
                if (e.target.classList.contains('startY')) {
                    startY = val;
                    date.textContent = `${startM} ${startY} - ${endM} ${endY}`;
                }
                // end
                if (e.target.classList.contains('endM')) {
                    endM = val;
                    date.textContent = `${startM} ${startY} - ${endM} ${endY}`;
                }
                if (e.target.classList.contains('endY')) {
                    endY = val;
                    date.textContent = `${startM} ${startY} - ${endM} ${endY}`;
                }
            }
        });

        // *append wrapper
        wrapper.insertBefore(cloned, Exper.addBtn);
        // call remove func
        Exper.removeSection(cloned, delBtn, div);
        // call checked func
        Exper.isChecked(toCon, input, select);
        // call textarea
        Page.validateTextarea(textarea);

    }

    // remove section
    static removeSection(item, btn, div) {
        btn.addEventListener('click', function (e) {
            item.remove();
            div.remove();
        });
    }

    // fireExper
    static fireExper(e) {
        // !get value
        let val = e.target.value;

        // select cv elements
        const cvCon = document.querySelector('.experCon');
        const role = cvCon.querySelector('.exper-role');
        const date = cvCon.querySelector('.exper-period');
        const firm = cvCon.querySelector('.exper-firm');
        const desc = cvCon.querySelector('.exper-desc');

        // select form elements
        const formCon = document.querySelector('.innerExperCon0');
        const check = formCon.querySelector('.currentlyWork0');

        // !link [cloned] with [div]
        // role
        if (e.target.classList.contains('role0')) {
            role.textContent = val;
        }
        // firm
        if (e.target.classList.contains('company0')) {
            firm.textContent = val;
        }
        // desc
        if (e.target.classList.contains('experDesc0')) {
            desc.textContent = val;
        }

        // ! DATE if currently work checked || unchecked
        if (check.checked) { //*checked
            // default
            date.textContent = `${Exper.startM} ${Exper.startY} - Present`;

            // start
            if (e.target.classList.contains('startM0')) {
                Exper.startM = val;
                date.textContent = `${Exper.startM} ${Exper.startY} - Present`;
            }
            if (e.target.classList.contains('startY0')) {
                Exper.startY = val;
                date.textContent = `${Exper.startM} ${Exper.startY} - Present`;
            }
        } else if (!check.checked) { //!unchecked
            // default
            // date.textContent = `${Exper.startM} ${Exper.startY} - Month Year`;

            // start
            if (e.target.classList.contains('startM0')) {
                Exper.startM = val;
                date.textContent = `${Exper.startM} ${Exper.startY} - ${Exper.endM} ${Exper.endY}`;
            }
            if (e.target.classList.contains('startY0')) {
                Exper.startY = val;
                date.textContent = `${Exper.startM} ${Exper.startY} - ${Exper.endM} ${Exper.endY}`;
            }
            // end
            if (e.target.classList.contains('endM0')) {
                Exper.endM = val;
                date.textContent = `${Exper.startM} ${Exper.startY} - ${Exper.endM} ${Exper.endY}`;
            }
            if (e.target.classList.contains('endY0')) {
                Exper.endY = val;
                date.textContent = `${Exper.startM} ${Exper.startY} - ${Exper.endM} ${Exper.endY}`;
            }
        }

    }

}
// init global
Exper.global();
// init checked
Exper.isChecked(Exper.toCon, Exper.check, Exper.select);

// !Events
// click add more
Exper.addBtn.addEventListener('click', Exper.addSection, true);
// experience section
Exper.experCon.addEventListener('input', Exper.fireExper, true);