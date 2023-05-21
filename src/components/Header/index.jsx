import { useState } from "react";
import {
  HeaderContainer,
  ContainerUser,
  AvataDrop,
  HeaderUP,
  NameContainer,
  TextNameResource,
  OptionContainer,
  ContentText,
  TextName,
  Perfiles,
  Avatar,
  Title,
} from "../../styles/Header";
import Logo from "../../../assets/img/logo-bomberos.png";
import user from "../../../assets/img/user.png";
import settings from "../../../assets/img/settings.png";
import logout from "../../../assets/img/logout.png";
import "../../styles/Header/Header.css";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const NameGlobalSelected = "";

  const ActiveMenu = () => {
    setShowMenu(!showMenu);
  };

  const changeStateDrop = () => {};

  const handleUrl = () => {};

  const handleUrl1 = () => {};

  const CerrarSesion = () => {};

  return (
    <HeaderContainer onClick={() => changeStateDrop()}>
      {showMenu && (
        <>
          <div className={`dropdown-menu ${showMenu ? "active" : "inactive"}`}>
            <h3>
              <ContainerUser>
                <AvataDrop src={Logo} />
              </ContainerUser>
              Administrador
              <br />
              <span>Administrador</span>
            </h3>
            <ul>
              <li className="dropdownItem" onClick={() => handleUrl()}>
                <img src={user}></img>
                <a> {"Mi Perfil"} </a>
              </li>
              <li className="dropdownItem" onClick={() => handleUrl1()}>
                <img src={settings}></img>
                <a> {"Configuraciones"} </a>
              </li>
              <li onClick={() => CerrarSesion()} className="dropdownItem">
                <img src={logout}></img>
                <a> {"Cerrar Sesion"} </a>
              </li>
            </ul>
          </div>
        </>
      )}
      <HeaderUP>
        <NameContainer>
          {NameGlobalSelected ? (
            <TextNameResource>
              <h1>SISTEMA BETA</h1>
            </TextNameResource>
          ) : (
            <Title>
              <h1>SISTEMA BETA</h1>
            </Title>
          )}
        </NameContainer>

        <OptionContainer>
          <ContentText>
            <TextName>
              <h1>User01</h1>
            </TextName>
          </ContentText>
          <Perfiles onClick={() => ActiveMenu()}>
            <Avatar src={Logo} />
          </Perfiles>
        </OptionContainer>
      </HeaderUP>
    </HeaderContainer>
  );
};
