import React from 'react';
import './sobreMi.scss';

const SobreMi = () => {
	return (
		<div className="sobreMiMainCont spacer wave2">
			<div className="ver geom1"></div>
			<div className="ver geom2"></div>
			<div className="ver geom3"></div>
			<div className="titleCont">
				<h1>Hola, soy Amir Velasquez</h1>{' '}
				<span className="wobble-hor-bottom hand">&#9995;</span>
			</div>
			<div className="imageAndText">
				<div className="imageContainer">
					<img
						className="meImg img1"
						src="./yo/amir2.jpeg"
						alt="Amir profile"
						draggable="false"
					/>
				</div>
				<div>
					<p className="text">
						<i>
							“No deberías hacer las cosas de manera diferente solamente para que sean
							distintas. Necesitan ser mejores”. - Elon Musk
						</i>{' '}
						<br />
					</p>
					<p className="text">
						Un desarrollador <span style={{ color: '#FE5277' }}>Front end</span> listo
						para comerme al mundo, adentrandome en el{' '}
						<span style={{ color: '#Fe2012' }}>Back end</span>, buscando proyectos y
						empleos para ganar experiencia y afilar mis habilidades con nuevos retos que
						me ayuden a crecer de manera profesional, me considero una persona seria,
						enfocada y creativa.	
					</p>
					<p className="text">
						Me encantan los gatos, la pizza y el cafe, si tenes algun proyecto en mente,
						no dudes en{' '}
						<a style={{ color: '#FF863B' }} href="/contacto">
							contactarme!
						</a>
					</p>
				</div>
			</div>
			<div className="myLanguagesCont">
				<div className="title2">
					<h2>Mis lenguajes </h2>
					<span> &#128126;</span>
				</div>
				<div className="LangCont">
					<div className="frontEnd table">
						<h3>Front End</h3>
						<ul>
							<li>HTML</li>
							<li>Css</li>
							<li>Sass</li>
							<li>Bootstrap</li>
							<li>React</li>
							<li>Ejs</li>
							<li>JavaScript</li>
							<li>AJAX</li>
							<li>TypeScript</li>
						</ul>
					</div>
					<div className="backEnd table">
						<h3>Back End</h3>
						<ul>
							<li>Node.js</li>
							<li>Express</li>
							<li>MongoDB</li>
							<li>Mongoose</li>
						</ul>
					</div>
					<div className="spoken">
						<h3>Tambien hablo</h3>
						<ul>
							<li>Ingles - Intemedio</li>
							<li>Español - Nativo</li>
							<li>Git: Github - Intermedio</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SobreMi;
