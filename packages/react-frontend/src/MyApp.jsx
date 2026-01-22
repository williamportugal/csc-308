// src/MyApp.jsx
import React, {useState, useEffect} from 'react';
import Table from "./table";
import Form from "./Form";


function MyApp() {
  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }

  useEffect(() => {
  fetchUsers()
	  .then((res) => res.json())
	  .then((json) => setCharacters(json["users_list"]))
	  .catch((error) => { console.log(error); });
  }, [] );

    function postUser(person) {
    const promise = fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    return promise;
  }


  const [characters, setCharacters] = useState([]);
  function removeOneCharacter(index) {
    const characterToDelete = characters[index];
    fetch(`http://localhost:8000/users/${characterToDelete.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          const updated = characters.filter((character, i) => {
            return i !== index;
          });
          setCharacters(updated);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateList(person) { 
    postUser(person)
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          setCharacters([...characters, data]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
}


    
  return (
  <div className="container">
    <Table
      characterData={characters}
      removeCharacter={removeOneCharacter}
    />
    <Form handleSubmit={updateList} />
  </div>
);




}

export default MyApp;