import CustomerSection from './components/CustomerSection';
import Header from './components/Header';
import SellerAddsShoe from './components/SellerAddsShoe';
import { useState } from 'react';
import CartProvider from './components/context/CartProvider';
import CartModal from './components/CartModal';

function App() {
	const [shoeList, setShoeList] = useState([]);
	const [cartShow, setCartShow] = useState(false);
	const cartShowHandler = () => {
		setCartShow(!cartShow);
	};
	const cartHideHandler = () => {
		setCartShow(false);
	};

	const saveHandler = (shoe) => {
		setShoeList((prevShoe) => {
			return [...prevShoe, shoe];
		});
	};

	const clearHandler = () => {
		setShoeList([]);
	};

	const dataHandler = (shoe) => {
		setShoeList((prevShoes) => {
			const updatedShoes = prevShoes.map((prevShoe) => {
				if (prevShoe.id === shoe.id) {
					const updatedShoe = { ...prevShoe };

					if (shoe.large !== 0 && updatedShoe.large !== 0) {
						updatedShoe.large -= shoe.large;
					}
					if (shoe.medium !== 0 && updatedShoe.medium !== 0) {
						updatedShoe.medium -= shoe.medium;
					}
					if (shoe.small !== 0 && updatedShoe.small !== 0) {
						updatedShoe.small -= shoe.small;
					}

					return updatedShoe;
				}
				return prevShoe;
			});

			return updatedShoes;
		});
	};
	return (
		<CartProvider>
			{cartShow && <CartModal onConfirm={cartHideHandler} />}
			<Header onCartShow={cartShowHandler} />
			<div className="sellerCustomerContainer flex gap-16">
				<SellerAddsShoe onSaveData={saveHandler} />
				<CustomerSection
					shoes={shoeList}
					onChange={dataHandler}
					onClear={clearHandler}
				/>
			</div>
		</CartProvider>
	);
}

export default App;
