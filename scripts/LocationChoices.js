import { setSocioLocationId} from "./transientState.js"

const handleLocationChange = (changeEvent) => {

    if (changeEvent.target.name === "location") {
        const convertedToNumber = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToNumber)
    }
}

export const LocationChoices = async () => {
    document.addEventListener("change", handleLocationChange)

    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()
    
    let html = `
        <div class="survey-input">
            <h2>What type of area do you live in?</h2>
            `
    
    for (const location of locations) {
        html += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`
    }
    
    
    // TODO: generate radio buttons and add to html

    html += `
        </div>
    `
    
    return html
}
