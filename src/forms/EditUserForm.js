import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

const EditUserForm = props => {

  const handleOnEditClick= (id, user) => {
    swal({
      title: "Save?",
      text: "Click OK to save changes.",
      icon: "info",
      buttons: true,
      dangerMode: true,
    })
    .then(
      (willEdit) => {
      if (willEdit) {
        swal("Changes have been saved.", {
          icon: "success",
        });
        props.editUser(id, user)
      } else {
        swal("Changes have not been saved.");
      }
    })
  }

  const [user, setUser] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleOnEditClick(user.id, user)
    }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditUserForm