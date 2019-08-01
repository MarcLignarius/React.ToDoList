import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

const EditTaskForm = props => {

  const handleOnEditClick= (id, task) => {
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
        props.editTask(id, task)
      } else {
        swal("Changes have not been saved.");
      }
    })
  }

  const [task, setTask] = useState(props.currentTask)

  useEffect(
    () => {
      setTask(props.currentTask)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setTask({ ...task, [name]: value })
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleOnEditClick(task.id, task)
    }}
    >
      <label>Name</label>
      <input type="text" name="name" value={task.name} onChange={handleInputChange} />
      <button>Update task</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditTaskForm