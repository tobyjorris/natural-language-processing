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
        postDataToServer('http://localhost:8081/analyze', serverData)
            .then(data => updateUI(data, serverData.submittedURL));
    } else {
        alert('invalid input!')
    }
}

export { handleSubmit }
