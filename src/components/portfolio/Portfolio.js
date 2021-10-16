import React from "react";
import portfolioImg from '../../images/portfolio.png'
import "./Portfolio.scss"


const Portfolio = () => {
	return (
		<div className="portfolio-wpapper ">

			<div className="portfolio__content-wrapper">
				<div className="portfolio-content ">
					<div className="portfolio-img__wrap" >
						<img src={portfolioImg} className="portfolio-content__img"></img>
					</div>

					<div className="portfolio-content__text">
						<h1 className="main-title portfolio-content__h1">Ремонт эстакад</h1>
						<p className="portfolio-content__p">Капитальный ремонт и еще че нибудь напишите а то слишком мало выходит, ремонт обуви</p>
						<h2 className="portfolio-conten__h2">Проделанные Работы:</h2>
						<div className="portfolio-content__list">
							<div>
								<div className="portfolio-content__li">
									Выкопали ямы (незнай зачем)
								</div>
								<div className="portfolio-content__li">
									Рельсы рельсы, шпалы шпалы
								</div>
							</div>
							<div>
								<div className="portfolio-content__li">
									Положили рельсы
								</div>
								<div className="portfolio-content__li">Ехал поезд запоздалый</div>
							</div>
						</div>
						<div className="portfolio-content__button-wrapper" >
							<button className="orange-button portfolio-content__button"><h3>Оставить заявку</h3></button>
						</div>

					</div>

				</div>


			</div>

		</div >)
}
export default Portfolio