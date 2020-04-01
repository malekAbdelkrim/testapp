import {observable, action, toJS} from "mobx";
import Validator from 'validatorjs';
import { valid } from "semver";


class FormLogin {

    @observable
    form = {
        fields: {
            email: {
                value: '',
                error: '',
                rule:'required|email'
            },
            password: {
                value: '',
                error: '',
                rule: 'required'
            }
        },
        meta: {
            isValid: false,
            error: ''
        }
    }

    @action
    fieldChange = (field, value) => {
        this.form.fields[field].value = value;
        let validation = new Validator(
            this.getFlattedValue('value'), 
            this.getFlattedValue('rule'));
            console.log(validation.passes())
     this.form.meta.isValid = validation.passes();
     this.form.fields[field].error = validation.errors.first(field);
    }

    getFlattedValue = (valueKey) =>{
        let data = {};
        let form = toJS(this.form).fields;
        Object.keys(form).map(key =>{
            data[key] = form[key][valueKey];
        });
        return data;

    }

    @action
    onSubmit(){
        this.form.fields.email.value = '';
        this.form.fields.password.value = '';
       // this.form.fields.meta.isValid = false;
    }
}

 const loginFormInstance = new FormLogin();
 export default loginFormInstance;