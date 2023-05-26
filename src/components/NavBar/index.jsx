import { useState, useEffect } from "react";
import {
  NavBarContainer,
  NavLinkContainer,
  LogoContainer,
  LogoContainerIcon,
  NavLinkName,
} from "../../styles/NavBar";
import { PrivateRoute } from "../../routes/routes";
import NavBarIcon from "../../../assets/icons/NavBarIcon";
import LogoBomberos from "../../../assets/img/logo-bomberos.png";
import Bomberos from "../../../assets/img/bomberos.png";

export const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

  return (
    <NavBarContainer isActive={isActive}>
      {!isActive ? (
        <LogoContainerIcon logo={LogoBomberos} onClick={() => setIsActive(!isActive)} />
      ) : (
        <LogoContainer logo={Bomberos} onClick={() => setIsActive(!isActive)} />
      )}
      
        <NavLinkContainer
          to={`${PrivateRoute.actividades}`}
        >
          <NavBarIcon name="managment" configData={'#fc0000'}/>
          {isActive ? <NavLinkName>Actividades</NavLinkName> : <></>}
        </NavLinkContainer>

        <NavLinkContainer
          to={`${PrivateRoute.contribuyente}`}
        >
          <NavBarIcon name="managment" configData={'#fc0000'}/>
          {isActive ? <NavLinkName>Contribuyentes</NavLinkName> : <></>}
        </NavLinkContainer>
      
        <NavLinkContainer
          to={`${PrivateRoute.establecimiento}`}
        >
          <NavBarIcon name="managment" configData={'#fc0000'}/>
          {isActive ? <NavLinkName>Establecimientos</NavLinkName> : <></>}
        </NavLinkContainer>
    
        {/* <NavLinkContainer
          to={`${PrivateRoute.MANAGMENT}`}
        >
          <NavBarIcon name="dashboard" />
          {isActive ? <NavLinkName>Administración</NavLinkName> : <></>}
        </NavLinkContainer> */}
      
    </NavBarContainer>
  );
};
