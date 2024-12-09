import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { FaFilm } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaDna } from "react-icons/fa6";

interface HeaderProps {
  ishome?: boolean;
}

const Header: React.FC<HeaderProps> = ({ishome = true}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Container>
      <S.MenuIcon onClick={toggleMenu} $ishome={ishome}>
        <span />
        <span />
        <span />
      </S.MenuIcon>

      <Link className="Logo" to="/">
        <h1>Star Wars</h1>
      </Link>

      <S.Nav $isMenuOpen={isMenuOpen}  $ishome={ishome}>
        <Link to="/home">
          <FaHouse />
          <h2>Home</h2>
        </Link>
        <Link to="/films">
          <FaFilm />
          <h2>Films</h2>
        </Link>
        <Link to="/people">
          <FaClipboardUser />
          <h2>People</h2>
        </Link>
        <Link to="/planets">
          <FaEarthAmericas />
          <h2>Planets</h2>
        </Link>
        <Link to="/species">
          <FaDna />
          <h2>Species</h2>
        </Link>
        <Link to="/starships">
          <FaRocket />
          <h2>StarShips</h2>
        </Link>
        <Link to="/vehicles">
          <FaCaravan />
          <h2>vehicles</h2>
        </Link>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
