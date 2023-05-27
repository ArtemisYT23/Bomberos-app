import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Logo from "../../../../../assets/img/bomberos.png";
import {
  ContainerCell,
  ButtonEdit,
  ButtonDelete,
  Table,
} from "../../../../styles/Table";
import { useSelector } from "react-redux";

export const ViewEstablecimient = () => {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState("");
  const { rateState, categoryState } = useSelector((store) => store);
  const { RateByCategory } = rateState;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleButtonClick = (row, value) => {
    console.log(row.id, value);
  };

  const columns = [
    {
      field: "yearRate",
      headerName: "Actividad",
      width: 160,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "valuesRate",
      headerName: "Categoria",
      width: 170,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "moraRate",
      headerName: "Fecha Inicio",
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

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === 0 && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                padding: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="RUC"
                variant="outlined"
                style={{ margin: "1rem" }}
              />

              <TextField
                id="outlined-basic"
                label="Nombre Comercial"
                variant="outlined"
                style={{ margin: "1rem" }}
              />

              <TextField
                id="outlined-basic"
                label="Telefono"
                variant="outlined"
                style={{ margin: "1rem" }}
              />

              <TextField
                id="outlined-basic"
                label="Nota"
                variant="outlined"
                style={{ margin: "1rem" }}
              />
            </Box>

            <Box
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid #c4c4c4",
                  borderRadius: "13px",
                  overflow: "hidden",
                  width: "90%",
                  height: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img width="80%" height="80%" src={Logo} alt="Cargando" />
              </div>
            </Box>
          </Box>
        )}

        {value === 1 && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                height: 450,
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                padding: 1,
              }}
            >
              <FormControl style={{ margin: "1rem" }}>
                <InputLabel id="demo-simple-select-label">
                  --Parroquia--
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="--Parroquia--"
                  onChange={handleChange}
                >
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-basic"
                label="Ciudadela/Barrio/Coop"
                variant="outlined"
                style={{ margin: "1rem" }}
              />

              <TextField
                id="outlined-basic"
                label="Calle"
                variant="outlined"
                style={{ margin: "1rem" }}
              />

              <TextField
                id="outlined-basic"
                label="Interseccion"
                variant="outlined"
                style={{ margin: "1rem" }}
              />

              <TextField
                id="outlined-basic"
                label="Mz y Solar"
                variant="outlined"
                style={{ margin: "1rem" }}
              />

              <TextField
                id="outlined-basic"
                label="Referencia de Direccion"
                variant="outlined"
                style={{ margin: "1rem" }}
              />

              <TextField
                id="outlined-basic"
                label="Telefono"
                variant="outlined"
                style={{ margin: "1rem" }}
              />
            </Box>

            <Box
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid #c4c4c4",
                  borderRadius: "13px",
                  overflow: "hidden",
                  width: "90%",
                  height: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.739143927996!2d-79.88468114608573!3d-2.251159623926696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6f99efa866f1%3A0x274725b73313bd11!2sT%C3%8DA%20FLORESTA!5e0!3m2!1ses-419!2sec!4v1685120324506!5m2!1ses-419!2sec"
                  width="100%"
                  height="450px"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </Box>
          </Box>
        )}

        {value === 2 && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                padding: 1,
              }}
            >
              <FormControl style={{ margin: "1rem" }}>
                <InputLabel id="demo-simple-select-label">
                  --Actividad--
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="--Actividad--"
                  onChange={handleChange}
                >
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                </Select>
              </FormControl>

              <FormControl style={{ margin: "1rem" }}>
                <InputLabel id="demo-simple-select-label">
                  --Categoria--
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="--Categoria--"
                  onChange={handleChange}
                >
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ margin: "1rem" }}
                type="date"
              />

              <TextField
                id="outlined-basic"
                label="Area Aproximada (m2)"
                variant="outlined"
                style={{ margin: "1rem" }}
              />
            </Box>

            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "90%", height: "90%" }}>
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
            </Box>
          </Box>
        )}

        {value === 3 && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                height: 450,
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                padding: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="Sector"
                variant="outlined"
                style={{ margin: "1rem" }}
                type="number"
              />

              <TextField
                id="outlined-basic"
                label="Manzana"
                variant="outlined"
                style={{ margin: "1rem" }}
                type="number"
              />

              <TextField
                id="outlined-basic"
                label="Lote"
                variant="outlined"
                style={{ margin: "1rem" }}
                type="number"
              />

              <TextField
                id="outlined-basic"
                label="Division"
                variant="outlined"
                style={{ margin: "1rem" }}
                type="number"
              />

              <TextField
                id="outlined-basic"
                label="PHV"
                variant="outlined"
                style={{ margin: "1rem" }}
                type="number"
              />

              <TextField
                id="outlined-basic"
                label="PHH"
                variant="outlined"
                style={{ margin: "1rem" }}
                type="number"
              />
            </Box>

            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "90%", height: "90%" }}>
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
            </Box>
          </Box>
        )}

        {value === 4 && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
              }}
            >
              <Box sx={{ marginTop: 1 }}>
                <InputLabel>CEDULA</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  style={{ margin: "1rem" }}
                  type="file"
                />
              </Box>

              <Box sx={{ marginTop: 1 }}>
                <InputLabel>IMPUESTO PREDIAL</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  style={{ margin: "1rem" }}
                  type="file"
                />
              </Box>

              <Box sx={{ marginTop: 1 }}>
                <InputLabel>PREDIOS</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  style={{ margin: "1rem" }}
                  type="file"
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <InputLabel>RUC "COMPLETO", AMBAS PÁGINAS</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  style={{ margin: "1rem" }}
                  type="file"
                />
              </Box>

              <Box sx={{ marginTop: 1 }}>
                <InputLabel>
                  CALIFICACIÓN ARTESANAL (EN CASO DE POSEER)
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  style={{ margin: "1rem" }}
                  type="file"
                />
              </Box>
            </Box>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#fa0404", // Cambia el color de la línea indicadora
          },
          "& .MuiTab-root": {
            // "&.Mui-selected": {
            //   backgroundColor: "#e0e0e0", // Cambia el color de fondo de la pestaña seleccionada
            // },
            "&.MuiTab-textColorPrimary": {
              color: "#fa0404", // Cambia el color del texto de las pestañas
            },
          },
        }}
      >
        <Tab label="Datos" />
        <Tab label="Ubicacion" />
        <Tab label="Actividad" />
        <Tab label="Catastro" />
        <Tab label="Documentos" />
        <Tab label="Adicionales" />
      </Tabs>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
      <TabPanel value={value} index={3} />
      <TabPanel value={value} index={4} />
    </Box>
  );
};
