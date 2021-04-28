import styled from "styled-components";

const getSize = ({ size }) => (size === "large" ? "height: 380px;" : "");

export const MenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
  }

  ${getSize}
`;

export const BackgroudImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  transition: 0.85s ease-in-out;

  ${MenuItem}:hover & {
    transform: scale(1.2);
  }
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  transition: 0.85s ease-in-out;
  position: absolute;

  ${MenuItem}:hover & {
    opacity: 0.9;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
