/* Images */
import logo from '../assets/logo.svg';

/* Styles */
import { Container, Title, Image, Link } from './styles';

export function Layout() {
    return (
        <Container>
            <Image src={logo} alt="logo" />
            <Title>
                Template for projects with <code>React.js</code>
            </Title>
            <Link
                href="https://github.com/victorshgo"
                target="_blank"
                rel="noopener noreferrer"
            >
                @victorshgo
            </Link>
        </Container>
    );
}
