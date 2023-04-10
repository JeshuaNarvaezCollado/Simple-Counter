import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//Build

const Home = (props) => {
	return (
		<div className="bD">
			<div className="LD">
				<i className="far fa-clock"></i>
			</div>
			<div className="LD">{props.thousands % 10}</div>
			<div className="LD">{props.hundreds % 10}</div>
			<div className="LD">{props.tens % 10}</div>
			<div className="LD">{props.unit % 10}</div>
		</div>
	);
};



//Numbers

Home.propTypes = {
	unit: PropTypes.number,
	tens: PropTypes.number,
	hundreds: PropTypes.number,
	thousands: PropTypes.number,
};




//Interval
let counter = 0;

setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter);

	counter++;
	ReactDOM.render(
		<Home unit={one} tens={two} hundreds={three} thousands={four} />,
		document.querySelector("#app")
	);
}, 1000);

export default Home;