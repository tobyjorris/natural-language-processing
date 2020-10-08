import { validateInput } from "../index";
import "babel-polyfill";

export const postDataToServer = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    try {
        return await response.json();
    } catch (e) {
        console.log("error", e);
    }
};

const updateUI = (apiResponse, URL) => {
    const resultsDiv = document.getElementById('results')

    const documentFragment = document.createDocumentFragment();

    const resultsGroup = document.createElement('div')
    const sentence = document.createElement('p')
    const agreement = document.createElement('p')
    const confidence = document.createElement('p')
    const irony = document.createElement('p')
    const subjectivity = document.createElement('p')
    const horizontalRule = document.createElement('hr')

    sentence.setAttribute( 'id', 'sentence');
    agreement.setAttribute('id', 'agreement');
    confidence.setAttribute('id', 'confidence');
    irony.setAttribute('id', 'irony');
    subjectivity.setAttribute('id', 'subjectivity');

    resultsGroup.classList.add('results_group')
    sentence.textContent = `Article URL: "${URL}"`;
    agreement.textContent = `Agreement: ${apiResponse.agreement}`;
    confidence.textContent = `Confidence: ${apiResponse.confidence}`;
    irony.textContent = `Irony: ${apiResponse.irony}`;
    subjectivity.textContent = `Subjectivity: ${apiResponse.subjectivity}`

    resultsGroup.appendChild(sentence)
    resultsGroup.appendChild(agreement)
    resultsGroup.appendChild(confidence)
    resultsGroup.appendChild(irony)
    resultsGroup.appendChild(subjectivity)
    resultsGroup.appendChild(horizontalRule)

    documentFragment.appendChild(resultsGroup);
    resultsDiv.appendChild(documentFragment);
}

function handleSubmit(event) {
    event.preventDefault()
    const url = document.getElementById('analysis-text').value;

    if (validateInput(url)) {
        const serverData = {
            submittedURL: url
        }
        postDataToServer('http://localhost:8081/analyze', serverData)
            .then(data => updateUI(data, serverData.submittedURL));
    } else {
        alert('invalid input!')
    }
}

export { handleSubmit }
