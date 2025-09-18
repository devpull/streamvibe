const Button = (props) => {
	const label = props.label ?? props.children ?? 'Default button';
	return <button type="button">{label}</button>;
};

export default Button;
