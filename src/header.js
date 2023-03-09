import { home } from "./home"
import { loadMenu } from "./menu"
import { about } from "./about"

const header = () => {
    console.log('header ')
    const container = document.querySelector('#content')
    container.textContent = ""

    const navBar = document.createElement("nav")
   
    const homeTab = document.createElement("span")
    homeTab.textContent = "Home"
    homeTab.addEventListener("click", (e) => {
        home()
        console.log('loading home');
    })

    const menuTab = document.createElement("span")
    menuTab.textContent = "Menu"

    menuTab.addEventListener("click", (e) => {
        loadMenu()
        console.log('loading menu');
    })

    const aboutTab = document.createElement("span")
    aboutTab.textContent = "About"
    aboutTab.addEventListener("click", (e) => {
        about()
        console.log('loading about');
    })

    navBar.appendChild(homeTab)
    navBar.appendChild(menuTab)
    navBar.appendChild(aboutTab)
    container.appendChild(navBar)
}

export { header }