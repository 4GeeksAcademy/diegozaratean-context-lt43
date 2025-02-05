const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST 1",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
			],
			contacts: [
				{
					name: "FIRST CONTACT",
					phone: "123"
				},
				{
					name: "SECOND CONTACT",
					phone: "456"
				}
			],
			perro: 'kyra',
			message: 'inicial'
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			eliminarContacto: (indexToDelete) => {
				console.log('se va a eliminar el contacto desde flux'+ indexToDelete)

				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/meliodas/contacts/" + indexToDelete, requestOptions)
					.then((response) => response.text())
					.then((result) => {
						console.log(result)
						fetch('https://playground.4geeks.com/contact/agendas/meliodas/contacts')
						.then( (response)=> response.json() )
						.then( (data)=> setStore({ contacts: data.contacts }) )

					})
				// const store = getStore();
				// setStore({ contacts: store.contacts.filter( (contacto,index)=> index != indexToDelete ) });

			},
			cambiarMensaje: () => {
				console.log('cambiarMensaje desde flux ')
				// message = 'actualizado'
				setStore({ message: 'actualizado' });
				setStore({ perro: 'ligth' });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('estoy haciendo algo')
				fetch('https://playground.4geeks.com/contact/agendas/meliodas/contacts')
				.then( (response)=> response.json() )
				.then( (data)=> setStore({ contacts: data.contacts }) )

				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
