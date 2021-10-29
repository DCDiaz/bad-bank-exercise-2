import React from 'react';
import Card from './card';
import { UserContext } from './page';

function Login() {
  const [loginShow, setLoginShow]         = React.useState(true);
  const [loginStatus, setLoginStatus]     = React.useState('');
  const [isValid, setIsValid]             = React.useState(false);
  const ctx = React.useContext(UserContext);  

  function validate(field, value, showError) {
    
    function showErrorMessage(errorStr, showError) {
      if (showError === 1) {
        setLoginStatus('Error: ' + errorStr);
        setTimeout(() => setLoginStatus(''), 3000);
      }
    }

    let errorStr = '';

    if (field === 'email') {
      errorStr = 'Please enter your Email';
      if (value === '') {
        setIsValid(false);
        showErrorMessage(errorStr, showError);
        return false;
      } else {
        //if(email && password) setIsValid(true);
      }
    } else if (field === 'password') {
      errorStr = 'Please enter a Password 8+ characters';
      if (value.length < 8) {
        setIsValid(false);
        showErrorMessage(errorStr, showError);
        return false;
      } else if (value.length >= 8) {
        //if(name && email) setIsValid(true);
      }
    }
    return true;
  }

  function handleLogin() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (!validate('email',    email,    1)) return;
    if (!validate('password', password, 1)) return;
    //ctx.users.push({email,password,balance:0});
    setLoginShow(false);
  }   

  return (
    <>
    <h1>Log In</h1>
    <Card
        txtcolor="black"
        header="Log in to your Bad Bank account."
        title="Enter Your Email Address and Password"
        status={loginStatus}
        body={loginShow ? (  
                <>
                <label>Email address</label><br/>
                <input 
                  type="input" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter email" 
                  onChange={e => validate('email', e.currentTarget.value, 1)}/><br/>
                <label>Password</label><br/>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter password" 
                  onChange={e => validate('password', e.currentTarget.value, 0)}/><br/>
                <input 
                  type="submit" 
                  className={`btn ${isValid ? "btn-primary" : "btn-light text-black-50"}`} 
                  id="submit-button"
                  value="Log In"
                  onClick={handleLogin} />
                </>
              ):(
                <>
                <h3 className="text-success mb-4">Success! Your are logged-in.</h3>
                </>
              )}
    />
    </>
  )  
}

export default Login;