import "./Rental.scss";
import { Component } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Erreur from "../Erreur/Erreur";
import data from "../../data/logements.json";
import RentalHost from "../../components/RentalHeader/RentalHost/RentalHost";
import RentalRatings from "../../components/RentalHeader/RentalRatings/RentalRatings";
import RentalTags from "../../components/RentalHeader/RentalTags/RentalTags";
import RentalTitle from "../../components/RentalHeader/RentalTitle/RentalTitle";
import { useParams } from "react-router-dom";

export default function Rental() {
	const rentalData = data;
	const {id} = useParams();
	const rental = rentalData.find((item) => item.id === id);

		if(rental === undefined){
			return <Erreur />
		}

		return (
			<div className="rental">
				<Carrousel pictures={rental.pictures}></Carrousel>
				<div className="rental_wrapper">
					<div className="rental_informations">
						<RentalTitle title={rental.title} location={rental.location} />
						<RentalTags tags={rental.tags} />
					</div>
					<div className="rental_host">
						<RentalRatings ratings={rental.rating} />
						<RentalHost host={rental.host} />
					</div>
				</div>
				<div className="rental_details">
					<Collapse title="Description" content={rental.description}></Collapse>
					<Collapse title="Équipements" content={rental.equipments}></Collapse>
				</div>
			</div>
		)
}

	
