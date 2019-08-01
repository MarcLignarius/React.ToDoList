import React, { useState, Fragment } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const usersData = []

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: ''}
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
	}
	
	const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const editUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-large">
				{editing ? (
					<Fragment>
						<h2>Edit user</h2>
						<EditUserForm
							editing={editing}
							setEditing={setEditing}
							currentUser={currentUser}
							editUser={editUser}
						/>
					</Fragment>
				) : (
					<Fragment>
						<h2>Add user</h2>
						<AddUserForm addUser={addUser} />
					</Fragment>
				)}
			</div>
			<div className="flex-large">
				<h2>View users</h2>
				<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
			</div>
		</div>
	)
}

export default App

