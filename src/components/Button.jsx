import React from 'react';

const Button = (props) => {
	return (
		<button
			className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
			type={props.type || 'button'}
			onClick={props.onClick}
			disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
