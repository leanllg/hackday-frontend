import React from "react"
import { Router } from "@reach/router"
import Login from "./service/login"
import Home from "./pages/home"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav
          path="/"
          links={[
            { url: "/login", component: "login" },
            { url: "/home", component: "home" }
          ]}
        />
        <Login path="/login" />
        <Home path="/home" />
      </Router>
    </div>
  )
}

export default App
