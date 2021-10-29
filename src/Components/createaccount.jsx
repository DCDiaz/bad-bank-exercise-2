import React from 'react';
import Card from './card';
import { UserContext } from './page';

function CreateAccount() {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [isValid, setIsValid]   = React.useState(false);
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, value, showError) {
    
    function showErrorMessage(errorStr, showError) {
      if (showError === 1) {
        setStatus('Error: ' + errorStr);
        setTimeout(() => setStatus(''), 3000);
      }
    }

    let errorStr = '';

    if (field === 'name') {
      errorStr = 'Please enter your Full Name';
      if (value === '') {
        setName('');
        setIsValid(false);
        showErrorMessage(errorStr, showError);
        return false;
      } else {
        setName(value);
        if(email && password) setIsValid(true);
      }
    } else if (field === 'email') {
      errorStr = 'Please enter your Email';
      if (value === '') {
        setEmail('');
        setIsValid(false);
        showErrorMessage(errorStr, showError);
        return false;
      } else {
        setEmail(value);
        if(name && password) setIsValid(true);
      }
    } else if (field === 'password') {
      errorStr = 'Please create a Password 8+ characters';
      if (value.length < 8) {
        setPassword('');
        setIsValid(false);
        showErrorMessage(errorStr, showError);
        return false;
      } else if (value.length >= 8) {
        setPassword(value);
        if(name && email) setIsValid(true);
      }
    }
    return true;
  }

  function handleCreate() {
    if (!validate('name',     name,     1)) return;
    if (!validate('email',    email,    1)) return;
    if (!validate('password', password, 1)) return;
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }    

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setIsValid(false);
  }

  return (
    <>
      <h1>Create an Account</h1>
      <Card
        txtcolor="black"
        header="Get 0.00% interest when you open an account today!"
        title="Enter Your Full Name, Email, and Password"
        status={status}
        body={show ? (  
                <>
                <label>Full Name</label><br/>
                <input 
                  type="input" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter full name" 
                  value={name} 
                  onChange={e => validate('name', e.currentTarget.value, 1)} /><br/>
                <label>Email address</label><br/>
                <input 
                  type="input" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter email" 
                  value={email} 
                  onChange={e => validate('email', e.currentTarget.value, 1)}/><br/>
                <label>Password</label><br/>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter password" 
                  defaultValue={password}
                  onChange={e => validate('password', e.currentTarget.value, 0)}/><br/>
                <input 
                  type="submit" 
                  className={`btn ${isValid ? "btn-primary" : "btn-light text-black-50"}`} 
                  id="submit-button"
                  value="Create Account"
                  onClick={handleCreate} />
                </>
              ):(
                <>
                <h3 className="text-success mb-4">Success! Your account was created.</h3>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  onClick={clearForm}>Add another account
                </button>
                </>
              )}
      />
    </>
  )
}

export default CreateAccount;