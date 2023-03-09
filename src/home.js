import { header } from "./header"

const home = () => {
    header()
    const container = document.querySelector('#content')

    const headerImg = document.createElement("img")
    headerImg.src = "assets/header-pic.png"
    headerImg.alt = "chopsticks holding a sushi"

    const headerTitle = document.createElement("h1")
    headerTitle.textContent = "Experience the Perfect Harmony of Flavor at Umami Sushi"

    const headerP = document.createElement("p")
    headerP.textContent = "At Umami Sushi, we specialize in creating sushi that is both visually stunning and delicious."

    const headerButton = document.createElement("button")
    headerButton.textContent = "Order Now!"

    container.appendChild(headerImg)
    container.appendChild(headerTitle)
    container.appendChild(headerP)
    container.appendChild(headerButton)
}

export { home }


