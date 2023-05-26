import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 25px;
    color: red;
    margin: 0 0 1rem 0;
    text-align: center;
  }
`;

export const ButtonSubmit = styled.button`
  width: 300px;
  height: 35px;
  background-color: var(--primaryColor);
  color: #fff;
  border-radius: 13px;
  border: none;
  font-size: 18px;
  margin: 0 0 1rem 0;

  &:hover {
    background-color: #cf6a6a;
    cursor: pointer;
  }
`;

export const ButtonCancel = styled.div`
  width: 300px;
  height: 35px;
  border: 1px solid var(--primaryColor);
  color: var(--primaryColor);
  border-radius: 13px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #cf6a6a;
    cursor: pointer;
    color: #fff;
    border: none;
  }
`;

export const ButtonDelete = styled.button`
  color: #fff;
  text-decoration: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  width: 300px;
  height: 35px;
  margin: 0 0 1rem 0;
  background: var(--primaryColor);
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    background-color: #e26c6c94;
    border: 1px solid #e26c6c94;
    color: #fff;
  }
`;

export const ContaiderButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleModal = styled.span`
  color: var(--primaryColor);
  font-size: 1.4rem;
  padding: 0 0 0.5rem 0;
  font-weight: bold;
`;

export const IconAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlertDelete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.1rem;
  border: 2px solid var(--primaryColor);
  color: var(--primaryColor);
  padding: 0.3rem;
  margin: 0.2rem 0 1rem 0;
`;

export const AcepDelete = styled.div`
  margin: 0.5rem;
  padding: 0.2rem;
  width: 40%;
  border-radius: 0.5rem;

  background-color: var(--primaryColor);
  color: white;
  cursor: pointer;
`;
