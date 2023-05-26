import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { openModalCreatedActivity } from "../../../redux/States/ModalAction";
import { ContainerModal, ButtonSubmit, ButtonCancel } from "../../../styles/Modal/Modal";
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

export const CreateActivity = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((store) => store);
  const { createdActivity } = modalState;
  const [ Name, setName] = useState("");
  const [Active, setActive] = useState(false);
  const [Aplicated, setAplicated] = useState(false);

  const handleClose = () => {
    dispatch(openModalCreatedActivity(false));
  };

  const ContainerCreate = (
    <ContainerModal>
      <h1>Crear Nueva Actividad</h1>
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
          control={<Checkbox  onChange={(e) => setAplicated(e.target.checked)} />}
          label="Aplica Inspeccion"
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
      open={createdActivity}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{ContainerCreate}</Box>
    </Modal>
  );
};


