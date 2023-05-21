import styled from "styled-components";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "../../routes/routes";
import { InitialSesion } from "./InitialSesion";

export const Private = () => {
  return (
    <Content>
      <NavBar />
      <ContainerInfo>
        <ContentHeader>
          <Header />
        </ContentHeader>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={PrivateRoute.initialSesion} />}
          />
          <Route
            path={PrivateRoute.initialSesion}
            element={<InitialSesion />}
          />
        </Routes>
      </ContainerInfo>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  display: flex;
  /* @media (max-width: 767px) {
    flex-direction: column;
    flex-flow: row wrap-reverse;
  } */
`;

const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  width: 100%;
  height: 4rem;
`;
