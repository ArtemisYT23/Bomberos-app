import { openModalDeleteCategory } from "../../../redux/States/ModalAction";
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

export const DeleteCategory = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((store) => store);
  const { deleteCategory } = modalState;
  const [buttonActive, setButtonActive] = useState(false);

  const handleClose = () => {
    dispatch(openModalDeleteCategory(false));
    setButtonActive(false);
  };

  const ContainerCreate = (
    <ContainerModal>
      <div align="center">
        <TitleModal>ELIMINAR CATEGORIA</TitleModal>
      </div>
      <IconAlert>
        <DeleteIcon x={40} y={40} />
      </IconAlert>
      <AlertDelete>
        <label>Para que la Categoria</label>
        <label>pueda ser eliminada</label>
        <label>no debe contener registros</label>
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
      open={deleteCategory}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{ContainerCreate}</Box>
    </Modal>
  );
};
