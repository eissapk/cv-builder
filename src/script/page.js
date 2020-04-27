class Page {
    static global() {
        Page.form = document.getElementById("form");
        // select textarea
        Page.textarea = document.querySelectorAll('textarea');
        // popup
        Page.popup = document.getElementById("popupLayer");
        Page.printCV = document.getElementById('printCV');
        Page.downloadCV = document.getElementById('downloadCV');
        // donation
        Page.donation = document.getElementById("donateLayer");
    }

    // validate textarea
    static validateTextarea(textarea) {
        // loop through textarea
        textarea.forEach(function (item) {
            const success = item.nextElementSibling.querySelector('.textareaSuccess');
            const error = item.nextElementSibling.querySelector('.textareaError');
            // !reset status
            success.style.display = "none";
            error.style.display = "block";
            // event
            item.addEventListener('input', function (e) {
                let val = e.target.value;

                if (val.length >= 40 && val.length <= 250) { // must be 80-250 characters in length.
                    success.style.display = "block";
                    error.style.display = "none";
                } else {
                    success.style.display = "none";
                    error.style.display = "block";
                }
            });
        });
    }

    // getResume
    static getResume() {
        // !sync contact elms
        const opt = document.querySelectorAll('.opt');
        const con = document.querySelector('.contactOpt');
        // check contact inputs
        opt.forEach((elm, index, array) => {
            if (elm.value.trim() === "") {
                if (con) {
                    con.style.display = 'none';
                }
            }
            if (array[0].value.trim() !== "" || array[1].value.trim() !== "" || array[2].value.trim() !== "" || array[3].value.trim() !== "" || array[4].value.trim() !== "" || array[5].value.trim() !== "" || array[6].value.trim() !== "") {
                if (con) {
                    con.style.display = 'block';
                }
            }
        });

        // !sync avatar
        const avatar = document.querySelector('.innerImgP');
        let compStyles = window.getComputedStyle(avatar);
        let avatarSrc = compStyles.getPropertyValue('background-image');
        if (avatarSrc.includes('img/avatar.svg')) { // user didn't change avatar
            avatar.parentElement.style.display = "none";
        } else { // user changed avatar
            avatar.parentElement.style.display = "block";
        }

        // call displayPersonalSkills
        Skill.displayPersonalSkills();

        // *show popup
        const popup = Page.popup.style.display = 'block';

        // *show donation 
        if (popup) {
            setTimeout(() => Page.donation.style.display = 'block', 5000);
        }

        setTimeout(() => {
            // anchor
            const a = document.getElementById('a');
            // page
            const page = document.querySelector('.page');
            const style = `
                        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}*{box-sizing:border-box;margin:0;padding:0}*::before{box-sizing:border-box;margin:0;padding:0}*::after{box-sizing:border-box;margin:0;padding:0}h1,h2,h3,h4,h5,h6,p{margin:0}html,body{box-sizing:border-box;margin:0;padding:0;font-family:"Quicksand",Helvetica,Arial,sans-serif;font-weight:normal;letter-spacing:.4px;background-color:#fff;color:#262b33}html input::-webkit-outer-spin-button,html input::-webkit-inner-spin-button,body input::-webkit-outer-spin-button,body input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}html input[type=number],body input[type=number]{-moz-appearance:textfield}main{position:relative;width:100%;min-height:100vh}.page{width:21cm;min-height:29.7cm;padding:0;margin:0 auto;background:#fff;font-family:Helvetica,Arial,sans-serif}.page .upperP{width:100%;display:grid;grid-template-rows:1fr;grid-template-columns:auto 1fr}.page .upperP .imgP{width:175px}.page .upperP .imgP .innerImgP{width:150px;height:150px;border-radius:50%;background-image:url("../img/avatar.svg");background-repeat:no-repeat;background-size:cover;background-position:center center;filter:grayscale(1)}.page .upperP .profileP .upperProfileP{overflow:hidden;display:grid;grid-template-rows:1fr;grid-template-columns:auto auto;align-items:end}.page .upperP .profileP .upperProfileP .nameP{text-transform:uppercase}.page .upperP .profileP .upperProfileP .nameP .firstNameP{font-size:35px;color:#666}.page .upperP .profileP .upperProfileP .nameP .lastNameP{font-weight:bold;font-size:40px}.page .upperP .profileP .upperProfileP .contactP ul{list-style-type:none}.page .upperP .profileP .upperProfileP .contactP ul li{overflow:hidden;font-weight:bold;line-height:25px}.page .upperP .profileP .upperProfileP .contactP ul li span,.page .upperP .profileP .upperProfileP .contactP ul li i{float:left;font-style:normal}.page .upperP .profileP .upperProfileP .contactP ul li .span{width:75px;text-transform:capitalize}.page .upperP .profileP .upperProfileP .contactP ul li i{margin-right:5px}.page .upperP .profileP .upperProfileP .contactP ul li .phoneP,.page .upperP .profileP .upperProfileP .contactP ul li .emailP,.page .upperP .profileP .upperProfileP .contactP ul li .locationP,.page .upperP .profileP .upperProfileP .contactP ul li .whatsP{color:#666}.page .upperP .profileP .upperProfileP .contactP ul li .locationP{text-transform:capitalize}.page .upperP .profileP .upperProfileP .contactP ul li .whatsP{margin-left:5px;font-size:.9em;font-weight:normal;display:none}.page .upperP .profileP .middleProfileP{position:relative;margin:20px 0;overflow:hidden}.page .upperP .profileP .middleProfileP::after{content:"";position:absolute;top:50%;transform:translateY(-50%);left:0;width:100%;height:1px;background-color:#666}.page .upperP .profileP .middleProfileP .jobP{position:relative;padding-right:10px;text-transform:uppercase;font-size:20px;font-weight:bold;color:#666;float:left;background-color:#fff;z-index:1}.page .upperP .profileP .lowerProfileP .desc{line-height:25px;color:#666;word-break:break-word}.page .upperP .profileP .lowerProfileP .desc::first-letter{text-transform:uppercase}.page .lowerP{display:grid;grid-template-rows:1fr;grid-template-columns:175px 1fr;margin-top:25px}.page .lowerP .leftP{position:relative;width:100%}.page .lowerP .leftP:after{content:"";position:absolute;top:0;right:12.5px;width:1px;height:100%;background-color:#666}.page .lowerP .leftP .skillsP{width:calc(100% - 13.5px)}.page .lowerP .leftP .skillsP h2{text-transform:uppercase;font-size:25px}.page .lowerP .leftP .skillsP .techP,.page .lowerP .leftP .skillsP .personalP{width:100%;overflow:hidden}.page .lowerP .leftP .skillsP .techP h3,.page .lowerP .leftP .skillsP .personalP h3{text-transform:capitalize;font-size:18px;margin:25px 0 10px 0;color:#666}.page .lowerP .leftP .skillsP .techP .tech-itemsP span,.page .lowerP .leftP .skillsP .techP .personal-itemsP span,.page .lowerP .leftP .skillsP .personalP .tech-itemsP span,.page .lowerP .leftP .skillsP .personalP .personal-itemsP span{float:left;padding:5px;border-radius:3px;border:1px solid #262b33;margin:0 5px 5px 0}.page .lowerP .leftP .skillsP .techP .personal-itemsP,.page .lowerP .leftP .skillsP .personalP .personal-itemsP{text-transform:capitalize}.page .lowerP .rightP{width:100%}.page .lowerP .rightP .contactOpt{margin-top:25px}.page .lowerP .rightP .contactOpt>h2{text-transform:uppercase;font-size:25px}.page .lowerP .rightP .contactOpt .contactCon{margin-top:20px}.page .lowerP .rightP .contactOpt .contactCon ul{list-style-type:none}.page .lowerP .rightP .contactOpt .contactCon ul li{overflow:hidden;line-height:25px;display:none}.page .lowerP .rightP .contactOpt .contactCon ul li span{float:left;font-weight:bold;color:#666}.page .lowerP .rightP .contactOpt .contactCon ul li .headP{color:#262b33;margin-right:5px;text-transform:capitalize}.page .eduP>h2{text-transform:uppercase;font-size:25px}.page .eduP .eduCon{margin-top:20px}.page .eduP .eduCon>div{overflow:hidden;font-weight:bold;text-transform:capitalize}.page .eduP .eduCon div:nth-of-type(1) .edu-school{font-size:20px}.page .eduP .eduCon div:nth-of-type(2){margin-top:5px}.page .eduP .eduCon div:nth-of-type(2) span{float:left;color:#666}.page .eduP .eduCon div:nth-of-type(2) .edu-split{margin:0 5px;text-transform:lowercase;color:#262b33}.page .eduP .eduCon div:nth-of-type(2) .edu-grade{font-weight:normal;margin-left:5px}.page .eduP .eduCon div:nth-of-type(3){margin-top:5px}.page .eduP .eduCon div:nth-of-type(3) .edu-period{color:#666;font-size:.9em}.page .experP{margin-top:25px}.page .experP>h2{text-transform:uppercase;font-size:25px}.page .experP .experCon{margin-top:20px}.page .experP .experCon>div{overflow:hidden}.page .experP .experCon div:nth-of-type(1) span{height:30px;line-height:30px;float:left}.page .experP .experCon div:nth-of-type(1) .exper-role{font-size:20px;font-weight:bold;text-transform:capitalize;margin-right:20px}.page .experP .experCon div:nth-of-type(1) .exper-period{color:#666;font-size:.9em;font-weight:bold;text-transform:capitalize}.page .experP .experCon div:nth-of-type(2){margin-top:5px}.page .experP .experCon div:nth-of-type(2) .exper-firm{font-size:18px;font-weight:bold;text-transform:capitalize;color:#666}.page .experP .experCon div:nth-of-type(3){margin-top:5px}.page .experP .experCon div:nth-of-type(3) .exper-desc{line-height:25px;color:#666;word-break:break-word}.page .experP .experCon div:nth-of-type(3) .exper-desc::first-letter{text-transform:uppercase}.design_2 .leftCol{position:relative;width:300px;float:left;padding:0 20px}.design_2 .leftCol:after{content:"";position:absolute;top:0;right:0;width:2px;height:100%;background-color:#262b33}.design_2 .leftCol .imgP{width:100%;margin-top:20px}.design_2 .leftCol .imgP .innerImgP{width:150px;height:150px;margin:0 auto;border-radius:50%;border:2px solid #262b33;background-image:url("../img/avatar.svg");background-repeat:no-repeat;background-size:cover;background-position:center center;filter:grayscale(1)}.design_2 .leftCol .nameP{width:100%;text-align:center;margin-top:20px}.design_2 .leftCol .nameP span{font-size:25px;text-transform:uppercase;font-weight:bold}.design_2 .leftCol .nameP .lastNameP{margin-left:5px}.design_2 .leftCol .jobP{position:relative;margin-top:20px;font-size:18px;font-weight:bold;text-transform:capitalize;text-align:center}.design_2 .leftCol .jobP:after{content:"";position:absolute;bottom:-10px;left:0;right:0;margin:auto;width:75px;height:2px;background-color:#262b33}.design_2 .leftCol .locationPWrapper{margin-top:20px;text-align:center;width:100%;text-transform:capitalize}.design_2 .leftCol .locationPWrapper .locationPIcon{margin-right:5px}.design_2 .leftCol .locationPWrapper .locationPIcon svg{width:25px;height:25px;vertical-align:bottom}.design_2 .leftCol .lowerProfileP{width:100%;margin-top:40px}.design_2 .leftCol .lowerProfileP h1{position:relative;font-size:25px;text-transform:uppercase}.design_2 .leftCol .lowerProfileP h1:after{content:"";position:absolute;bottom:-10px;left:0;width:50px;height:2px;background-color:#262b33}.design_2 .leftCol .lowerProfileP p{color:#666;line-height:25px;word-break:break-word;margin-top:20px}.design_2 .leftCol .lowerProfileP p::first-letter{text-transform:uppercase}.design_2 .leftCol .personalP{width:100%;margin-top:40px}.design_2 .leftCol .personalP h1{position:relative;font-size:25px;text-transform:uppercase}.design_2 .leftCol .personalP h1:after{content:"";position:absolute;bottom:-10px;left:0;width:50px;height:2px;background-color:#262b33}.design_2 .leftCol .personalP .personal-itemsP{margin-top:20px}.design_2 .leftCol .personalP .personal-itemsP>span{position:relative;display:block;font-size:20px;text-transform:capitalize;margin-bottom:10px;color:#666}.design_2 .leftCol .personalP .personal-itemsP>span:after{content:"";position:absolute;bottom:-5px;left:0;width:25px;height:2px;background-color:#666}.design_2 .leftCol .contactP{width:100%;margin-top:40px}.design_2 .leftCol .contactP h1{position:relative;font-size:25px;text-transform:uppercase}.design_2 .leftCol .contactP h1:after{content:"";position:absolute;bottom:-10px;left:0;width:50px;height:2px;background-color:#262b33}.design_2 .leftCol .contactP ul{margin-top:20px;list-style-type:none;float:left}.design_2 .leftCol .contactP ul li{float:left;margin-bottom:10px;width:100%;display:none}.design_2 .leftCol .contactP ul li span{float:left;height:25px;line-height:25px;word-break:break-word;font-size:.9em;color:#666}.design_2 .leftCol .contactP ul li .iconPCon{width:25px;height:25px;background-image:url("../img/icons.svg");background-repeat:no-repeat;background-size:cover;background-position:0px 0px;margin-right:5px}.design_2 .leftCol .contactP ul li .whatsP{display:none;margin-left:5px}.design_2 .leftCol .contactP ul li:nth-of-type(1),.design_2 .leftCol .contactP ul li:nth-of-type(2){display:block}.design_2 .leftCol .contactP ul li:nth-of-type(2) .iconPCon{background-position:0px -25px}.design_2 .leftCol .contactP ul li:nth-of-type(3) .iconPCon{background-position:0px -50px}.design_2 .leftCol .contactP ul li:nth-of-type(4) .iconPCon{background-position:0px -75px}.design_2 .leftCol .contactP ul li:nth-of-type(5) .iconPCon{background-position:0px -100px}.design_2 .leftCol .contactP ul li:nth-of-type(6) .iconPCon{background-position:0px -125px}.design_2 .leftCol .contactP ul li:nth-of-type(7) .iconPCon{background-position:0px -150px}.design_2 .leftCol .contactP ul li:nth-of-type(8) .iconPCon{background-position:0px -175px}.design_2 .leftCol .contactP ul li:nth-of-type(9) .iconPCon{background-position:0px -200px}.design_2 .rightCol{position:relative;width:calc(100% - 300px);padding-left:40px;float:left}.design_2 .rightCol:after{content:"";position:absolute;top:0;left:-2px;width:2px;height:100%;background-color:#262b33}.design_2 .rightCol .eduP{position:relative;padding-left:40px;margin-top:20px}.design_2 .rightCol .eduP::before{position:absolute;content:"";top:60px;left:0;width:2px;height:calc(100% - 60px);background-color:#262b33}.design_2 .rightCol .eduP .expHead{position:relative}.design_2 .rightCol .eduP .expHead svg{position:absolute;top:-3.5px;left:-56.5px;width:35px;height:35px;fill:#262b33}.design_2 .rightCol .eduP .expHead span{text-transform:uppercase;font-size:25px;font-weight:bold}.design_2 .rightCol .eduP .eduCon{position:relative}.design_2 .rightCol .eduP .eduCon::before{position:absolute;content:"";top:6.5px;left:-44px;width:10px;height:10px;background-color:#262b33;border-radius:50%}.design_2 .rightCol .experP{position:relative;padding-left:40px;margin-top:40px}.design_2 .rightCol .experP::before{position:absolute;content:"";top:60px;left:0;width:2px;height:calc(100% - 60px);background-color:#262b33}.design_2 .rightCol .experP .expHead{position:relative}.design_2 .rightCol .experP .expHead svg{position:absolute;top:-3.5px;left:-56.5px;width:35px;height:35px;fill:#262b33}.design_2 .rightCol .experP .expHead span{text-transform:uppercase;font-size:25px;font-weight:bold}.design_2 .rightCol .experP .experCon{position:relative}.design_2 .rightCol .experP .experCon::before{position:absolute;content:"";top:10px;left:-44px;width:10px;height:10px;background-color:#262b33;border-radius:50%}.design_2 .rightCol .techP{padding-left:40px;margin-top:40px}.design_2 .rightCol .techP .expHead{position:relative}.design_2 .rightCol .techP .expHead svg{position:absolute;top:-3.5px;left:-56.5px;width:35px;height:35px;fill:#262b33}.design_2 .rightCol .techP .expHead span{text-transform:uppercase;font-size:25px;font-weight:bold}.design_2 .rightCol .techP .tech-itemsP{margin-top:20px;overflow:hidden}.design_2 .rightCol .techP .tech-itemsP span{float:left;padding:5px;margin-right:5px;margin-bottom:5px;border:1px solid #666;border-radius:3px;color:#666}.design_3 .leftCol{width:calc(100% - 300px);float:left;padding-right:40px}.design_3 .leftCol .headerPCon{width:100%;overflow:hidden}.design_3 .leftCol .headerPCon .imgP{width:100px;height:100px;float:left;margin-right:15px}.design_3 .leftCol .headerPCon .imgP .innerImgP{width:100%;height:100%;margin:0 auto;border-radius:3px;background-image:url("../img/avatar.svg");background-repeat:no-repeat;background-size:cover;background-position:center center;filter:grayscale(1)}.design_3 .leftCol .headerPCon .name-job-con{float:left;margin-top:23px}.design_3 .leftCol .headerPCon .name-job-con .nameP span{font-size:25px;text-transform:uppercase;font-weight:bold}.design_3 .leftCol .headerPCon .name-job-con .nameP .lastNameP{margin-left:5px}.design_3 .leftCol .headerPCon .name-job-con .jobP{margin-top:5px;font-size:18px;font-weight:bold;text-transform:capitalize;color:#666}.design_3 .leftCol .lowerProfileP{width:100%;margin-top:20px}.design_3 .leftCol .lowerProfileP h1{font-size:25px;text-transform:capitalize}.design_3 .leftCol .lowerProfileP p{color:#666;line-height:25px;word-break:break-word;margin-top:5px}.design_3 .leftCol .lowerProfileP p::first-letter{text-transform:uppercase}.design_3 .leftCol .eduP{margin-top:30px}.design_3 .leftCol .eduP .expHead span{text-transform:capitalize;font-size:25px;font-weight:bold}.design_3 .leftCol .experP{margin-top:30px}.design_3 .leftCol .experP .expHead span{text-transform:capitalize;font-size:25px;font-weight:bold}.design_3 .rightCol{width:300px;float:left}.design_3 .rightCol .contactP{width:100%;overflow:hidden;margin-top:120px}.design_3 .rightCol .contactP h1{font-size:25px;text-transform:capitalize}.design_3 .rightCol .contactP ul{margin-top:5px;list-style-type:none;float:left}.design_3 .rightCol .contactP ul li{float:left;margin-bottom:5px;width:100%;display:none}.design_3 .rightCol .contactP ul li span{float:left;height:25px;line-height:25px;word-break:break-word;font-size:.9em;color:#666}.design_3 .rightCol .contactP ul li .whatsP{display:none;margin-left:5px}.design_3 .rightCol .contactP ul li .locationP{text-transform:capitalize}.design_3 .rightCol .contactP ul li:nth-of-type(1),.design_3 .rightCol .contactP ul li:nth-of-type(2),.design_3 .rightCol .contactP ul li:nth-of-type(3){display:block}.design_3 .rightCol .techP{margin-top:30px}.design_3 .rightCol .techP .expHead span{text-transform:capitalize;font-size:25px;font-weight:bold}.design_3 .rightCol .techP .tech-itemsP{margin-top:10px;overflow:hidden}.design_3 .rightCol .techP .tech-itemsP span{margin-bottom:5px;color:#666;display:block}.design_3 .rightCol .personalP{margin-top:30px}.design_3 .rightCol .personalP h1{font-size:25px;text-transform:capitalize}.design_3 .rightCol .personalP .personal-itemsP{margin-top:10px}.design_3 .rightCol .personalP .personal-itemsP>span{margin-bottom:5px;color:#666;display:block;text-transform:capitalize}
                        `;

            let content = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>CV Builder</title>
                            <style>${style}</style>
                        </head>
                        <body>
                        ${page.outerHTML}
                        </body>
                        </html>
                        `;

            // *click downloadCV
            Page.downloadCV.addEventListener('click', () => {
                // create file
                let file = new Blob([content], {
                    type: 'text/html'
                });
                // add href link
                a.href = URL.createObjectURL(file);
                // name file
                a.download = 'CV.html';
                // run click
                a.click();
            });
        }, 100);

    }

    // submit form
    static submitForm(e) {
        // !prevent default behavior
        e.preventDefault();
        // select success status of textareas
        const [one, two] = document.querySelectorAll('.textareaSuccess');
        // select skills emenets
        const [tech, personal] = document.querySelectorAll('.skillOutput');
        let techElem = tech.querySelectorAll('span');
        let personalElem = personal.querySelectorAll('span');

        if (one.style.display === "block" && two.style.display === "block") {
            if (techElem.length >= 3) {
                // run getResume
                Page.getResume();
            }
        }

    }

}

// init global
Page.global();
// call textarea
Page.validateTextarea(Page.textarea);

//! Events
// submit
form.addEventListener('submit', Page.submitForm, true);
// click to hide popup
Page.popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('clickClosePopup')) {
        Page.popup.style.display = 'none';
    }
});
// click to hide donation
Page.donation.addEventListener('click', (e) => {
    if (e.target.classList.contains('clickCloseDonate')) {
        Page.donation.style.display = 'none';
    }
});
// !click printCV
Page.printCV.addEventListener('click', () => window.print());