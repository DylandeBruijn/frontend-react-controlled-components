import React from "react";
import "./styles/App.scss";

function App() {
	const [form, setForm] = React.useState({
		name: "",
		age: "",
		found: "",
		comment: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setForm({
			...form,
			[e.target.name]: value,
		});
	};

	const submitForm = (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<main>
			<form onSubmit={submitForm}>
				<fieldset>
					<legend>Gegevens</legend>
					<label htmlFor="name">
						Naam:
						<input
							type="text"
							name="name"
							id="name"
							onChange={handleChange}
							value={form.name}
						/>
					</label>
					<label htmlFor="age">
						Leeftijd:
						<input
							type="number"
							name="age"
							id="age"
							onChange={handleChange}
							value={form.age}
						/>
					</label>
				</fieldset>
				<fieldset>
					<legend>Jouw review</legend>
					<label htmlFor="found">
						Hoe heb je dit recept gevonden?
						<select
							name="found"
							id="found"
							onChange={handleChange}
							value={form.found}
						>
							<option value="Google">Google</option>
							<option value="Vriend">Vriend</option>
							<option value="Advertentie">Advertentie</option>
							<option value="Anders">Anders</option>
						</select>
					</label>
					<label htmlFor="comment">
						Opmerkingen
						<textarea
							name="comment"
							id="comment"
							rows="5"
							onChange={handleChange}
							value={form.comment}
						></textarea>
					</label>
					<button type="submit">Versturen</button>
				</fieldset>
			</form>
		</main>
	);
}

export default App;
