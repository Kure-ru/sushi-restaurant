import { header } from "./header"

const home = () => {
    header()
    const container = document.querySelector('#content')
   
    const homeContainer = document.createElement("main")
    homeContainer.classList.add('home')

    const textContainer = document.createElement("div")

    const headerImg = document.createElement("img")
    headerImg.src = "assets/header-pic.png"
    headerImg.alt = "chopsticks holding a sushi"
    

    const headerTitle = document.createElement("h1")
    headerTitle.textContent = "The Perfect Harmony of Flavor"

    const headerP = document.createElement("p")
    headerP.textContent = "At Umami Sushi, we specialize in creating sushi that is both visually stunning and delicious."

    const headerButton = document.createElement("button")
    headerButton.textContent = "Order Now!"

    container.appendChild(homeContainer)
    homeContainer.appendChild(headerImg)
    homeContainer.appendChild(textContainer)
    textContainer.appendChild(headerTitle)
    textContainer.appendChild(headerP)
    textContainer.appendChild(headerButton)
}

export { home }


