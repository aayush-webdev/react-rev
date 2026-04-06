import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user = "aayush sharma"
        userImg = "https://images.unsplash.com/photo-1708024587407-73445142b5a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        userBio = "hii i am aayush sharma and i am a web dev"
        
      />
      <Card user="sumit sharma"
      userImg="https://images.unsplash.com/photo-1756086807815-d8c4676197dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%"
      userBio="hi mera naam sumit hai aur aur "
      />
      <Card/>
      <Card/>

        </div>
  )
}

export default App
