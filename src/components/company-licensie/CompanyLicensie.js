import React from "react";
import "./CompanyLicensie.scss"
import lic from "../../images/lic.png"
import licBack from "../../images/licb.png"
const CompanyLicensie = () => {
	return (
		<div className="company-licensie-wrapper">
			<h1 className="main-title  company-licensie__h1">Компания ООО ”Название”</h1>
			<div className="company-licensie__bg">
				<p className="p__white content-licensie__p">
					Оказывает широкий спектр услуг по строительству и ремонту железнодорожных путей,
					Ремонт железнодорожных тупиков, стрелочных переводов, переездов. Опытные сотрудники,
					наличие необходимого оборудования позволяет в кратчайшие сроки выполнить работы любой сложности качественно
					и в кратчайшие сроки.
					Гибкая ценовая политика, наличие СРО. Подбор материалов от новых до Б/У от партнёров.
				</p>
				<div className="company-licensie__image">
					<img src={lic} alt="Licensie" className="company-licensie__img"></img>
					<img src={licBack} alt="Licensie"></img>
				</div>
			</div>
		</div>

	)
}
export default CompanyLicensie