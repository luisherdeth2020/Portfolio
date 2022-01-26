const navOpen=document.getElementById("nav-toggle"),navMenu=document.getElementById("nav-menu"),navClose=document.getElementById("nav-close");navOpen&&navOpen.addEventListener("click",()=>{navMenu.classList.add("show-menu")}),navClose&&navClose.addEventListener("click",()=>{navMenu.classList.remove("show-menu")});const navLink=document.querySelectorAll(".nav__link");navLink.forEach(e=>e.addEventListener("click",()=>{navMenu.classList.remove("show-menu")}));const sections=document.querySelectorAll("section[id]");function scrollActive(){const e=window.pageYOffset;sections.forEach(s=>{const t=s.offsetHeight,l=s.offsetTop-50;sectionId=s.getAttribute("id"),e>l&&e<=l+t?document.querySelector(".nav__menu a[href*="+sectionId+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+sectionId+"]").classList.remove("active-link")})}function scrollUp(){const e=document.getElementById("scroll-up");this.scrollY>=360?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",scrollActive),window.addEventListener("scroll",scrollUp),window.addEventListener("scroll",()=>{const e=document.getElementById("header");scrollY>=80?e.classList.add("scroll-header"):e.classList.remove("scroll-header")});const darkTheme="dark-theme",uilMoon=document.getElementById("uil-moon"),uilSun=document.getElementById("uil-sun"),selectedTheme=localStorage.getItem("selected-theme"),selectedIcon=localStorage.getItem("selected-icon"),getCurrentTheme=()=>document.body.classList.contains(darkTheme)?"dark":"light";function showIcon(){"light"===getCurrentTheme()&&(uilMoon.classList.toggle("hide"),uilSun.classList.toggle("hide"))}selectedTheme?document.body.classList["dark"===selectedTheme?"add":"remove"](darkTheme):document.body.classList.add(darkTheme),showIcon(),uilMoon.addEventListener("click",()=>{document.body.classList.toggle(darkTheme),uilMoon.classList.toggle("hide"),uilSun.classList.toggle("hide"),localStorage.setItem("selected-theme",getCurrentTheme()),localStorage.setItem("selected-icon",getCurrentIcon())}),uilSun.addEventListener("click",()=>{document.body.classList.toggle(darkTheme),uilMoon.classList.toggle("hide"),uilSun.classList.toggle("hide"),localStorage.setItem("selected-theme",getCurrentTheme()),localStorage.setItem("selected-icon",getCurrentIcon())}),window.addEventListener("scroll",()=>{let e=document.documentElement.scrollTop;const s={scrollDown:{skillHtml:"skills__html",skillCss:"skills__css",skillJs:"skills__js",sass:"skills__sass",skillsBootstrap:"skills__bootstrap",skillsTailwind:"skills__tailwind",skillsReact:"skills__react",skillsGit:"skills__git",skillsFigma:"skills__figma",skillsXd:"skills__xd",skillsPhotoshop:"skills__photoshop"}};Object.keys(s.scrollDown).forEach(t=>{document.getElementById(t).offsetTop-800<e?document.getElementById(t).classList.add(s.scrollDown[t]):document.getElementById(t).classList.remove(s.scrollDown[t])})});const skillsHeader=document.querySelectorAll(".skills__header"),skillsContent=document.getElementsByClassName("skills__content");skillsHeader.forEach(e=>{e.addEventListener("click",function(){let e=this.parentNode.className;for(i=0;i<skillsContent.length;i++)skillsContent[i].className="skills__content skills__close";"skills__content skills__close"===e&&(this.parentNode.className="skills__content skills__open")})});const grande=document.querySelector(".grande"),punto=document.querySelectorAll(".punto"),puntito=document.querySelectorAll(".puntito");punto.forEach((e,s)=>{e.addEventListener("click",()=>{let e=-50*s;console.log(e),grande.style.transform=`translateX(${e}%)`,punto.forEach((e,s)=>{punto[s].classList.remove("activo")}),punto[s].classList.add("activo")})}),puntito.forEach((e,s)=>{e.addEventListener("click",()=>{let e=-50*s;console.log(e),grande.style.transform=`translateX(${e}%)`,puntito.forEach((e,s)=>{console.log(puntito),punto[s].classList.remove("activo")}),punto[s].classList.add("activo")})});