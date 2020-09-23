import { validateInput } from "../index";
import { updateUI } from "../index";
import { postDataToServer } from "../index";

function handleSubmit(event) {
    event.preventDefault()
    const url = document.getElementById('analysis-text').value;

    if (validateInput(url)) {
        const serverData = {
            submittedURL: url
        }
        postMiddleFunction(serverData)
    } else {
        alert('invalid input!')
    }
}

function postMiddleFunction (serverData) {
    postDataToServer('http://localhost:8081/analyze', serverData)
        .then(data => {
            console.log('API data sent back from server:', data)
            updateUI(data, serverData.submittedURL)
        });
}

export { postMiddleFunction }
export { handleSubmit }
