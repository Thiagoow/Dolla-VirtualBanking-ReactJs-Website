import styled from "styled-components";
import { Link } from "react-scroll";

const containerColor = "#010606";
const firstColor = "#00bb77";
const firstAltColor = "#009955";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ btnPrimary }) => (btnPrimary ? "#00bb77" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ btnDarkTxt }) => (btnDarkTxt ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ btnPrimary }) => (btnPrimary ? "#009955" : "#fff")};
    background: ${({ btnDarkTxtHover }) =>
      btnDarkTxtHover ? "#fff" : "#00bb77"};
    color: ${({ btnDarkTxtHover }) => (btnDarkTxtHover ? "#010606" : "#fff")};
  }
`;
