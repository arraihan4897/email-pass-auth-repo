
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';
// import { initializeApp } from "firebase/app";


 const auth = getAuth(app);
const handleRegister= (event)=> {
event.preventDefault();
console.log(event.target.email.value);
}
function App() {
  // const app = initializeApp(firebaseConfig);
 
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input type="Email" name="Email" placeholder='write Email  Here' />
        <br />
        <input type="Password"   name="password" placeholder='write Password Here'  />
        <br />
        <button type= "submit"> 
           <h4>Register</h4>
        </button>
      </form>

    </div>
  );
}

export default App;

