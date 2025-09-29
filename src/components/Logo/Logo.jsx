import classNames from 'classnames';
import './Logo.scss';

const Logo = (props) => {
	const title = 'Home';
	const { loading = 'lazy', className } = props;
	return (
		<a
			className={classNames(className, 'logo')}
			href="/"
			title={title}
			aria-label={title}
		>
			<img
				className="logo__image"
				src="/logo.svg"
				alt=""
				width={199}
				height={60}
				loading={loading}
			/>
		</a>
	);
};

export default Logo;
