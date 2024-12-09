import Header from "../../components/Header";
import FlipCard from "../../components/FlipCard";
import { FaClipboardUser } from "react-icons/fa6";
import * as S from "./styled";
import useApi from "../../hooks/useApi";
import { generateRandomNumber } from "../../services/numberGenerator";

const People: React.FC = () => {
  let randomNumber = generateRandomNumber(82);
  const selectedNumbers: [Number] | any = [];
  const { data, loading, getInstanceById } = useApi();
  const handleGetFilm = async () => {
    try {
      while (selectedNumbers.includes(randomNumber)) {
        randomNumber = generateRandomNumber(6);
      }
      selectedNumbers.push(randomNumber);
      await getInstanceById("people", randomNumber);
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
        <FlipCard type={"Person"} icon={<FaClipboardUser />} handleClick={handleGetFilm}>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <S.Container>
              <div>
                <h3>Name:</h3> <span>{data?.name}</span>
              </div>
              <div>
                <h3>Birth Year:</h3> <span>{data?.birth_year}</span>
              </div>
              <div>
                <h3>Height:</h3> <span>{data?.height}</span>
              </div>
              <div>
                <h3>Mass:</h3> <span>{data?.mass}</span>
              </div>
              <div>
                <h3>Gender:</h3> <span>{data?.gender}</span>
              </div>
            </S.Container>
          )}
        </FlipCard>
      </S.Main>
    </>
  );
};

export default People;
