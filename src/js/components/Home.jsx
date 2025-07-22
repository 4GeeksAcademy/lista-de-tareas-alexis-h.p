import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";




//create your first component


const Home = () => {

	const [input, setInput] = useState("")
	const [compra, setCompra] = useState([])

	const handleInput = (e) => {
		setInput(e.target.value)
		console.log(input)
	}


	const enviar = (e) => {
		if (e.key === "Enter") {
			setCompra([...compra, input])
			console.log(compra)
		}


	}

	return (
		<div className="container">
			<div className="mx-auto row border border-black border-1 justify-content-center" style={{ maxWidth: "800px" }}>

				<h1 className="col-6 text-center">Lista de la compra</h1>

				<form className="col-8 row justify-content-center ">
					<input
						className="form-control"
						placeholder="Producto para comprar"
						type="text"
						style={{ width: "680px",}}
						onKeyUp={(e)=>enviar(e)}
						value={input}
						onChange={(e)=>handleInput(e)}

					/>
				</form>
				<ul className="col-8 row justify-content-center mt-3">
					{compra.map((element, index) => (
						<li key={index}>{element}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;