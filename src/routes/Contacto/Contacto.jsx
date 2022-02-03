import React from 'react';
import './contacto.scss';
import { SocialIcon } from 'react-social-icons';
const Contacto = () => {
	return (
		<>
		<div className="contactMainCont flex-col spacer wavebkg1">
			<div className="contactTitle">
					<h1>Hablemos!</h1>
				</div>
				<div className="contactTableCont">
					<p>Sentite libre de mandarme un mensaje por aca:</p>
					<div className="iconTable">
						<SocialIcon
							target="_blank"
							url="https://twitter.com/NoSoyAmir"
							className="socialIcon"
						/>
						<SocialIcon
							target="_blank"
							url="https://github.com/AmirJV1"
							className="socialIcon"
						/>
						<SocialIcon
							target="_blank"
							url="https://www.linkedin.com/in/amirvelasquez1/"
							className="socialIcon"
						/>
						<SocialIcon
							target="_blank"
							url="https://www.facebook.com/amirjose.velasquez/"
							className="socialIcon"
						/>
						<SocialIcon
							target="_blank"
							url="https://api.whatsapp.com/send?phone=59178482543&text=saludos,%20me%20interesa%20hablar%20sobre....."
							className="socialIcon"
						/>
						<a
							href="https://www.fiverr.com/amirvelasquez"
							target="_blank"
							rel="noreferrer"
						>
							<img src="./fiverrIcon.svg" alt="fiverr" className="socialIcon" />
						</a>
					</div>
				</div>
				<i style={{ color: '#fff' }}>
					"Todas las grandes cosas comienzan con una simple conversación"
				</i>
			</div>
		</>
	);
};

export default Contacto;
