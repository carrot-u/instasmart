import React from 'react';
import logo from '../../images/carrot_2.png';

const PageBanner = (props) => {
	return (
		<div className="banner" >
			<div className="overlay">
				<div className="page-title">
					<img src={logo} alt="carrot icon" className="banner-image" />
					<p className="banner-text"><i>Questions</i></p>
				</div>
			</div>
			NAVBAR - TODO
		</div>
	);
}

export default PageBanner;