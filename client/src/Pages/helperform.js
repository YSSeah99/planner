import React, {useState, useEffect} from 'react';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import ReactDOM from 'react-dom/client';

const HelperForm = () => {
    
    return (
      <div className="information">
         <h3>Want to contribute on this site? Fill up the form! No worries, your password is hashed. Once the admin
                recieves your form, he would PMed you on telegram for your student letter. This is to verify that you
                are a current NUS student. Upon successful application, you will be able to login and use the site.</h3>
         <form method="post">
           <FormControlUnstyled>
             <label for="helpername">Name (As in NUS): </label>
             <input class="form-control form-control-lg" id="name" type="text" name="name" placeholder="Name" required/>
           </FormControlUnstyled>
           <FormControlUnstyled>
             <label for="helperemail">NUS Email: </label>
             <input type="email" name="email" placeholder="NUS Email" required/> 
           </FormControlUnstyled>
           <FormControlUnstyled>
             <label for="helpernmae">Telegram Handle: </label>
             <input type="text" name="telegram" placeholder="Telegram Handle" required/> 
           </FormControlUnstyled>
           <FormControlUnstyled>
             <label for="helpernmae">Github (Optional): </label>
             <input type="text" name="github" placeholder="Github (Optional)"/>  
           </FormControlUnstyled>
           <FormControlUnstyled>
             <label for="helpernmae">Password: </label>
             <input type="password" name="passwordone" placeholder="Password" required/>
           </FormControlUnstyled> 
           <FormControlUnstyled>
             <label for="helpernmae">Confirm Password: </label>
             <input type="password" name="passwordtwo" placeholder="Confirm Password" required/> 
           </FormControlUnstyled>                  
            <button type="submit">Register</button>
        </form>
      </div>
    );
  };

export default HelperForm;