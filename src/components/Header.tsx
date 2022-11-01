import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header<{ showMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  align-items: center;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
  }
  .logo {
    margin-left: 1em;
  }
  .nav__menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: ${({ showMenu }) => (showMenu ? "0" : "-100%")};
    width: 100%;
    transition: 0.3s;
    backdrop-filter: blur(5px);
    .nav__close {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
  .nav__icon {
    color: #ffffff;
    font-size: 1.25rem;
  }
  .nav__btns {
    margin-right: 1em;
  }
  @media screen and (min-width: 768px) {
    .nav__menu {
      top: 0;
      right: 1rem;
      width: fit-content;
      backdrop-filter: blur(0);
      .nav__list {
        display: flex;
        gap: 10px;
      }
    }
    .nav__icon {
      display: none;
    }
  }
`;

const Header = () => {
  //TODO: Implement scroll effects and hover effects for buttons
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const checkScrollOffset = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", checkScrollOffset);

    return () => window.removeEventListener("scroll", checkScrollOffset);
  }, []);

  return (
    <StyledHeader showMenu={showMenu}>
      <nav>
        <div className="logo">Logo</div>
        <div className="nav__menu">
          <ul className="nav__list">
            <li>Home</li>
            <li>Movies</li>
            <li>Genres</li>
            <li>Coming Soon</li>
          </ul>
          <i
            onClick={() => setShowMenu(false)}
            className="uil uil-times nav__close nav__icon"
          ></i>
        </div>
        <div className="nav__btns">
          {!showMenu && (
            <i
              onClick={() => setShowMenu(true)}
              className="uil uil-apps nav__icon"
            ></i>
          )}
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
