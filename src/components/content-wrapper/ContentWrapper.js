import React from 'react'
import './ContentWrapper.scss'

const ContentWrapper = (props) => {
	return (
		<div className={`content-wrapper ${props.classWrapper} `}>
			<span className={props.bg}>
				<h1 className={`main-title ${props.center} `}> {props.title}</h1>
				<div className={`content-wrapper__blue ${props.blueclass} `}>
					{props.children}
				</div>
				<div>

					{props.footer}
				</div>
			</span>
		</div>
	)
}
export default ContentWrapper