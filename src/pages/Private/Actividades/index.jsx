import { DataGrid } from "@mui/x-data-grid";
import { ContainerCell, ButtonEdit, ButtonDelete } from "../../../styles/Table";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PrivateRoute } from "../../../routes/routes";
import { CreateActivity } from "../../../components/Activities/Modal/CreateActivity";
import { openModalCreatedActivity } from "../../../redux/States/ModalAction";
import { setFilterCategory } from "../../../redux/States/Category";
import { setSelectedActivity } from "../../../redux/States/Activity";
import { UpdateActivity } from "../../../components/Activities/Modal/UpdateActivity";
import { DeleteActivity } from "../../../components/Activities/Modal/DeleteActivity";
import { useDispatch, useSelector } from "react-redux";

export const Actividades = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activityState } = useSelector((store) => store);
  const { Activity } = activityState;

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "activityName",
      headerName: "Nombre Actividad",
      width: 280,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },

    {
      field: "active",
      headerName: "Activo",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 280,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => (
        <ContainerCell key={params.row.id}>
          <input type="checkbox" checked={params.row.active} />
        </ContainerCell>
      ),
    },
    {
      field: "aplicateInspection",
      headerName: "Aplica Inspeccion",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      width: 280,
      renderCell: (params) => (
        <ContainerCell key={params.row.id}>
          <input type="checkbox" checked={params.row.aplicateInspection} />
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
          <ButtonEdit onClick={() => handleClick(params.row)}>View</ButtonEdit>
        </ContainerCell>
      ),
    },
  ];

  const handleClick = (row) => {
    dispatch(setFilterCategory(row.id));
    navigate(`/private/${PrivateRoute.categorias}`);
  };

  const handleButtonClick = (row, value) => {
    dispatch(setSelectedActivity(row.id, value));
  };

  return (
    <ContainerTable>
      <ContainerOptions>
        <div>
          <button onClick={() => dispatch(openModalCreatedActivity(true))}>
            +
          </button>
          <input placeholder="...Buscar" />
          <label>Consultar</label>
        </div>
      </ContainerOptions>
      <Table>
        <div style={{ display: "flex", width: "95%", height: "90%" }}>
          <DataGrid
            rows={Activity}
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
      <CreateActivity />
      <UpdateActivity />
      <DeleteActivity />
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

  input {
    width: 200px;
    height: 40px;
    outline: none;
  }

  label {
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eb7f7f;
    color: #fff;
    margin: 0 1rem 0 1rem;
    border-radius: 13px;
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
