import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100%;
  border-bottom: 1px solid var(--lineColor);
`;

export const HeaderUP = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ContentText = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextNameResource = styled.div`
  display: flex;
  text-align: justify;
  h1 {
    font-size: 25px;
    color: var(--primaryColor);
  }
`;

export const Title = styled.div`
  width: 250px;
  display: flex;
  text-align: justify;
  h1 {
    font-size: 25px;
    color: var(--primaryColor);
  }
`;

export const TextName = styled.div`
  width: 80px;
  display: flex;
  text-align: justify;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  h1 {
    font-size: 25px;
    color: var(--primaryColor);
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  width: 150px;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
`;

export const Perfiles = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 0 0.3rem 0 0;
`;

export const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  transform: translateX(21%);
  &:last-child {
    transform: translateX(0);
  }
`;

export const AvataDrop = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  transform: translateX(21%);
  &:last-child {
    transform: translateX(0);
  }
`;

export const HeaderDOWN = styled.div`
  height: 10%;
  display: flex;
  align-items: flex-end;
`;

export const LineBreack = styled.a`
  color: #939393;
  background-image: linear-gradient(90deg, #5b5b5b, #5b5b5b, #5b5b5b);
  text-decoration: none;
  font-family: var(--font-Global);
  font-weight: 600;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  background-position: left bottom;
  &:hover {
    background-size: 100% 2px;
  }
`;

export const ContainerUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 0 0.5rem 0;
`;