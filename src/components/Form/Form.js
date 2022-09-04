import { useState } from "react";


function Form(props){
    const [formInputs, setFormInputs] = useState(props.formInputs)
    const validate = (name, value)=>{
        formInputs[name].errors = []
        formInputs[name].value = value
        if(formInputs[name].validations.required){
          if(!value.length){
            formInputs[name].errors.push({name: 'required', value: `${name} is required`})
          }
        }
        if(formInputs[name].validations.minLength){
          if(value.length < formInputs[name].validations.minLength){
            formInputs[name].errors.push({name: 'minLength' ,value: `${name} must have at least 2 chars`})
          }
        }
        if(formInputs[name].validations.pattern){
          if(!formInputs[name].validations.pattern.test(value)){
            formInputs[name].errors.push({name: 'regex' ,value: `${name} Not Valid`})
          }
        }
        if(formInputs[name].validations.confirm_password){
            console.log(formInputs[name].value, formInputs['password'].value);
            if(formInputs[name].value !== formInputs['password'].value){
                formInputs[name].errors.push({name:'passwordConfirm', value: `${name} Not Same`})
            }
        }
        setFormInputs({...formInputs})
      }
      const sumbitButton = (e)=>{
        e.preventDefault()
        let isValid = true
        for(let input in formInputs){
            if(formInputs[input].errors.length > 0 || formInputs[input].value === ''){
                isValid = false
                validate(formInputs[input].name, formInputs[input].value)
            }
        }
        if(isValid){
            alert('welcome')
        }
      }
    return(
        <form className="login-form">
          <h2>{props.title}</h2>
        {Object.keys(formInputs).map(input=> <input
            key={formInputs[input].id}
            onBlur={validate}
            {...formInputs[input]}
            />)}
            
        
        <button type="submit" onClick={sumbitButton}>{props.onSubmit}</button>
        </form>
    )
}
export default Form