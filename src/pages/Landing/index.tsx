import starWars from "../../assets/images/star-wars.png";
import { Container } from "./styled";
import Button from "../../components/Button";

const Landing: React.FC = () => {
  return (
    <Container>
      <img src={starWars} alt="Star Wars" />
      <Button variant="link" size="large" color="secondary" to="/home">
        <p>Get Started</p>
      </Button>
    </Container>
  );
};

export default Landing;
