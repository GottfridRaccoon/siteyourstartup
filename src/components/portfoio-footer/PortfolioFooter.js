import React from "react";
import './PortfolioFooter.scss'
const PortfolioFooter = () => {
	return (
		<div className="portfolio-switces">
			<svg width="30" height="62" viewBox="0 0 30 62" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M28 2L2 31L28 60" stroke="#4169C1" stroke-opacity="0.38" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="mystroke" />
			</svg>
			<div className="portfolio-switches__right">
				<svg width="30" height="62" viewBox="0 0 30 62" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 60L28 31L2 2" stroke-opacity="0.38" stroke="#4169C1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="mystroke" />
				</svg>


			</div>

		</div>
	)
}
export default PortfolioFooter