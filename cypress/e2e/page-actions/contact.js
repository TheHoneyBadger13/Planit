const BUTTON_CONTACT = '[id="nav-contact"]'
const FIELD_FORENAME = '[id="forename"]'
const FIELD_SURNAME = '[id="surname"]'
const FIELD_EMAIL = '[id="email"]'
const FIELD_TELEPHONE = '[id="telephone"]'
const FIELD_MESSAGE = '[id="message"]'
const BUTTON_SUBMIT = '.btn-contact'
const SPIEL_SUCCESS = '.alert'




class Contact {

    clickContact() {
        cy.get(BUTTON_CONTACT,{timeout:10000}).click()
    }

    clickSubmit() {
        cy.get(BUTTON_SUBMIT,{timeout:10000}).click()
    }

    inputField(fieldName, fieldValue) {
        const fieldVariableName = 'FIELD_' + fieldName.toUpperCase();
        const fieldSelector = eval(fieldVariableName);
        let defaultValue;
        switch (fieldName) {
            case 'forename':
            defaultValue = fieldValue ? fieldValue : 'John';
            break;
            case 'surname':
            defaultValue = fieldValue ? fieldValue : 'DoeWick';
            break;
            case 'email':
            defaultValue = fieldValue ? fieldValue : 'example@abc.com';
            break;
            case 'telephone':
            defaultValue = fieldValue ? fieldValue : '0212345678';
            break;
            case 'message':
            defaultValue = fieldValue ? fieldValue : 'i dunno you tell me';
            break;
            default:
            defaultValue = fieldValue ? fieldValue : '';
        }
        cy.get(fieldSelector, { timeout: 10000 }).clear().type(defaultValue, { force: true });
      }
    
    validateFeedback(){
        cy.get(SPIEL_SUCCESS,{timeout:20000}).contains('we appreciate your feedback',{timeout:15000})
    }

    validateError(){
        cy.get(SPIEL_SUCCESS,{timeout:5000}).should('not.contain', "but we won't get it unless you complete the form correctly.");
    }
}

module.exports = Contact;