// 1. importar usecontext
import React, { useContext } from "react";
// 2. importar el contexto
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";



export const Home = () => {
	
	// 3. hacer destructuring de store o de actions
	const { store, actions } = useContext(Context)
	console.log('estoy en home')
	console.log(store.perro)

	function changeMessage(){
		console.log('changeMessage')
	}
	return(
		<div className="text-center mt-5">
			<h1>Hello Rigo! 123</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
			{store.perro}
			<p>
				<button onClick={actions.cambiarMensaje}>cambiar mensaje</button>
			</p>
		</div>
	);
	
}
