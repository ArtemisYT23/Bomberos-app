import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { openModalCreatedTaxPayer } from "../../../redux/States/ModalAction";
import {
  ContainerModal,
  ButtonSubmit,
  ButtonCancel,
} from "../../../styles/Modal/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "90%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  overflowY: "scroll",
};

export const CreateTaxPayer = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((store) => store);
  const { createdTaxPayer } = modalState;
  const [Ruc, setRuc] = useState("");
  const [RazonSocial, setRazonSocial] = useState("");
  const [RepresentativeLegal, setRepresentativeLegal] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [CellPhone, setCellPhone] = useState("");
  const [CellConvencional, setCellConvencional] = useState("");

  const handleClose = () => {
    dispatch(openModalCreatedTaxPayer(false));
  };

  const ContainerCreate = (
    <ContainerModal>
      <h1>Crear Nuevo Contribuyente</h1>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ margin: "1rem", width: "100%" }}
          id="outlined-basic"
          label="RUC"
          variant="outlined"
          onChange={(e) => setRuc(e.target.value)}
          value={Ruc}
        />
        
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ margin: "1rem", width: "100%" }}
          id="outlined-basic"
          label="Razon Social"
          variant="outlined"
          onChange={(e) => setRazonSocial(e.target.value)}
          value={RazonSocial}
        />
        
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ margin: "1rem", width: "100%" }}
          id="outlined-basic"
          label="Representante Legal"
          variant="outlined"
          onChange={(e) => setRepresentativeLegal(e.target.value)}
          value={RepresentativeLegal}
        />
        
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ margin: "1rem", width: "100%" }}
          id="outlined-basic"
          label="Correo"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
        
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ margin: "1rem", width: "100%" }}
          id="outlined-basic"
          label="Direccion"
          variant="outlined"
          onChange={(e) => setAddress(e.target.value)}
          value={Address}
        />
        
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ margin: "1rem", width: "100%" }}
          id="outlined-basic"
          label="Telefono Celular"
          variant="outlined"
          onChange={(e) => setCellPhone(e.target.value)}
          value={CellPhone}
        />
        
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ margin: "1rem", width: "100%" }}
          id="outlined-basic"
          label="Telefono Convencional"
          variant="outlined"
          onChange={(e) => setCellConvencional(e.target.value)}
          value={CellConvencional}
        />
        
      </Box>
      <Box sx={{ marginTop: "1rem" }}>
        <ButtonSubmit>Crear</ButtonSubmit>
      </Box>

      <Box sx={{ marginTop: "1rem" }}>
        <ButtonCancel onClick={handleClose}>Cancelar</ButtonCancel>
      </Box>
    </ContainerModal>
  );

  return (
    <Modal
    open={createdTaxPayer}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>{ContainerCreate}</Box>
  </Modal>
  );
};
