import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	function deleteContact(indexToDelete){
		console.log('se va a eliminar el contacto'+ indexToDelete)
		console.log(store.contacts)
		// store.contacts = []
		console.log(store.contacts.filter( (contacto,index)=> index != indexToDelete ))
	}

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title} </span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}


				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							>
							<div>
								<p>
									{item.name}
								</p>

								<p>
									{item.phone}
								</p>
								<p>
									{item.email}
								</p>
								<p>
									{item.id}
								</p>
								<p>
									{index}
								</p>
							</div>
							<button onClick={()=>actions.eliminarContacto(item.id)}>Eliminar contacto</button>
						</li>
					);
				})}	
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
