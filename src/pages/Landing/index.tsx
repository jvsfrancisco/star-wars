import starWars from '../../assets/star-wars.png';
import arrow from '../../assets/arrow.svg';
import { Container } from './styled';
import Button from '../../components/Button';

const Landing: React.FC = () => {
  return (
    <Container>
      <img src={starWars} alt="Star Wars" />
      <Button variant="link" size="large" color="secondary" to="/home">
        Get Started
      </Button>
    </Container>
  );
}

export default Landing;