import { DataGrid } from "@mui/x-data-grid";
import { ContainerCell, ButtonEdit, ButtonDelete } from "../../../styles/Table";
import styled from "styled-components";
import { setTaxPayerSelected } from "../../../redux/States/TaxPayer";
import { useDispatch, useSelector } from "react-redux";
import { CreateTaxPayer } from "../../../components/TaxPayer/Modal/CreateTaxPayer";
import { UpdateTaxPayer } from "../../../components/TaxPayer/Modal/UpdateTaxPayer";
import { DeleteTaxPayer } from "../../../components/TaxPayer/Modal/DeleteTaxPayer";
import { openModalCreatedTaxPayer } from "../../../redux/States/ModalAction";

export const Contribuyente = () => {
  const dispatch = useDispatch();
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
      headerName: "RUC",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "razonSocial",
      headerName: "Razon Socila",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "representativeLegal",
      headerName: "Rep. Legal",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Correo",
      width: 120,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Direccion",
      width: 120,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "cellPhone",
      headerName: "Tel. Celular",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "cellConvencional",
      headerName: "Tel. Convencional",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "",
      headerName: "Opciones",
      sortable: false,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 240,
      renderCell: (params) => (
        <ContainerCell key={params.row.id}>
          <ButtonEdit onClick={() => handleButtonClick(params.row, "edit")}>
            Editar
          </ButtonEdit>
          <ButtonDelete onClick={() => handleButtonClick(params.row, "delete")}>
            Eliminar
          </ButtonDelete>
        </ContainerCell>
      ),
    },
  ];

  const handleButtonClick = (row, value) => {
    dispatch(setTaxPayerSelected(row.id, value));
  };

  return (
    <ContainerTable>
      <ContainerOptions>
        <div>
          <button onClick={() => dispatch(openModalCreatedTaxPayer(true))}>
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
      <CreateTaxPayer />
      <UpdateTaxPayer />
      <DeleteTaxPayer />
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
