import { useContext } from 'react';
import shoesvg from '../assets/shoe.svg';
import CartContext from './context/cartContext';
import Button from './Button';
const Header = (props) => {
	const CartCtxt = useContext(CartContext);

	//display number of items quantity

	let numberOfShoes = 0;
	CartCtxt.items.forEach((shoe) => {
		numberOfShoes += shoe.large + shoe.medium + shoe.small;
		console.log('large', shoe.large);
		console.log('medium', shoe.medium);
		console.log('small', shoe.small);
		console.log('numberOfShoes', numberOfShoes);
	});
	return (
		<header className="bg-green-500 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold flex gap-4">
					<img
						className="w-8"
						src={shoesvg}
						alt="shoe-header-logo"
					/>
					Shoe Store
				</h1>
				<Button
					className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
					onClick={props.onCartShow}>
					Cart <span className="px-4">{numberOfShoes}</span>
				</Button>
			</div>
		</header>
	);
};

export default Header;
