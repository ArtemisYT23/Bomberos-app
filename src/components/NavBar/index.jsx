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

export const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

  return (
    <NavBarContainer isActive={isActive}>
      {!isActive ? (
        <LogoContainerIcon logo={LogoBomberos} onClick={() => setIsActive(!isActive)} />
      ) : (
        <LogoContainer logo={LogoBomberos} onClick={() => setIsActive(!isActive)} />
      )}
      
        <NavLinkContainer
          to={`${PrivateRoute.initialSesion}`}
        >
          <NavBarIcon name="managment" configData={'#f71b0b'}/>
          {isActive ? <NavLinkName>Actividades</NavLinkName> : <></>}
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
