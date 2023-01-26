import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import BlogDetail from "./pages/BlogDetail";

function App() {
	return (
		<div className="App">
			<div className="brand">Website Dwi</div>
			<nav className="nav">
				<Link to="/" className="nav-item">
					Home
				</Link>
				<Link to="/profile" className="nav-item">
					Profile
				</Link>
				<Link to="/blog" className="nav-item">
					Blog
				</Link>
				<Link to="/contact" className="nav-item">
					Contact
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<BlogDetail />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
