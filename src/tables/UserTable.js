import React from 'react';
import swal from 'sweetalert';

const UserTable = props => {

  const handleOnDeleteClick = id => {
    swal({
      title: "Are you sure?",
      text: "Click ok to delete user.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(
      (willDelete) => {
      if (willDelete) {
        swal("User has been deleted.", {
          icon: "success",
        });
        props.deleteUser(id)
      } else {
        swal("User has not been deleted.", {
          icon: "info",
        });
      }
    })
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => {props.editRow(user)}} className="button muted-button">Edit</button>
                <button onClick={() => handleOnDeleteClick(user.id)} className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>There are currently no users.</td>
          </tr>
        )}
      </tbody>
    </table>
  )  
}

export default UserTable