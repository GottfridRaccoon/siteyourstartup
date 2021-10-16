import React from "react";
import './Comment.scss'
const Comment = () => {
	return (
		<div className="	comment-relative">
			<div className="absolute-wrap comment-wrapper">
				<div className="hideover">

					<h1 className="main-title comment-wrapper__h1">Остались вопросы?</h1>
					<form>
						<div className= "contact___fields">
							<legend className="field-name ">Имя</legend>
							<input type="text" className="input comment__input" value="Михаил"></input>
							<legend className="field-name ">Телефон</legend>
							<input type="text" className="input comment__input" value="8 (800) 535 35 35"></input>
							<legend className="field-name ">Почта</legend>
							<input type="text" className="input comment__input" value="company@mail.com"></input>
						</div>
						<div>
							<legend className="field-name ">Комментарий</legend>
							<textarea className="comment__textarea">Напишите ваш вопрос...</textarea>
							<button type="submit" className="submit orange-button"><b>Отправить</b></button>

							<div class="comment__agreement">

								<div class="checkbox">
									<input id="check" name="check" type="checkbox" />
									<label for="check"></label>
								</div>
								<p>Даю свое согласие
									<a>с политикой конфиденциальности</a></p>
							</div>
						</div>

					</form>

				</div>
			</div>
		</div >)
}
export default Comment