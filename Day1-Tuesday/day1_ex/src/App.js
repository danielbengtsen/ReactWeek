import logo from './logo.svg';
import './App.css';
import upper, {text1,text2,text3} from "./file1";
import Person, {males, females} from "./file2";
import {Welcome, MultiWelcome} from "./file3";

const person = Person;
const {firstName, email} = person;
const names = [...males, ...females];
const names2 = [...males, "Kurt", "Helle", ...females, "Tina"];
//const personV2 = (({firstName, lastName, gender, email} = person), friends = [...males, ...females], phone = 123456);

function App() {

  console.log(names);
  console.log(names2);
  //console.log(personV2);

  return (
    <div>

      <div>
        <h2>Ex 1</h2>
        <p>{upper(text1)}</p>
        <p>{upper(text2)}</p>
        <p>{upper(text3)}</p>
        <p>{upper("uppercase this!")}</p>
      </div>

      <div>
        <h2>Ex 2</h2>
        <p>Firstname: {firstName}, Email: {email}</p>
      </div>

      <div>
        <h2>Ex 3</h2>
        <MultiWelcome/>
      </div>

    </div>
  );
}

export default App;
