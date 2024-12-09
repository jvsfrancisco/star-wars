import Header from "../../components/Header";
import FlipCard from "../../components/FlipCard";
import { FaRocket } from "react-icons/fa6";
import * as S from "./styled";
import useApi from "../../hooks/useApi";
import { generateRandomNumber } from "../../services/numberGenerator";

const Starships: React.FC = () => {
  let randomNumber = generateRandomNumber(36);
  const selectedNumbers: [Number] | any = [];
  const { data, loading, getInstanceById } = useApi();
  const handleGetFilm = async () => {
    try {
      while (selectedNumbers.includes(randomNumber)) {
        randomNumber = generateRandomNumber(36);
      }
      selectedNumbers.push(randomNumber);
      await getInstanceById("starships", randomNumber);
    } catch (err) {
      if ((err as any).response.status === 404) {
        handleGetFilm();
      }
    }
  };
  console.log(data);

  return (
    <>
      <Header ishome={false} />
      <S.Main>
        <FlipCard type={"Starship"} icon={<FaRocket />} handleClick={handleGetFilm}>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <S.Container>
              <div>
                <h3>Name:</h3> <span>{data?.name}</span>
              </div>
              <div>
                <h3>Model:</h3> <span>{data?.model}</span>
              </div>
              <div>
                <h3>Manufacturer:</h3> <span>{data?.manufacturer}</span>
              </div>
              <div>
                <h3>Cost in Credits:</h3> <span>{data?.cost_in_credits}</span>
              </div>
              <div>
                <h3>Starship Class:</h3> <span>{data?.starship_class}</span>
              </div>
            </S.Container>
          )}
        </FlipCard>
      </S.Main>
    </>
  );
};

export default Starships;
