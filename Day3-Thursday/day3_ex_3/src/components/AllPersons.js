import React from "react"
import PropTypes from 'prop-types';
import Facade from './../apiFacade';

export default function AllPersons(props) {
  const { persons,editPerson,deletePerson} = props;

  function printTableData()
  {
    persons.map((person) => `
    <tr>
      <td>${person.age}</td>
      <td>${person.name}</td>
      <td>${person.gender}</td>
      <td>${person.email}</td>
    </tr>`);
  }
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
          {printTableData}
        </tbody>
      </table>
      
      <p>Please make me show all persons in the table above</p>
      <p>Also, update me when new items are added/edited </p>
      
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
