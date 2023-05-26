// show page start
let navLink = document.querySelectorAll("header nav div input"),
    pageView = document.querySelectorAll(".page-view");
navLink.forEach(e => {
    e.addEventListener("click", () => {
    // show page start
        sessionStorage.setItem("page", e.getAttribute("data-link"));
        console.log(e.getAttribute("data-link"));
        pageView.forEach(e => {
            e.style = `display:none`;
        })
        let pageShow = document.querySelector(`#${e.getAttribute("data-link")}`);
        pageShow.style = `display: `;
    // remove page end
    //  change color
    navLink.forEach(e => {
            console.log(e);
            if(e.getAttribute("data-link") == sessionStorage.getItem("page")) {
            e.nextElementSibling.style = `background-color: var(--main-color);`;
            } else {
            e.nextElementSibling.style = `background-color: transparent;`;
        }
    })
    // end change color
    });
});

let section = document.querySelectorAll("section");
window.onload = () => {
    if(sessionStorage.getItem("page") == null) {
        section.forEach(e => {
            e.style=`display:none;`
        })
    } else {
        // remove all elemenet except the user select it
        let pageShow = document.querySelector(`#${sessionStorage.getItem("page")}`),
            home = document.getElementById("home");
        section.forEach(e => {
            e.style = `display:none`;
        });
        //  remove home page 
        home.style = `display:none`;
        // show the page selection
        pageShow.style = `display: `;
        // change color of nav use  
            navLink.forEach(e => {
                if(e.getAttribute("data-link") == sessionStorage.getItem("page")) {
                e.nextElementSibling.style = `background-color: var(--main-color);`;
                } else {
                e.nextElementSibling.style = `background-color: transparent;`;
            }
        })
    }
}
// show page end

// show setting color change 
let setting = document.querySelector("header .container .content-color .setting"),
    boxColor = document.querySelector(".content-color");
setting.addEventListener("click", () => {
    boxColor.classList.toggle("active");
})
let colorItem = document.querySelectorAll(".box-color > *");
colorItem.forEach(e => {
    // console.log(e.getAttribute('data-color'));
    e.addEventListener("click", () => {
        localStorage.setItem('colorItem', `${e.getAttribute('data-color')}`);
        document.body.style = `--main-color: ${e.getAttribute('data-color')};`;
    });
});
window.addEventListener("load", () => {
    if(localStorage.getItem('colorItem') != null) {
        document.body.style = `--main-color: ${localStorage.getItem('colorItem')}`;
    } else {
        document.body.style = `--main-color: #3f51b5`;
    }
}) 
// end showing setting color change 

// portfolie section start show project
let boxProject = document.querySelectorAll("#portfolio .container .box-content .box .img");
boxProject.forEach(e => {
    e.addEventListener("click", () => {
        e.nextElementSibling.style = `display:flex`;
        let close = document.querySelectorAll(".project-show .close");
        close.forEach(e => {
            e.addEventListener("click", () => {
                e.parentElement.style = `display:none`;
            })
        });
    });
});
// portfolie section end show project

//  show article project
let boxs=document.querySelectorAll("#blog .box-content>*") ;
boxs.forEach(e => {
    e.addEventListener('click', () => {
        let article = document.getElementById(`${e.getAttribute("data-link")}`);
        article.style = `display:flex`;
    })
})
// remove artivle blog 
let close = document.querySelectorAll("#blog article .close");
close.forEach(e => {
    e.addEventListener("click", () => {
        e.parentElement.style = `display:none`;
    })
})















