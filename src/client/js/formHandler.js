function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('analysis-text').value;
    const serverData = {
        text: formText
    }
    postDataToServer('http://localhost:8081/analyze', serverData)
        .then(data => {
            updateUI(data)
        });
}

const postDataToServer = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    try {
        return await response.json();
    } catch (e) {
        console.log('error', e);
    }
}

const updateUI = apiResponse => {
    const sentenceList = [];
    for (const sentenceSegment of apiResponse.sentence_list) {
        sentenceList.push(sentenceSegment.text);
    }
    console.log('sentence list', sentenceList.join(' '));
    const resultsDiv = document.getElementById('results')

    const documentFragment = document.createDocumentFragment();

    const resultsGroup = document.createElement('div')
    const sentence = document.createElement('p')
    const agreement = document.createElement('p')
    const confidence = document.createElement('p')
    const irony = document.createElement('p')
    const horizontalRule = document.createElement('hr')

    resultsGroup.classList.add('results_group')
    sentence.textContent = `Text: "${sentenceList.join(' ')}"`;
    agreement.textContent = `Agreement: ${apiResponse.agreement}`;
    confidence.textContent = `Confidence: ${apiResponse.confidence}`;
    irony.textContent = `Irony: ${apiResponse.irony}`;

    resultsGroup.appendChild(sentence)
    resultsGroup.appendChild(agreement)
    resultsGroup.appendChild(confidence)
    resultsGroup.appendChild(irony)
    resultsGroup.appendChild(horizontalRule)

    documentFragment.appendChild(resultsGroup);
    resultsDiv.appendChild(documentFragment);
}

export { handleSubmit }
