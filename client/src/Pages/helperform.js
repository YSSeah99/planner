import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import ReactDOM from 'react-dom/client';

function HelperForm() {
    useEffect( () => {
      fetchHelperForm();
    }, []);

    const [helperForm, setHelperForm] = useState([]);

    const fetchHelperForm = async () => {
      const helperData = await('/helperform');
      const helperItems = await helperData.json();
      setHelperForm(helperItems);
    };


    return (
      <section>
        {
          <div className="information">
         <h3>Want to contribute on this site? Fill up the form! No worries, your password is hashed. Once the admin
                recieves your form, he would PMed you on telegram for your student letter. This is to verify that you
                are a current NUS student. Upon successful application, you will be able to login and use the site.</h3>
         <form method="post">
           <div>
             <label for="helpername">Name (As in NUS): </label>
             <input class="form-control form-control-lg" id="name" type="text" name="name" placeholder="Name" required/>
           </div>
           <div>
             <label for="helperemail">NUS Email: </label>
             <input type="email" name="email" placeholder="NUS Email" required/> 
           </div>
           <div>
             <label for="helpernmae">Telegram Handle: </label>
             <input type="text" name="telegram" placeholder="Telegram Handle" required/> 
           </div>
           <div>
             <label for="helpernmae">Github (Optional): </label>
             <input type="text" name="github" placeholder="Github (Optional)"/>  
           </div>
           <div>
             <label for="helpernmae">Password: </label>
             <input type="password" name="passwordone" placeholder="Password" required/>
           </div>
           <div>
             <label for="helpernmae">Confirm Password: </label>
             <input type="password" name="passwordtwo" placeholder="Confirm Password" required/> 
           </div>
           <div>
             <button type="submit">Register</button>
           </div>                
          </form>
        </div>}
      </section>
    );
};

export default HelperForm;