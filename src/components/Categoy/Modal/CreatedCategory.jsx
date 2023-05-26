import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { openModalCreatedCategory } from "../../../redux/States/ModalAction";
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
};

export const CreatedCategory = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((store) => store);
  const { createdCategory } = modalState;
  const [Name, setName] = useState("");
  const [Active, setActive] = useState(false);
  const [lowRisk, setLowRisk] = useState(false);
  const [required, setRequired] = useState(false);


  const handleClose = () => {
    dispatch(openModalCreatedCategory(false));
  };

  const ContainerCreate = (
    <ContainerModal>
      <h1>Crear Nueva Categoria</h1>
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
          label="Nombre"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
      </Box>

      <Box>
        <FormControlLabel
          sx={{ margin: ".2rem" }}
          control={<Checkbox onChange={(e) => setActive(e.target.checked)} />}
          label="Activa"
        />
        <FormControlLabel
          sx={{ margin: ".2rem" }}
          control={
            <Checkbox onChange={(e) => setLowRisk(e.target.checked)} />
          }
          label="Bajo Riesgo"
        />
        <FormControlLabel
          sx={{ margin: ".2rem" }}
          control={
            <Checkbox onChange={(e) => setRequired(e.target.checked)} />
          }
          label="Requiere Formulario"
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
      open={createdCategory}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{ContainerCreate}</Box>
    </Modal>
  );
};
