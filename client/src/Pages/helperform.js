import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import ReactDOM from 'react-dom/client';

const initialHelperFormData = Object.freeze({
  name: "",
  email: "",
  telegram: "",
  github: "",
  password: ""
});

const HelperForm = () => {
    const [helperForm, setHelperForm] = React.useState(initialHelperFormData);

    const updateHelperFormData = (e) => {
        setHelperForm({
          ...helperForm,

          [e.target.name]: e.target.value.trim()
        });
    };

    const handleHelperSubmit = (e) => {
      e.preventDefault()
      fetch('/helper', {
        method: 'POST',
        body: JSON.stringify({helperForm}),
        header: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => setHelperForm(json.helperForm))
      console.log(helperForm);
    };
    
    useEffect( () => {
      fetchHelperForm();
    }, []);

    const fetchHelperForm = async () => {
      const helperData = await('/helperform');
      const helperItems = await helperData.json();
      setHelperForm(helperItems);
    };

    return (
      <div className="information">
      <h3>Want to contribute on this site? Fill up the form! No worries, your password is hashed. Once the admin
              recieves your form, he would PMed you on telegram for your student letter. This is to verify that you
              are a current NUS student. Upon successful application, you will be able to login and use the site.</h3>
      <form onClick={handleHelperSubmit}>
        <div>
          <label for="helpername">Name (As in NUS): </label>
          <input type="text" name="name" placeholder=" Full Name" onChange={updateHelperFormData} required/>
        </div>
        <div>
          <label for="helperemail">NUS Email: </label>
          <input type="email" name="email" placeholder="NUS Email" onChange={updateHelperFormData} required/> 
        </div>
        <div>
          <label for="helpernmae">Telegram Handle: </label>
          <input type="text" name="telegram" placeholder="Telegram Handle" onChange={updateHelperFormData} required/> 
        </div>
        <div>
          <label for="helpernmae">Github (Optional): </label>
          <input type="text" name="github" placeholder="Github (Optional)" onChange={updateHelperFormData} />  
        </div>
        <div>
          <label for="helpernmae">Password: </label>
          <input type="password" name="passwordone" placeholder="Password" required onChange={updateHelperFormData}/>
        </div>
        <div>
          <label for="helpernmae">Confirm Password: </label>
          <input type="password" name="passwordtwo" placeholder="Confirm Password" required onChange={updateHelperFormData}/> 
        </div>
        <div>
          <button type="submit">Register</button>
        </div>                
        </form>
      </div>
    );
};

export default HelperForm;