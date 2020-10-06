import { validateInput } from './js/inputValidator';
import { handleSubmit } from './js/formHandler';
import { updateUI } from "./js/uiUpdate";
import { postDataToServer } from "./js/postToServer";

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'

export {
    postDataToServer,
    updateUI,
    validateInput,
    handleSubmit,
}
