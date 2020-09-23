import * as formHandler from "../client/js/formHandler"
import {postMiddleFunction} from "../client/js/formHandler";
// jest.mock(formHandler, () => {
//     return {postMiddleFunction: jest.fn(() => {
//             return 'success'
//         })}
// })

test('handles the submit click function', async () => {
    const handleSubmitSpy = jest.spyOn(formHandler, 'handleSubmit')
    jest.spyOn(formHandler, 'postMiddleFunction').mockImplementation(() => {
        return 'success'
    })
    formHandler.postMiddleFunction.prototype = jest.fn()

    const event = {
        preventDefault: jest.fn()
    }

    formHandler.handleSubmit(event)
    expect(event.preventDefault).toBeCalledTimes(1)
})
