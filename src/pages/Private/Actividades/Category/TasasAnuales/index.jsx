import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  ContainerCell,
  ButtonEdit,
  ButtonDelete,
  Table,
  ContainerNew,
  ContainerData,
  ContainerTable,
  ContainerHeaderOptions,
} from "../../../../../styles/Table";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";

export const TasasAnuales = () => {
  const dispatch = useDispatch();
  const { rateState, categoryState } = useSelector((store) => store);
  const { RateByCategory } = rateState;
  const { SelectedCategory } = categoryState;

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "yearRate",
      headerName: "Año",
      width: 160,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "valuesRate",
      headerName: "$ Valor",
      width: 170,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "moraRate",
      headerName: "% Mora",
      width: 180,
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
        </ContainerCell>
      ),
    },
  ];

  const handleButtonClick = (row, value) => {
    console.log(row.id, value);
  };

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const BootstrapButton = styled(Button)({
    width: "80%",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    color: "#fff",
    backgroundColor: "#db7b7b",
    borderColor: "#db7b7b",
    "&:hover": {
      backgroundColor: "#d89b9b",
      borderColor: "#d89b9b",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <ContainerTable>
      <ContainerHeaderOptions>
        <div>
          <Box>
            <ContainerNew>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  style={{ margin: "1rem" }}
                  id="outlined-basic"
                  label="Descripcion"
                  variant="outlined"
                  value={SelectedCategory?.categoryName}
                />
              </Box>

              <FormGroup>
                <FormControlLabel
                  sx={{ margin: ".2rem" }}
                  control={
                    <Checkbox checked={SelectedCategory?.state_Category} />
                  }
                  label="Activa"
                />
                <FormControlLabel
                  sx={{ margin: ".2rem" }}
                  control={<Checkbox checked={SelectedCategory?.low_Risk} />}
                  label="Bajo Riesgo"
                />
                <FormControlLabel
                  sx={{ margin: ".2rem" }}
                  control={
                    <Checkbox checked={SelectedCategory?.required_form} />
                  }
                  label="Requiere Sis.Alarma"
                />
              </FormGroup>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "80%", margin: "1rem" }}>
                  <InputLabel id="demo-simple-select-label">
                    --Seleccione un año--
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="--Seleccione un año--"
                    onChange={handleChange}
                  >
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "80%", margin: "1rem" }}>
                  <TextField
                    id="outlined-basic"
                    label="Valor"
                    variant="outlined"
                  />
                </FormControl>

                <FormControl sx={{ width: "80%", margin: "1rem" }}>
                  <TextField
                    id="outlined-basic"
                    label="%Mora"
                    variant="outlined"
                  />
                </FormControl>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BootstrapButton variant="outlined">Añadir</BootstrapButton>
              </Box>
            </ContainerNew>
          </Box>
        </div>
      </ContainerHeaderOptions>
      <Table>
        <ContainerData>
          <div style={{ width: "100%", height: "100%" }}>
            <DataGrid
              rows={RateByCategory}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              sx={{
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
        </ContainerData>
      </Table>
    </ContainerTable>
  );
};
