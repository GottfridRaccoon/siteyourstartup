import React from "react";
import "./BackgroundContent.scss"
import ContactForm from "../contact-form";

const BackgroundContent = () => {
	return (
		<div className="background-content-wrapper">
			<b className="background-content__text-mobile"><h1>Услуги по строительству
				и ремонту Ж/Д путей</h1></b>

			<div className="background-content__text">
				<b className="background-content__text-tablet"><h1>Услуги по строительству
					и ремонту железнодорожных путей</h1></b>

				<p className="background-content__text__p">Компания проводит строительные и ремонтные работы на территории более чем 20 субъектов Российской Федерации</p>
			</div>
			<ContactForm />
		</div>
	)
}
export default BackgroundContent