import Person from "./file2";

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
export function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
            <ul>
            {persons.map((person) => <li><WelcomePerson person={person}/></li>)}
            </ul>
            <WelcomePerson person={persons[0]} />
        </div>
    );
}

export const persons = [
    {firstName:"Kurt",lastName:"Wonnegut",gender: "Male",email: "k@wonnegut.dk", phone: "12345"},
    {firstName:"Jane",lastName:"Wonnegut",gender:"female",email:"j@wonnegut.dk", phone: "12345"},
    {firstName:"ib",lastName: "Wonnegut",gender : "Male",email: "i@wonnegut.dk", phone: "12345"},
];

export function WelcomePerson(props) {
    return (
        <div>
            <p>Firstname: {props.person.firstName}</p>
            <p>Lastname: {props.person.lastName}</p>
            <p>Email: {props.person.email}</p>
        </div>
    );
}
    
  