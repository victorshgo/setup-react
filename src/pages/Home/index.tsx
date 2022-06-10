/* Layout */
import Layout from "layout";

/* Images */
import logo from "assets/images/logo.svg";

/* Styles */
import { Title, Image, Link } from "./styles";

const Home: React.FC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
