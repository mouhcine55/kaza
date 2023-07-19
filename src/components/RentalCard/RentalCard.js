import './RentalCard.scss';
import { Link } from "react-router-dom";
import{ Component } from "react";

export default class RentalCard extends Component {
	render() {

		return (
			<Link className="rentalcard" to={"/rental/" + this.props.id}>
					<div className="rentalcard_cover"></div>
					<img className="rentalcard_img" src={this.props.cover} alt=""></img>
					<h2 className="rentalcard_title">{this.props.title}</h2>
			</Link>
		);
	}
}
