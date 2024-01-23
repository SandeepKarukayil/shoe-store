import ReactDOM from 'react-dom';
import { useContext } from 'react';
import CartContext from './context/cartContext';
import Card from './Card';
import Button from './Button';

const BackDrop = (props) => {
	return <div onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
	const ctx = useContext(CartContext);
	console.log(ctx.items);
	//calculating amount of CArt items

	let totalAmount = 0;
	if (ctx.items.length !== 0) {
		ctx.items.forEach((shoe) => {
			const quantity = shoe.large + shoe.medium + shoe.small;
			console.log('large:', shoe.large);
			console.log('quantity:', quantity);
			console.log('quantity:', quantity);

			totalAmount += quantity * shoe.price;
			console.log(totalAmount);
		});
	}

	return (
		<Card>
			{ctx.items.map((shoe) => (
				<div
					key={shoe.id}
					className="border border-orange-400 flex  ">
					<div className="flex m-4">
						<span className="font-bold">Name : {shoe.name}</span>
						<p className="m-4"> Descripton :{shoe.description}</p>
						<p className="m-4"> Price :{shoe.price}</p>
						<span className="m-4">{shoe.large}L</span>
						<span className="m-4">{shoe.medium}M</span>
						<span className="m-4">{shoe.small}S</span>
					</div>
					<hr></hr>
				</div>
			))}
			<div>
				<p className="font-bold">Total Amount</p>
				<p>₹{totalAmount}</p>
			</div>
			<div className="flex justify-between">
				<Button onClick={props.onConfirm}>Close</Button>
				<Button onClick={ctx.removeItems}>Order</Button>
			</div>
		</Card>
	);
};

const CartModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onConfirm={props.onConfirm} />,
				document.getElementById('backdropRoot')
			)}
			{ReactDOM.createPortal(
				<Overlay onConfirm={props.onConfirm} />,
				document.getElementById('overlayRoot')
			)}
		</>
	);
};

export default CartModal;
