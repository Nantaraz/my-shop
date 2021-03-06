import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

import Usetab from './comp/Usetab'

import Addtab from './comp/Addtab'

import './App.css'



const App = () => {

  const usersData = [

  ]



  const [users, setUsers] = useState(usersData)

  const [count, setCount] = useState(0)

 

  const addUser = user => {

    user.id = count
  

    setUsers([ ...users, user ])
    console.log(users);
    

  }

  const deleteUser = id => {

    setUsers(users.filter(user => user.id !== id))

  }

  const [ editing, setEditing ] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }

  const [ currentUser, setCurrentUser ] = useState(initialFormState)



  const editRow = user => {

    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })

  }

  const updateUser = (id, updatedUser) => {

    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))

  }

  
 
    var onFilePicked = function(event) {
      var input = event.target;
  
      var file = input.files[0];
      console.log(file.name);
    };

  
  return (

    <div className="container">

          

          <Addtab  addUser={addUser} onFilePicked={onFilePicked}  setCount={setCount} count={count}/>


          <Usetab     users={users}   editRow={editRow} updateUser={updateUser}  deleteUser={deleteUser}/>



    </div>


            
  )

  

}



export default App