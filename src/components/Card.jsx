const Card = (props) => {
	return (
		<div className="addShoeContainer m-2 p-2 bg-green-500  text-white   rounded-lg">
			{props.children}
		</div>
	);
};

export default Card;
