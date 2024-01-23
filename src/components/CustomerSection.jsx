import React, { useContext } from 'react';
import CartContext from './context/cartContext';
import Card from './Card';
import Button from './Button';

const CustomerSection = (props) => {
	const ctx = useContext(CartContext);

	const addLargeShoe = (shoe) => {
		props.shoes.forEach((element) => {
			if (element.id === shoe.id) {
				if (element.large > 0) {
					ctx.addItems({ ...shoe, large: 1, medium: 0, small: 0 });
				}
			}
		});
		props.onChange({ ...shoe, large: 1, medium: 0, small: 0 });
	};
	const addMediumShoe = (shoe) => {
		props.shoes.forEach((element) => {
			if (element.id === shoe.id) {
				if (element.medium > 0) {
					ctx.addItems({ ...shoe, large: 0, medium: 1, small: 0 });
				}
			}
		});
		props.onChange({ ...shoe, large: 0, medium: 1, small: 0 });
	};
	const addSmallShoe = (shoe) => {
		props.shoes.forEach((element) => {
			if (element.id === shoe.id) {
				if (element.small > 0) {
					ctx.addItems({ ...shoe, large: 0, medium: 0, small: 1 });
				}
			}
		});
		props.onChange({ ...shoe, large: 0, medium: 0, small: 1 });
	};
	return (
		<div className="buyShoeContainer m-2 p-2 bg-green-500 w-7/12 text-white shadow-lg rounded-lg">
			<Card>
				<h2 className="font-bold text-lg  ">Customer Section</h2>
				{props.shoes.map((shoe) => (
					<ul
						key={shoe.id}
						className="flex   gap-4 border my-4 border-white p-4 rounded-lg">
						<li className="flex gap-2">
							Name : {shoe.name}, Description :{shoe.description},
							Price : {shoe.price}
							<Button
								className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg"
								onClick={() => addSmallShoe(shoe)}>
								Small <span>{shoe.small}</span>
							</Button>
							<Button
								className="bg-orange-500 font-sm hover:bg-orange-600 text-white p-2 rounded-lg"
								onClick={() => addMediumShoe(shoe)}>
								Medium <span>{shoe.medium}</span>
							</Button>
							<Button
								className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg"
								onClick={() => addLargeShoe(shoe)}>
								Large <span>{shoe.large}</span>
							</Button>
						</li>
						<br />
					</ul>
				))}
				<div className="mt-6">
					<Button onClick={props.onClear}>Clear</Button>
				</div>
			</Card>
		</div>
	);
};

export default CustomerSection;
