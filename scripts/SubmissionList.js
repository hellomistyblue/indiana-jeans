const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let html = `
        <div id="survey-submission-list">
            <h2>Survey Submissions</h2>
            `
           
        html += `
            </div>
        `
        return html
}