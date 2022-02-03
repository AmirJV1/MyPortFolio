import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Component import
import SobreMi from './routes/SobreMi/SobreMi';
import Contacto from './routes/Contacto/Contacto';
import Trabajos from './routes/Trabajos/Trabajos';
import NavBar from './Components/NavBar/NavBar';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
    <NavBar/>
			<Routes>
				<Route path="/" element={<SobreMi />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/trabajos" element={<Trabajos />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
