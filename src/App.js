import React, { useState, Fragment } from 'react'
import TaskTable from './tables/TaskTable'
import AddTaskForm from './forms/AddTaskForm'
import EditTaskForm from './forms/EditTaskForm'

const App = () => {
  const tasksData = []

  const [tasks, setTasks] = useState(tasksData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: ''}
  const [currentTask, setCurrentTask] = useState(initialFormState)

  const addTask = task => {
    task.id = tasks.length + 1
    setTasks([...tasks, task])
	}
	
	const editRow = task => {
    setEditing(true)
    setCurrentTask({ id: task.id, name: task.name, taskname: task.taskname })
  }

  const editTask = (id, updatedTask) => {
    setEditing(false)
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)))
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-large">
				{editing ? (
					<Fragment>
						<h2>Edit Task</h2>
						<EditTaskForm
							editing={editing}
							setEditing={setEditing}
							currentTask={currentTask}
							editTask={editTask}
						/>
					</Fragment>
				) : (
					<Fragment>
						<h2>Add New Task</h2>
						<AddTaskForm addTask={addTask} />
					</Fragment>
				)}
			</div>
			<div className="flex-large">
				<h2>View Tasks</h2>
				<TaskTable tasks={tasks} editRow={editRow} deleteTask={deleteTask} />
			</div>
		</div>
	)
}

export default App

