import CartContext from './cartContext';
import { useState } from 'react';

const CartProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);

	const addItemsHandler = (shoe) => {
		let shoeExists = false;

		setCartItems((prevShoes) => {
			console.log('previous shoes', prevShoes);
			let oldShoes = [...prevShoes];
			console.log(oldShoes);
			for (const key of oldShoes) {
				if (key.id === shoe.id) {
					console.log('key:', key.id, 'shoe:', shoe.id);
					// If the shoe is already present   increase quantity
					if (shoe.large !== 0) {
						key.large += shoe.large;
					}
					if (shoe.medium !== 0) {
						key.medium += shoe.medium;
					}
					if (shoe.small !== 0) {
						key.small += shoe.small;
					}
					shoeExists = true;
					break;
				}
			}

			//if item not present in itemlist adding item to cartItems
			if (
				!shoeExists &&
				(shoe.large !== 0 || shoe.medium !== 0 || shoe.small !== 0)
			) {
				oldShoes.push(shoe);
			}
			return oldShoes;
		});
	};
	const emptyItemsHandler = () => {
		setCartItems([]);
	};

	const cartContext = {
		items: cartItems,
		totalAmount: 0,
		addItems: addItemsHandler,
		removeItems: emptyItemsHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
