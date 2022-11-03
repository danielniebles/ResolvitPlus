import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "wouter";

const StyledHeader = styled.header<{ showMenu: boolean; isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  align-items: center;
  z-index: 3;
  border-bottom: 1px solid #ffffff;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "rgba(0,0,0,0.5)" : "transparent"};
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    //backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(10px)" : "")};
  }
  .logo {
    margin-left: 1em;
  }
  .nav__menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: ${({ showMenu }) => (showMenu ? "0" : "-300px")};
    width: 100%;
    transition: 0.3s;
    backdrop-filter: blur(5px);
    .nav__list {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 20vh;
    }
    .nav__close {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
    .nav__link {
      position: relative;
      color: #ffffff;
    }
    .nav__link:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #ca1919;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    .nav__link:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  .nav__icon,
  .home__icon {
    color: #ffffff;
    font-size: 1.25rem;
    margin-right: 0.8rem;
    z-index: 10;
  }
  .nav__btns {
    margin-right: 1em;
  }
  @media screen and (min-width: 768px) {
    .nav__menu {
      top: 1rem;
      right: 1rem;
      width: fit-content;
      backdrop-filter: blur(0);
      .nav__list {
        display: flex;
        gap: 50px;
        flex-direction: row;
      }
    }
    .nav__icon {
      display: none;
    }
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [, pushLocation] = useLocation();

  useEffect(() => {
    const checkScrollOffset = () => {
      setIsScrolled(window.scrollY > 10);
      setShowMenu(false);
    };
    window.addEventListener("scroll", checkScrollOffset);

    return () => window.removeEventListener("scroll", checkScrollOffset);
  }, []);

  return (
    <StyledHeader showMenu={showMenu} isScrolled={isScrolled}>
      <nav>
        <div
          className="logo"
          onClick={() => {
            pushLocation("/");
          }}
        >
          <i className="uil uil-estate home__icon"></i>
          Resolvit +
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="#movies" className="nav__link">
                Trending
              </a>
            </li>
            <li>
              <a href="#movies" className="nav__link">
                Movies
              </a>
            </li>
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
