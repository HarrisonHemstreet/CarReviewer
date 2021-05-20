import React from 'react';
import Header from "../components/Header";
import AddCar from "../components/AddCar";
import CarList from "../components/CarList";

const Home = () => {
	return (
		<div>
			<Header />
			<AddCar />
			<CarList />
		</div>
	)
}

export default Home;
