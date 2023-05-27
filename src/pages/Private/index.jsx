import styled from "styled-components";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "../../routes/routes";
import { InitialSesion } from "./InitialSesion";
import { Actividades } from "./Actividades";
import { Contribuyente } from "./Contribuyentes";
import { Establecimiento } from "./Establecimientos";
import { Category } from "./Actividades/Category";
import { TasasAnuales } from "./Actividades/Category/TasasAnuales";
import { ViewEstablecimient } from "./Establecimientos/ViewEstablecimient";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllActivities } from "../../redux/States/Activity";
import { getAllCategories } from "../../redux/States/Category";
import { getAllRates } from "../../redux/States/Rate";
import { getAllTaxPayer } from "../../redux/States/TaxPayer";

export const Private = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllCategories());
    dispatch(getAllRates());
    dispatch(getAllTaxPayer());
  }, [dispatch]);

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
          <Route path={PrivateRoute.actividades} element={<Actividades />} />
          <Route path={PrivateRoute.categorias} element={<Category />} />
          <Route path={PrivateRoute.tasasAnuales} element={<TasasAnuales />} />
          <Route
            path={PrivateRoute.contribuyente}
            element={<Contribuyente />}
          />
          <Route
            path={PrivateRoute.establecimiento}
            element={<Establecimiento />}
          />
          <Route
            path={PrivateRoute.viewEstablecimiento}
            element={<ViewEstablecimient />}
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
