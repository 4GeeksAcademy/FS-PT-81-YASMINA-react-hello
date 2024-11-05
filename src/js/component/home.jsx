import React from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./Card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<div className="row d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="container-fluid">
				<Footer />
			</div>


		</div >

	);
};

export default Home;
