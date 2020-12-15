## useField - Form Input Field Control

```
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
```

#### Features

- To simplify form fields state management.
- Reusable for other input fields
- Includes a **clearField()** method for clearing specific input field

#### Usage:

```
const App = (props) => {
  const {clearField: clearUsername, ...username} = useField('username')
  const {clearField: clearAddress, ...address} = useField('address')
  
  return(
    <div>
	  <form>
	    name: <input value={username.value} onChange={username.onChange} />
		address: <input value={address.value} onChange={address.onChange} />
	  </form>
	  <div>
	  	{username.value} {address.value}
	  </div>
    </div>
  )
}
```

#### Further simplified usage (using spread attributes):

```
const App = (props) => {
  const {clearField: clearUsername, ...username} = useField('username')
  const {clearField: clearAddress, ...address} = useField('address')
  
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
```

#### Using clearField

```
const handleReset = () => {
  clearUsername()
  clearAddress()
}
```



#### Without useField hooks:

```
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
```

#### 