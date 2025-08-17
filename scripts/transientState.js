// Set up the transient state data structure and provide initial values
const transientState = {
    ownsBlueJeans: null,
    socioLocationId: 0
}

// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
    if (transientState.ownsBlueJeans !== null && transientState.socioLocationId > 0) {
        // Create the options for fetch()
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        // Send the data to the API
        const response = await fetch("http://localhost:8088/submissions", postOptions)

    // Dispatch a custom event when the submission is complete
    const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(newSubmissionEvent)
    } 
    else { 
        window.alert(`Please answer both questions to submit survey.`)
    }
}




    // console.log("Saving survey to database...")

