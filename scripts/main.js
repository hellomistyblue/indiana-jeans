import { JeanChoices } from "./JeanChoices.js"
import { LocationChoices } from "./LocationChoices.js"

//get a reference to the container element in our HTML
const container = document.querySelector("#container")


//define a render() function that: Calls our JeanChoices() function to get the HTML & Updates the container's innerHTML with the generated HTML


const render = async () => {
    const jeansHTML = JeanChoices()
    const locationsHTML = await LocationChoices()
    
    container.innerHTML = `
        ${jeansHTML}
        ${locationsHTML}
    `
}

//we call render() to display our component when the page loads

render()