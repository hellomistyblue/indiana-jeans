import { JeanChoices } from "./JeanChoices.js"
import { LocationChoices } from "./LocationChoices.js"
import { SubmissionButton } from "./SubmissionButton.js"
import { SubmissionList } from "./SubmissionList.js"

//get a reference to the container element in our HTML
const container = document.querySelector("#container")

//define a render() function that: Calls our JeanChoices() function to get the HTML & Updates the container's innerHTML with the generated HTML

const render = async () => {
    const jeansHTML = JeanChoices()
    const locationsHTML = await LocationChoices()
    const buttonHTML = SubmissionButton()
    const submissionsHTML = await SubmissionList()

    container.innerHTML = `
        ${jeansHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionsHTML}
    `
}

// Add an event listener for our custom event
document.addEventListener("newSubmissionCreated", render)

//we call render() to display our component when the page loads
render()

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
    // Start building the POST request here
    console.log("Saving survey to database...")
    console.log(transientState)
}