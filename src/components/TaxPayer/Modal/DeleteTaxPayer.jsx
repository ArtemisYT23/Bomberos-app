import { openModalDeleteTaxPayer } from "../../../redux/States/ModalAction";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import {
  ContainerModal,
  ButtonDelete,
  ButtonCancel,
  ContaiderButton,
  TitleModal,
  IconAlert,
  AlertDelete,
  AcepDelete,
} from "../../../styles/Modal/Modal";
import { DeleteIcon } from "../../../../assets/icons/DeleteIcon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: 3,
};

export const DeleteTaxPayer = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((store) => store);
  const { deleteTaxPayer } = modalState;
  const [buttonActive, setButtonActive] = useState(false);

  const handleClose = () => {
    dispatch(openModalDeleteTaxPayer(false));
    setButtonActive(false);
  };

  const ContainerDelete = (
    <ContainerModal>
      <div align="center">
        <TitleModal>ELIMINAR ACTIVIDAD</TitleModal>
      </div>
      <IconAlert>
        <DeleteIcon x={40} y={40} />
      </IconAlert>
      <AlertDelete>
        <label>Para eliminar el contribuyente</label>
        <label>No debe contener informacion</label>
        <label>indexada</label>
        <label>de datos</label>
        <AcepDelete onClick={() => setButtonActive(true)}>Aceptar</AcepDelete>
      </AlertDelete>
      <ContaiderButton align="right">
        <ButtonDelete type="submit" disabled={!buttonActive}>
          Eliminar
        </ButtonDelete>
        <ButtonCancel onClick={handleClose}>Cancelar</ButtonCancel>
      </ContaiderButton>
    </ContainerModal>
  );

  return (
    <Modal
      open={deleteTaxPayer}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{ContainerDelete}</Box>
    </Modal>
  );
};
