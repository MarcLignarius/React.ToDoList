import React, { useState } from 'react';
import swal from 'sweetalert';

const AddTaskForm = props => {

  const handleOnAddClick = task => {
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
        props.addTask(task)
      } else {
        swal("User will not be added.", {
          icon: "info",
        });
      }
    })
  }

  const initialFormstate = { id: null, name: '', username: ''}
  const [task, setTask] = useState(initialFormstate)
  
  const handleInputChange = e => {
    const { name, value } = e.target
    setTask({...task, [name]: value })
  }
  
  return (
    <form onSubmit={event => {
      event.preventDefault();
      if (!task.name) 
      return
      handleOnAddClick(task)
      setTask(initialFormstate)
    }}>
      <label>Name</label>
      <input type="text" name="name" value={task.name} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddTaskForm