import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { ContainerCell, ButtonEdit, ButtonDelete } from "../../../styles/Table";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoute } from "../../../routes/routes";

export const Establecimiento = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { taxState } = useSelector((store) => store);
  const { TaxPayer } = taxState;

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "ruc",
      headerName: "Nombre Comercial",
      width: 300,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "razonSocial",
      headerName: "Telefono",
      width: 280,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "representativeLegal",
      headerName: "Nota",
      width: 280,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "",
      headerName: "Opciones",
      sortable: false,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      width: 280,
      renderCell: (params) => (
        <ContainerCell key={params.row.id}>
          <ButtonEdit onClick={() => handleButtonClick(params.row, "edit")}>
            Editar
          </ButtonEdit>
          <ButtonDelete onClick={() => handleButtonClick(params.row, "delete")}>
            Eliminar
          </ButtonDelete>
          <ButtonEdit onClick={() => handleClick(params.row)}>
            Ver
          </ButtonEdit>
        </ContainerCell>
      ),
    },
  ];

  const handleButtonClick = (row, value) => {};

  const handleClick = (row) => {
    navigate(`/private/${PrivateRoute.viewEstablecimiento}`);
  };

  return (
    <ContainerTable>
      <ContainerOptions>
        <div>
          <button>
            +
          </button>
          <input placeholder="...Buscar" />
          <label>Consultar</label>
        </div>
      </ContainerOptions>
      <Table>
        <div style={{ display: "flex", width: "95%", height: "90%" }}>
          <DataGrid
            rows={TaxPayer}
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
                backgroundColor: "rgba(255, 17, 9, 0.801)",
                color: "#fff",
              },
            }}
          />
        </div>
      </Table>
    </ContainerTable>
  );
};


const ContainerTable = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerOptions = styled.div`
  width: 100%;
  height: 90px;
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