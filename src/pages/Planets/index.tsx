import Header from "../../components/Header";
import FlipCard from "../../components/FlipCard";
import { FaEarthAmericas } from "react-icons/fa6";
import * as S from "./styled";
import useApi from "../../hooks/useApi";
import { generateRandomNumber } from "../../services/numberGenerator";

const Planets: React.FC = () => {
  let randomNumber = generateRandomNumber(60);
  const selectedNumbers: [Number] | any = [];
  const { data, loading, getInstanceById } = useApi();
  const handleGetFilm = async () => {
    try {
      while (selectedNumbers.includes(randomNumber)) {
        randomNumber = generateRandomNumber(60);
      }
      selectedNumbers.push(randomNumber);
      await getInstanceById("planets", randomNumber);
    } catch (err) {
      if ((err as any).response.status === 404) {
        handleGetFilm();
      }
    }
  };

  return (
    <>
      <Header ishome={false} />
      <S.Main>
        <FlipCard type={"Person"} icon={<FaEarthAmericas />} handleClick={handleGetFilm}>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <S.Container>
              <div>
                <h3>Name:</h3> <span>{data?.name}</span>
              </div>
              <div>
                <h3>Terrain:</h3> <span>{data?.terrain}</span>
              </div>
              <div>
                <h3>Population:</h3> <span>{data?.population}</span>
              </div>
              <div>
                <h3>Gravity:</h3> <span>{data?.gravity}</span>
              </div>
              <div>
                <h3>Climate:</h3> <span>{data?.climate}</span>
              </div>
            </S.Container>
          )}
        </FlipCard>
      </S.Main>
    </>
  );
};

export default Planets;
