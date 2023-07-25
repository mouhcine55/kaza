import "./RentalRatings.scss";
import { Component } from "react";
import { ReactComponent as Star } from "./Star.svg";

export default class RentalRatings extends Component {
	render() {
		
		const stars = new Array(5).fill(false)

		for(let i=0; i<this.props.ratings; i++){
			stars[i]=true;
		}

		return (
			<div className="stars">
				{stars.map((n,index) => (
				
					<i key={index} className={n  ? "fa-solid fa-star star orange" : "fa-solid fa-star star gris"}></i>
				))}
			</div>
		);
	}
}