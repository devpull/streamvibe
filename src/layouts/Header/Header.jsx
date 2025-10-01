import Logo from '~/components/Logo';
import './Header.scss';
import classNames from 'classnames';
import Button from '~/components/Button';

const menuItems = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Movies & Shows',
		href: '/movies',
	},
	{
		label: 'Support',
		href: '/support',
	},
	{
		label: 'Subscription',
		href: '/subscription',
	},
];

const Header = (props) => {
	const { url } = props;

	return (
		<header className="header">
			<div className="header__inner container">
				<Logo loading="eager" className="header__logo" />
				<div className="header__menu">
					<ul className="header__menu-list">
						{menuItems.map(({ label, href }, index) => (
							<li className="header__menu-item" key={index}>
								<a
									className={classNames('header__menu-link', {
										'is-active': href === url,
									})}
									href={href}
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="header__actions">
					<Button
						className="header__button"
						label="Search"
						isLabelHidden
						mode="transparent"
						iconName="search"
					/>
					<Button
						className="header__button"
						label="Notification"
						isLabelHidden
						mode="transparent"
						iconName="notification"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
