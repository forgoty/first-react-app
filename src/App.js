import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import './App.css'
import * as components from './components'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <components.Header />
        <components.Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <components.Profile addPost={props.addPost} profilePage={props.state.profilePage} updatePostText={props.updatePostText}/>} />
          <Route path="/dialogs" render={() => <components.Dialogs messagesPage={props.state.dialogsPage}/>} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
