import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

const bodyColor = "#010606";
const firstColor = "#00bb77";
const firstAltColor = "#009955";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${bodyColor};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Wrapper = styled.div`
  color: #fff;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: ${firstColor};
    transition: 0.2s ease-in-out;
  }

  &.signUp {
    content: "";
    //position: relative;
    display: flex;
    justify-self: center;
    width: 20%;
    border-bottom: 4px solid ${firstColor};
    border-radius: 0.25rem;
    margin-top: 0.6rem;

    @media (max-width: 426px) {
      width: 30%;
    }
    @media (max-width: 322px) {
      width: 40%;
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideRoute = styled(Link)`
  border-radius: 50px;
  background: ${firstColor};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${bodyColor};
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${firstAltColor};
  }
`;
