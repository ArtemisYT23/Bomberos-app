import styled from "styled-components";

export const ContainerCell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonEdit = styled.button`
  margin: 0.5rem;
  border: none;
  width: 110px;
  height: 35px;
  border-radius: 13px;
  cursor: pointer;
  color: #fff;
  background: #fda6a6;
`;

export const ButtonDelete = styled.button`
  margin: 0.5rem;
  border: none;
  width: 110px;
  height: 35px;
  border-radius: 13px;
  cursor: pointer;
  color: #fff;
  background: #d40101;
`;

export const ContainerTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ContainerOptions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const Table = styled.div`
  width: 70%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerNew = styled.div`
  width: 30%;
  height: 100%;
`;

export const ContainerData = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerHeaderOptions = styled.div`
    width: 30%;
   
  div {
    width: 100%;
  }
`;
