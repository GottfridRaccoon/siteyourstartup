import React from "react";
import "./App.scss"
import Header from "../header";
import Content from "../content";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			
			<Content />
		</div>
	)
}
export default App