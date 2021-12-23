import React from 'react'
import Profile from './profile/Profile'

function App() {
  const name="khalil baklouti"
  const bio=" a tall man "
  const profession=" coach "
 const alertme=() => {alert("khalil baklouti")}
  return (
    <div>
  <Profile  n={name} b={bio} p={profession} alert={alertme} >
  <img src="/lilo.jpg"  alt=' '  style={{ heigth: 240, width: 320 }} />

</Profile>

  
    </div>
  )
}

export default App
