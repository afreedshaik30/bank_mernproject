import './App.css';
// import Home from "./Home";
import Registration from './forms/Registration';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
      <Registration/>
    </div>
  );
}

export default App;
