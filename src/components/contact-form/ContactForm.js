import React from "react";
import "./ContactForm.scss"
const ContactForm = (props) => {
	return (
		<div className={`contact-form-wrapper ${props.class}`}>
			<h2 className="contact-form__text">Оставьте заявку
				на <a href="#">бесплатную</a> консультацию</h2>
			<form className="contact-form__form">
				<div className="wrap-wrap">
					<legend className="field-name ">Имя</legend>
					<input type="text" value="Михаил" className="contact-form__input input" ></input>
				</div>
				<div className="wrap-wrap">
					<legend className="field-name">Телефон</legend>
					<input type="text" value="8 (800) 535 35 35" className="contact-form__input input"></input>
				</div>
				<div className="wrap-wrap">
					<legend className="field-name">Почта</legend>
					<input type="text" value="company@mail.com" className="contact-form__input input"></input>
				</div>
				<button type="submit" className="submit orange-button button-contact-form"><b>Отправить</b></button>

			</form>
		</div>
	)
}
export default ContactForm