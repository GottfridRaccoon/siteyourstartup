import React from "react";
import "./Content.scss"
import BackgroundContent from "../background-content";
import GeoInformation from "../geo-information";
import Portfolio from "../portfolio";
import Advantage from "../advantage";
import ContentWrapper from "../content-wrapper";
import CompanyLicensie from "../company-licensie";
import PortfolioFooter from "../portfoio-footer";
import ContactsFooter from "../contacts-footer/ContactsFooter";
import Comment from "../comment"
import Footer from "../footer";

const Content = () => {
	return (
		<>
			<BackgroundContent class="contact-form-wrapper__background" />
			<div className="geo-information-root">
				<GeoInformation />
			</div>
			<ContentWrapper title="Наше портфолио"
				center="text-center"
				classWrapper="content-padding"
				blueclass="content-wrapper__p30 m700px"
				footer={<PortfolioFooter />}>
				<Portfolio />
			</ContentWrapper >

			<Advantage />
			<ContentWrapper title="О нашей компании" center="left__h1"
				classWrapper="content-padding "
				blueclass="content-wrapper__p30  m500px"
				footer={<div className="footer-relative">
					<div className="footer-hidden">
						<div className="content-footer">
						</div>
					</div>
				</div>}>
				<CompanyLicensie />
			</ContentWrapper >
			<div
				blueclass="content-wrapper__p12"
				className="content-wrapper__contacts">
				<div >
					<ContentWrapper title="">
						<ContactsFooter />
					</ContentWrapper>

					<Comment />
					<Footer />
				</div>

			</div>





		</>
	)
}
export default Content;