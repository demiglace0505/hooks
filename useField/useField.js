import { useState } from 'react'

//useField hook
const useField = (name) => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const clearField = () => {
    setValue('')
  }

  return {
    name,
    value,
    onChange
  }
}

//App component
const App = (props) => {
  const {clearField: clearUsername, ...username} = useField('username')
  const {clearField: clearAddress, ...address} = useField('address')

  //event handler for clearing field
  const handleReset = () => {
  	clearUsername()
  	clearAddress()
  }
  
  return(
    <div>
	  <form>
	    name: <input {...username} />
		address: <input {...address} />
	  </form>
	  <div>
	  	{username.value} {address.value}
	  </div>
    </div>
  )
}

//Without hooks
const App = (props) => {
  const [username,setUsername] = useState('')
  const [address, setAddress] = useState('')

  return(
    <div>
	  <form>
		<input
	      type="text"
		  value={username}
		  onChange={(event)=>setUsername(event.target.value)}
		/>
		<input
		  type="text"
		  value={address}
		  onChange={(event)=>setAddress(event.target.value)}
		/>
	  </form>
	  <div>
	  	{username} {address}
	  </div>
	</div>
  )
}