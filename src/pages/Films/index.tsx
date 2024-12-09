import Header from "../../components/Header";
import FlipCard from "../../components/FlipCard";
import { FaFilm } from "react-icons/fa6";
import * as S from "./styled";
import useApi from "../../hooks/useApi";
import { generateRandomNumber } from "../../services/numberGenerator";
import { GiDirectorChair } from "react-icons/gi";

const Films: React.FC = () => {
  let randomNumber = generateRandomNumber(6);
  const selectedNumbers: [Number] | any = [];
  const { data, loading, getInstanceById } = useApi();
  const handleGetFilm = async () => {
    try {
      while (selectedNumbers.includes(randomNumber)) {
        randomNumber = generateRandomNumber(6);
      }
      selectedNumbers.push(randomNumber);
      await getInstanceById("films", randomNumber);
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
        <FlipCard type={"Film"} icon={<FaFilm />} handleClick={handleGetFilm}>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <S.Container>
              <div>
                <h3>Titulo:</h3> <span>{data?.title}</span>
              </div>
              <div>
                <h3>Episodio:</h3> <span>{data?.episode_id}</span>
              </div>
              <div>
                <h3>Director:</h3> <span>{data?.director}</span>
              </div>
              <div>
                <h3>Produtor:</h3> <span>{data?.producer}</span>
              </div>
              <div>
                <h3>Data de lançamento:</h3> <span>{data?.release_date}</span>
              </div>
            </S.Container>
          )}
        </FlipCard>
      </S.Main>
    </>
  );
};

export default Films;
