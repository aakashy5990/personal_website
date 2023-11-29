const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});


// add backdrop fliter using js
// document.addEventListener("DOMContentLoaded", function () {
//     const sticky = document.querySelector(".sticky");
//     sticky.style.backdropFilter = "blur(10px)"; // Adjust the blur radius as needed
//   });




// menu js
var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".mobile_navbar");
// var menu_moving = document.querySelector(".menu_move");
// var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
    // menu_moving.classList.toggle("moving");
});



/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{   //*tc = tabcontent*/
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{  // t = tab
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})



/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



// adding scroll arrow 
    const scrollarrow = document.querySelector('.scroll_arrow')

    window.addEventListener('scroll', () => {
    //   console.log(window.pageYOffset)
      if (window.pageYOffset > 224){
        scrollarrow.style.display = "block";
      }
      else{
        scrollarrow.style.display = "none";
      }
    })

    scrollarrow.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    })

// data to store database on google sheet js code 
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwkp-DovNkt-Z4spG4oteiUgbXpzsqT0mZuZL-8p1p4pwGFB-BaHwQmP9Sr_nsEERUSNQ/exec'
        const form = document.forms['google-sheet']
          
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            // .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            .catch(error => console.error('Error!', error.message))
        })


// form submit button alert message 
const button = document.getElementById('button');
button.addEventListener('click', () => {
    alert("Thanks for Contacting us..! We Will Contact You Soon...");
})


// var home = document.getElementById("home");
// const change = () {
//     home.document.style = "red";
// }


// var home = document.getElementById("home");

// const change = () => {
//     home.style.color = "red";
// }


var home = document.getElementById("home");

const change = () => {
    setTimeout(() => {
        home.style.backgroundColor = "red";
    }, 2000); // 1000 milliseconds (1 second) delay
}
