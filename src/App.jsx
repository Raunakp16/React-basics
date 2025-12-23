import React from 'react'
import Nav from './Components/Nav'
import Card from './Components/Card'
const App = () => {
  return (
    <div>
      <Nav/>
       <div className='strip'>
      <Card user='Raunak' Age={21} img='https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D'/>
      <Card user='Sunny' Age={18} img='https://plus.unsplash.com/premium_photo-1669850858893-068d0a6bf144?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D'/>
      <Card user='Jayesh' Age={22} img='https://images.unsplash.com/photo-1619533394727-57d522857f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D'/>
</div>

    </div>
  )
}

export default App

