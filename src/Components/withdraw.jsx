import React from 'react';
import Card from './card';
import { UserContext } from './page';

function Withdraw() {
  const [show, setShow]         = React.useState(true);
  const [isValid, setIsValid]   = React.useState(false);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount]     = React.useState('');
  const ctx = React.useContext(UserContext); 

  let balance = 0;
  if (ctx.users[0]) {
    balance = ctx.users[0].balance;
  }
  balance = parseFloat(balance).toFixed(2);
  
  function validate(field, value, showError) {
    function showErrorMessage(errorStr, showError) {
      if (showError === 1) {
        setStatus('Error: ' + errorStr);
        setTimeout(() => setStatus(''), 3000);
      }
    }

    let errorStr = '';
    if (field === 'amount') {
      if (value === '') {
        errorStr = 'Please enter an amount';
        setAmount('');
        setIsValid(false);
        showErrorMessage(errorStr, showError, 1);
        return false;
      } else if (Number(value) <= 0) {
        errorStr = 'Please enter a positive amount';
        setAmount(value);
        setIsValid(false);
        showErrorMessage(errorStr, showError, 0);
        return false;
      } else if (value !== '' && isNaN(value)) {
        errorStr = 'Please enter positive numeric values only';
        setIsValid(false);
        showErrorMessage(errorStr, showError, 1);
        return false;
      } else if (value !== '' && Number(value) !== 0 && !isNaN(value)) {
        setAmount(value);
        setIsValid(true);
      }
    }
    return true;
  }

  function handleWithdrawal(){
    if (!validate('amount', amount, 1)) return;
    if (ctx.users[0]) {
      let newBalance = parseFloat(balance) - parseFloat(amount);
          newBalance = newBalance.toFixed(2);
      if (newBalance < 0) {
        setStatus('Transaction Failed: Insufficient Funds');
        setTimeout(() => setStatus(''), 3000);
        clearForm();
        return false;
      }
      ctx.users[0].balance = Number(newBalance);
    }
    setShow(false);
  } 

  function clearForm(){
    setAmount('');
    setShow(true);
    setIsValid(false);
  }

  return (
    <>
      <h1>Withdraw Funds</h1>
      <Card
        txtcolor="black"
        header={`Your current balance is: $${balance}`}
        status={status}
        body={show ? (  
                <>
                <label>Withdrawal Amount:</label><br/>
                $<input 
                  type="input" 
                  className="form-control d-inline-block mb-3 mt-3 ms-1" 
                  id="amount" 
                  placeholder="0.00" 
                  value={amount}
                  onChange={e => validate('amount', e.currentTarget.value, 1)}
                  style={{maxWidth: '200px'}} /><br/>
                <input 
                  type="submit" 
                  className={`btn ${isValid ? "btn-primary" : "btn-light text-black-50"}`}
                  id="submit-button"
                  value="Withdraw"
                  onClick={handleWithdrawal} />
                </>
              ):(
                <>
                <h3 className="text-success mb-4">Success! Your withdrawal of ${parseFloat(amount).toFixed(2)} was processed.</h3>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  onClick={clearForm}>Make another withdrawal
                </button>
                </>
              )}
      />
    </>
  )
}

export default Withdraw;