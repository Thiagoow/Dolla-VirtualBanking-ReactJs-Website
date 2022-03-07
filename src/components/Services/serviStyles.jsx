import styled from "styled-components";

const bodyColor = "#f3f3fc";
const containerColor = "#010606";
const firstColor = "#00bb77";
const firstAltColor = "#009955";

export const ServicesContainer = styled.div`
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${containerColor};

  @media screen and (max-width: 1000px) {
    height: 950px;
  }

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const H1 = styled.h1`
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 1.8rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 3rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.25rem;
  }
`;

export const Card = styled.div`
  background: ${bodyColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    justify-self: center;
    width: 65%;

    //Space between every other card:
    &:not(:last-child) {
      margin-bottom: 0.6rem;
    }
  }

  @media screen and (max-width: 620px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;

export const Icon = styled.img`
  height: 168px;
  width: 168px;
  margin-bottom: 0.62rem;
`;

export const H2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.62rem;
`;

export const P = styled.p`
  font-size: 1.12rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
