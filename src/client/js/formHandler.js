import { validateInput } from "../index";
import { updateUI } from "../index";
import { postDataToServer } from "../index";

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('analysis-text').value;

    if (validateInput(formText)) {
        const serverData = {
            text: formText
        }
        postDataToServer('http://localhost:8081/analyze', serverData)
            .then(data => {
                console.log('API data sent back from server:', data)
                updateUI(data)
            });
    } else {
        alert('invalid input!')
    }
}

export { handleSubmit }
