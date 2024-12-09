import Header from "../../components/Header";
import FlipCard from "../../components/FlipCard";
import { FaFilm } from "react-icons/fa6";
import * as S from "./styled";

const Films: React.FC = () => {
  return (
    <>
      <Header ishome={false} />
      <S.Main>
        <FlipCard type={"Film"} icon={<FaFilm />}>
          <h2>Films back</h2>
        </FlipCard>
      </S.Main>
    </>
  )
}

export default Films;