import React from "react";
import Logo from '../../images/Логотип.png'

import "./Header.scss"
const Header = () => {
	return (
		<nav className="navigation-wrapper">
			<img src={Logo} alt="Logo" className="navigation-logo"></img>

			<div className="menu-wrapper">

				<ul className="menu__content">
					<li className="menu-item">Главная</li>
					<li className="menu-item">Портфолио</li>
					<li className="menu-item">О нас</li>
					<li className="menu-item">География</li>
					<li className="menu-item">Контакты</li>
				</ul>
				<div className="phone-wrapper">
					<div className="menu__phone">
						<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.55954 13.6018C9.59683 15.7225 11.3158 17.4336 13.4412 18.4613C13.5967 18.535 13.7687 18.5669 13.9403 18.5539C14.1119 18.5409 14.2771 18.4835 14.4198 18.3872L17.5492 16.3004C17.6877 16.2082 17.8469 16.1518 18.0126 16.1366C18.1782 16.1214 18.3451 16.1478 18.498 16.2133L24.3526 18.7224C24.5515 18.8069 24.7175 18.9537 24.8257 19.1408C24.9339 19.3278 24.9783 19.545 24.9524 19.7595C24.7673 21.2075 24.0608 22.5384 22.9652 23.503C21.8695 24.4676 20.4598 24.9998 19 24.9999C14.4913 24.9999 10.1673 23.2088 6.97919 20.0207C3.79107 16.8326 2 12.5086 2 7.99988C2.00008 6.5401 2.53224 5.13039 3.49685 4.03472C4.46146 2.93905 5.79237 2.23255 7.24037 2.0475C7.45489 2.02154 7.67204 2.066 7.85909 2.17418C8.04614 2.28236 8.19298 2.4484 8.27746 2.64728L10.7888 8.50702C10.8537 8.65858 10.8802 8.82386 10.8658 8.98813C10.8514 9.1524 10.7967 9.31057 10.7064 9.44855L8.62681 12.626C8.53216 12.769 8.47621 12.934 8.46442 13.105C8.45263 13.2761 8.4854 13.4472 8.55954 13.6018V13.6018Z" stroke="#4169C1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<h2 className="menu__h2">8(902)272-93-14</h2>
				</div>
				<span className="menu-burger">&#9776; </span>

			</div>


		</nav>
	)
}
export default Header