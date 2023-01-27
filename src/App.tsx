import { useState } from 'react'



export function App() {
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  

  const handleSubmit = () => {
    console.log(email)
    console.log(password)

  }
  
  
  return (
    <div>
    
      <br />
      <form>

        <label>
          <span>Email: </span>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br /><br />

        <label>
          <span>Password: </span>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        
        <br /><br />
        <button type="button" onClick={handleSubmit}>Submit</button>

      </form>
      <br />
      <h3>Result</h3>
      {email}< br />{password}
    </div>
  );
};


