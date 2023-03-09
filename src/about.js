import { header } from "./header"

const about = () => {
    header()
    const container = document.querySelector('#content')

    const aboutImg = document.createElement("img")
    aboutImg.src = "../src/assets/futomaki.png"
    aboutImg.alt = "futomaki sushi"

    const aboutTitle = document.createElement("h1")
    aboutTitle.textContent = "About us"

    const aboutSubtitle = document.createElement("span")
    aboutSubtitle.textContent = "こだわり"

    const aboutP = document.createElement("p")
    aboutP.textContent = "Our chefs use only the freshest ingredients to create an unforgettable dining experience. Our menu features traditional sushi rolls as well as innovative creations that push the boundaries of traditional sushi. We take pride in our attention to detail and strive to deliver exceptional service to our guests. Whether you're a sushi connoisseur or trying it for the first time, come taste the perfect harmony of flavor at Umami Sushi."

    container.appendChild(aboutImg)
    container.appendChild(aboutTitle)
    container.appendChild(aboutSubtitle)
    container.appendChild(aboutP)
}

export { about }