import { DataGrid } from "@mui/x-data-grid";
import {
  ContainerCell,
  ButtonEdit,
  ButtonDelete,
} from "../../../../styles/Table";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PrivateRoute } from "../../../../routes/routes";
import { useSelector, useDispatch } from "react-redux";
import { CreatedCategory } from "../../../../components/Categoy/Modal/createdCategory";
import { UpdateCategory } from "../../../../components/Categoy/Modal/updateCategory";
import { openModalCreatedCategory } from "../../../../redux/States/ModalAction";
import { setSelectedCategory } from "../../../../redux/States/Category";
import { DeleteCategory } from "../../../../components/Categoy/Modal/DeleteCategory";
import { setFilterRate } from "../../../../redux/States/Rate";

export const Category = () => {
  const dispatch = useDispatch();
  const { categoryState } = useSelector((store) => store);
  const { CategoryByActivity } = categoryState;
  const navigate = useNavigate();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "categoryName",
      headerName: "Nombre Categoria",
      width: 200,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "state_Category",
      headerName: "Activo",
      width: 220,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => (
        <ContainerCell key={params.row.id}>
          <input type="checkbox" checked={params.row.state_Category} />
        </ContainerCell>
      ),
    },
    {
      field: "low_Risk",
      headerName: "Bajo Riesgo",
      width: 220,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => (
        <ContainerCell key={params.row.id}>
          <input type="checkbox" checked={params.row.low_Risk} />
        </ContainerCell>
      ),
    },
    {
      field: "required_form",
      headerName: "Requiere Formulario",
      width: 220,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => (
        <ContainerCell key={params.row.id}>
          <input type="checkbox" checked={params.row.required_form} />
        </ContainerCell>
      ),
    },
    {
      field: "",
      headerName: "Opciones",
      sortable: false,
      width: 300,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => (
        <ContainerCell key={params.row.id}>
          <ButtonEdit onClick={() => handleButtonClick(params.row, "edit")}>
            Editar
          </ButtonEdit>
          <ButtonDelete onClick={() => handleButtonClick(params.row, "delete")}>
            Eliminar
          </ButtonDelete>
          <ButtonEdit onClick={() => handleClick(params.row)}>
            Tasa Anual
          </ButtonEdit>
        </ContainerCell>
      ),
    },
  ];

  const handleButtonClick = (row, value) => {
    dispatch(setSelectedCategory(row.id, value));
  };

  const handleClick = (row) => {
    dispatch(setSelectedCategory(row.id));
    dispatch(setFilterRate(row.id));
    navigate(`/private/${PrivateRoute.tasasAnuales}`);
  };

  return (
    <ContainerTable>
      <ContainerOptions>
        <div>
          <button onClick={() => dispatch(openModalCreatedCategory(true))}>
            +
          </button>
        </div>
      </ContainerOptions>
      <Table>
        <div style={{ display: "flex", width: "95%", height: "90%" }}>
          <DataGrid
            rows={CategoryByActivity}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            sx={{
              width: "300px",
              "& .MuiDataGrid-cell:hover": {
                color: "red",
              },
              "& .super-app-theme--header": {
                backgroundColor: "rgba(255, 17, 9, 0.829)",
                color: "#fff",
              },
            }}
          />
        </div>
      </Table>
      <CreatedCategory />
      <UpdateCategory />
      <DeleteCategory />
    </ContainerTable>
  );
};

const ContainerTable = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerOptions = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 13px;
    border: none;
    background: red;
    color: #fff;
    font-size: 26px;
    margin: 0 2rem 0 2rem;
    cursor: pointer;
  }
`;

const Table = styled.div`
  width: 100%;
  height: 435px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
