import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./css/body.css"
import Blogs from "./Pages/blogs"
import NewBlog from "./Pages/Blog/new"
// import Layout from "./Pages/Components/Layout"
// import AuthLayout from "./Pages/Components/AuthLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import BlogID from "./Pages/Blog/id"
import Profile from "./Pages/profile"
import Collection from './Pages/collections'
import NewCollection from './Pages/Collections/new'
import CollectionID from "./Pages/Collections/id"

const App = () => {
	return (
		<div>
            
			
            <BrowserRouter>
                    <Routes>
                        {/* index routes */}
                        <Route path="/" exact element={ <Blogs />  } />                        
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/register" exact element={<Register />} />
                        <Route path="/profile/:id" exact element={<Profile />} />
                        {/* collections routes */}
                        <Route path="/collections" exact element={<Collection />} />
                        <Route path="/collections/new" exact element={<NewCollection />} />
                        <Route path="/collections/:id" exact element={<CollectionID />} />
                        {/* blog routes */}
                        <Route path="/collections/:cid/blog/:bid" exact element={<BlogID />} />
                        <Route path="/collections/:cid/blog/new" exact element={<NewBlog />} />
                        {/* Routes to add:
                            1) update routes
                            2) delete routes
                                - make sure all instances of _id are gone
                            3) liking func's
                            4) searching?
                            5) Follow users
                            6) Styling fixes
                            
                        */}
                    </Routes>
                
            </BrowserRouter>
		</div>
	)
}

export default App