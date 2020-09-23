function updateUI (apiResponse, URL)  {
    const resultsDiv = document.getElementById('results')

    const documentFragment = document.createDocumentFragment();

    const resultsGroup = document.createElement('div')
    const sentence = document.createElement('p')
    const agreement = document.createElement('p')
    const confidence = document.createElement('p')
    const irony = document.createElement('p')
    const subjectivity = document.createElement('p')
    const horizontalRule = document.createElement('hr')

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

export { updateUI }
