import { useState } from 'react';
import Card from './Card';
import Button from './Button';

const SellerAddsShoe = (props) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(1);
	const [small, setSmall] = useState(1);
	const [medium, setMedium] = useState(1);
	const [large, setLarge] = useState(1);

	const setNameHandler = (event) => {
		setName(event.target.value);
	};
	const setDescriptionHandler = (event) => {
		setDescription(event.target.value);
	};
	const setPriceHandler = (event) => {
		setPrice(event.target.value);
	};
	const setSmallHandler = (event) => {
		setSmall(event.target.value);
	};
	const setMediumHandler = (event) => {
		setMedium(event.target.value);
	};
	const setLargeHandler = (event) => {
		setLarge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const obj = {
			id: Math.random().toString(),
			name: name,
			description: description,
			price: +price,
			large: +large,
			medium: +medium,
			small: +small,
		};

		props.onSaveData(obj);

		setName('');
		setDescription('');
		setPrice(1);
		setSmall(1);
		setMedium(1);
		setLarge(1);
	};

	return (
		<>
			<Card>
				<h2 className="font-bold text-lg ">Seller Section</h2>

				<form onSubmit={submitHandler}>
					<div className="nameContainer m-2 p-2">
						<label htmlFor="shoeName">Shoe Name :</label>
						<input
							required
							type="text"
							name="shoeName"
							id="shoeName"
							className=" text-black"
							onChange={setNameHandler}
							value={name}
						/>
					</div>
					<div className="descriptionContainer  m-2 p-2">
						<label htmlFor="description"> Description :</label>
						<input
							required
							type="text"
							name="description"
							id="description"
							className=" text-black"
							onChange={setDescriptionHandler}
							value={description}
						/>
					</div>

					<div className="priceContainer  m-2 p-2">
						<label htmlFor="price"> Price :</label>
						<input
							className="ml-12  text-black"
							type="number"
							name="price"
							id="price"
							onChange={setPriceHandler}
							value={price}
						/>
					</div>

					<div className="quantityContainer m-2 p-2 flex gap-4 ">
						<p>Quantity Available :</p>
						<label htmlFor="s">S </label>
						<input
							className="w-12  text-black"
							min="1"
							max="1000"
							type="number"
							name="s"
							id="s"
							onChange={setSmallHandler}
							value={small}
						/>
						<label htmlFor="m">M </label>
						<input
							type="number"
							min="1"
							max="1000"
							className="w-12  text-black  "
							name="m"
							id="m"
							onChange={setMediumHandler}
							value={medium}
						/>
						<label htmlFor="l">L </label>
						<input
							type="number"
							min="1"
							max="1000"
							className="w-12 text-black"
							name="l"
							id="l"
							onChange={setLargeHandler}
							value={large}
						/>
					</div>
					<div className="button flex justify-start mx-12">
						<Button type="submit">Add Shoes</Button>
					</div>
				</form>
			</Card>
		</>
	);
};

export default SellerAddsShoe;
