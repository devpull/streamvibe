import '~/styles';
import { Head } from 'minista';
import Content from '~/layouts/Content';
import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';

export default function (props) {
	const { children, title } = props;

	return (
		<>
			<Head htmlAttributes={{ lang: 'en' }}>
				<title>StreamVibe | {title}</title>
				<script src="/src/main.js" type="module" />
			</Head>

			<Header />

			<Content>{children}</Content>

			<Footer />
		</>
	);
}
