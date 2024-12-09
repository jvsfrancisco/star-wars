import Header from "../../components/Header";
import FlipCard from "../../components/FlipCard";
import { FaCaravan } from "react-icons/fa6";
import * as S from "./styled";
import useApi from "../../hooks/useApi";
import { generateRandomNumber } from "../../services/numberGenerator";

const Vehicles: React.FC = () => {
  let randomNumber = generateRandomNumber(39);
  const selectedNumbers: [Number] | any = [];
  const { data, loading, getInstanceById } = useApi();
  const handleGetFilm = async () => {
    try {
      while (selectedNumbers.includes(randomNumber)) {
        randomNumber = generateRandomNumber(39);
      }
      selectedNumbers.push(randomNumber);
      await getInstanceById("vehicles", randomNumber);
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
        <FlipCard type={"vehicle"} icon={<FaCaravan />} handleClick={handleGetFilm}>
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
                <h3>Max Atmosphering Speed:</h3> <span>{data?.max_atmosphering_speed}</span>
              </div>
              <div>
                <h3>Vehicle Class:</h3> <span>{data?.vehicle_class}</span>
              </div>
            </S.Container>
          )}
        </FlipCard>
      </S.Main>
    </>
  );
};

export default Vehicles;
