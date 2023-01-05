import React, {useEffect} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Single from "./pages/Single"
import { useAppContext } from "./context"

export default function App() {
  const { fecthPosts}= useAppContext()
  useEffect (() => {
    fecthPosts();
  },[])
    return(
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/post/:title" element={ <Single/>}/>
            <Route />
          </Routes>
        </Layout>
      </Router>
    )
}