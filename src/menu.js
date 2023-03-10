import { header } from "./header"

function createItem(name) {
    const foodContainer = document.createElement("section")

    const foodImg = document.createElement("img")
    foodImg.src = `assets/${name}.png`
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

    const menuContainer = document.createElement("main")
    menuContainer.classList.add('menu')

    const menuGrid = document.createElement('div')

    const menuTitle = document.createElement("h1")
    menuTitle.textContent = "Menu"
    
    container.appendChild(menuContainer)
    menuContainer.appendChild(menuTitle)
    menuContainer.appendChild(menuGrid)
    menuGrid.appendChild(createItem('ebi'))
    menuGrid.appendChild(createItem('saba'))
    menuGrid.appendChild(createItem('hamachi'))
    menuGrid.appendChild(createItem('ika'))
    menuGrid.appendChild(createItem('ikura'))
    menuGrid.appendChild(createItem('maguro'))
    
}

export { loadMenu }

