import { header } from "./header"

function createItem(name) {
    const foodContainer = document.createElement("section")

    const foodImg = document.createElement("img")
    foodImg.src = `../src/assets/${name}.png`
    foodImg.alt = `${name} sushi`

    const foodName = document.createElement("h2")
    foodName.textContent = name

    foodContainer.appendChild(foodImg)
    foodContainer.appendChild(foodName)
    return foodContainer
}

const loadMenu = () => {
    console.log('loading menu...')
    const container = document.querySelector('#content')
    header()
    // container.appendChild(menu())
    const menuContainer = document.createElement("main")
    
    const menuTitle = document.createElement("h1")
    menuTitle.textContent = "Menu"
    
    container.appendChild(menuContainer)
    menuContainer.appendChild(menuTitle)
    menuContainer.appendChild(createItem('ebi'))
    menuContainer.appendChild(createItem('saba'))
    menuContainer.appendChild(createItem('hamachi'))
    menuContainer.appendChild(createItem('ika'))
    menuContainer.appendChild(createItem('ikura'))
    menuContainer.appendChild(createItem('maguro'))
    
}

export { loadMenu }

