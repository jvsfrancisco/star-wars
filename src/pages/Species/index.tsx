import Header from "../../components/Header";
import FlipCard from "../../components/FlipCard";
import { FaDna } from "react-icons/fa6";
import * as S from "./styled";
import useApi from "../../hooks/useApi";
import { generateRandomNumber } from "../../services/numberGenerator";

const Species: React.FC = () => {
  let randomNumber = generateRandomNumber(37);
  const selectedNumbers: [Number] | any = [];
  const { data, loading, getInstanceById } = useApi();
  const handleGetFilm = async () => {
    try {
      while (selectedNumbers.includes(randomNumber)) {
        randomNumber = generateRandomNumber(37);
      }
      selectedNumbers.push(randomNumber);
      await getInstanceById("species", randomNumber);
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
        <FlipCard type={"Person"} icon={<FaDna />} handleClick={handleGetFilm}>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <S.Container>
              <div>
                <h3>Name:</h3> <span>{data?.name}</span>
              </div>
              <div>
                <h3>Classification:</h3> <span>{data?.classification}</span>
              </div>
              <div>
                <h3>Designation:</h3> <span>{data?.designation}</span>
              </div>
              <div>
                <h3>Skin Colors:</h3> <span>{data?.skin_colors}</span>
              </div>
              <div>
                <h3>Average Lifespan:</h3> <span>{data?.average_lifespan}</span>
              </div>
            </S.Container>
          )}
        </FlipCard>
      </S.Main>
    </>
  );
};

export default Species;
