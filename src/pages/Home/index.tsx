import Header from "../../components/Header";
import Card from "../../components/Card";
import * as S from "./styled";
import { FaFilm } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaDna } from "react-icons/fa6";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.Cards>
          <Card to="/films">
            <div className="tag">
              <FaFilm />
              <h2>Films</h2>
            </div>
          </Card>
          <Card to="/people">
            <div className="tag">
              <FaClipboardUser />
              <h2>People</h2>
            </div>
          </Card>
          <Card to="/people">
            <div className="tag">
              <FaEarthAmericas />
              <h2>Planets</h2>
            </div>
          </Card>
          <Card to="/species">
            <div className="tag">
              <FaDna />
              <h2>Species</h2>
            </div>
          </Card>
          <Card to="/starships">
            <div className="tag">
              <FaRocket />
              <h2>Starships</h2>
            </div>
          </Card>
          <Card to="/vehicles">
            <div className="tag">
              <FaCaravan />
              <h2>vehicles</h2>
            </div>
          </Card>
        </S.Cards>
      </S.Main>
    </>
  );
};

export default Home;
