import React, { useState } from 'react';
import swal from 'sweetalert';

const AddUserForm = props => {

  const handleOnAddClick = user => {
    swal({
      title: "Add user?",
      text: "Click OK to add user.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(
      (willAdd) => {
      if (willAdd) {
        swal("User has been added.", {
          icon: "success",
        });
        props.addTask(user)
      } else {
        swal("User will not be added.", {
          icon: "info",
        });
      }
    })
  }

  const initialFormstate = { id: null, name: '', username: ''}
  const [user, setUser] = useState(initialFormstate)
  
  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({...user, [name]: value })
  }
  
  return (
    <form onSubmit={event => {
      event.preventDefault();
      if (!user.name || !user.username) 
      return
      handleOnAddClick(user)
      setUser(initialFormstate)
    }}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm