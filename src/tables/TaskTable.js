import React from 'react';
import swal from 'sweetalert';

const TaskTable = props => {

  const handleOnDeleteClick = id => {
    swal({
      title: "Are you sure?",
      text: "Click ok to delete task.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(
      (willDelete) => {
      if (willDelete) {
        swal("Task has been deleted.", {
          icon: "success",
        });
        props.deleteTask(id)
      } else {
        swal("Task has not been deleted.", {
          icon: "info",
        });
      }
    })
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.length > 0 ? (
          props.tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>
                <button onClick={() => {props.editRow(task)}} className="button muted-button">Edit</button>
                <button onClick={() => handleOnDeleteClick(task.id)} className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>The list is currently empty.</td>
          </tr>
        )}
      </tbody>
    </table>
  )  
}

export default TaskTable