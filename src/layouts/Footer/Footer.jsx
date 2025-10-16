import Socials from '~/components/Socials';
import './Footer.scss';

const menuItems = [
	{
		title: 'Home',
		links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
	},
	{
		title: 'Movies',
		links: ['Genres', 'Trending', 'New Releases', 'Popular'],
	},
	{
		title: 'Popular',
		links: ['Genres', 'Trending', 'New Releases', 'Popular'],
	},
	{
		title: 'Support',
		links: ['Contact Us'],
	},
	{
		title: 'Subscription',
		links: ['Plan', 'Features'],
	},
	{
		title: 'Connect With Us',
		socialLinks: [
			{
				label: 'Facebook',
				iconName: 'facebook',
			},
			{
				label: 'Twitter',
				iconName: 'twitter',
			},
			{
				label: 'LinkedIn',
				iconName: 'linked-in',
			},
		],
	},
];

const extraLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy'];

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__inner container">
				<nav className="footer__menu">
					{menuItems.map(({ title, links, socialLinks }, index) => (
						<div className="footer__menu-column" key={index}>
							<a
								href={`/${title === 'Home' ? '' : title.toLowerCase()}`}
								className="footer__menu-title h6"
							>
								{title}
							</a>
							{links?.length > 0 && (
								<ul className="footer__menu-links">
									{links.map((label, index) => (
										<li key={index} className="footer__menu-item">
											<a href="/" className="footer__menu-link">
												{label}
											</a>
										</li>
									))}
								</ul>
							)}
							{socialLinks?.length > 0 && (
								<Socials className="footer__soc1als" links={socialLinks} />
							)}
						</div>
					))}
				</nav>
				<div className="footer__extra">
					<p className="footer__copyright">
						@<time dateTime="2023">2023</time> streamvibe, All Rights Reserved
					</p>
					<div className="footer__extra-links">
						{extraLinks.map((label, index) => (
							<a href="/" className="footer__extra-link" key={index}>
								{label}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
