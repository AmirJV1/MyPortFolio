import React from 'react';
import './trabajos.scss';
const Trabajos = () => {
	return (
		<div className="workMainCont">
			<div className="spacer verWave2">
				<div className="workCont flex-col">
					<div className="textCont bounce-top ">
						<h1>Mis trabajos </h1>
						<span>&#128175;</span> <span> &#128076;</span>
					</div>
					<div className='callCont bounce-top '>
							<h2>Me falta un trabajo!</h2>
							<p>
								Y ese es el tuyo!, <a style={{textDecorationColor:"#15ff00"}} href="/contacto"><span style={{color:"#15ff00"}}>contactame!</span></a> para cotizar sin compromiso
							</p>
						</div>
					<div className="works">
						<div className="work">
							<a
								href="https://react-clock-timer-app.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./trabajoImgs/1.png"
									alt="reloj usando react"
									className="workImg"
								/>
							</a>
							<a
								href="https://react-clock-timer-app.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								<h2>Reloj web usando React</h2>
							</a>
						</div>
						<div className="work">
							<a
								href="https://game-app-t.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./trabajoImgs/2.png"
									alt="piedra papel tijeras usando react"
									className="workImg"
								/>
							</a>
							<a
								href="https://game-app-t.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								<h2>Piedras, papel o tijeras web usando React</h2>
							</a>
						</div>
						<div className="work">
							<a
								href="https://norris-aolx0z8zi-amirjv1.vercel.app"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./trabajoImgs/3.png"
									alt="Chistes de chuck norris "
									className="workImg"
								/>
							</a>
							<a
								href="https://norris-aolx0z8zi-amirjv1.vercel.app"
								target="_blank"
								rel="noreferrer"
							>
								<h2>HTML & CSS Chuck norris joke API - consumo de API</h2>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trabajos;
