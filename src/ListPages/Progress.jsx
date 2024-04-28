import Sidebar from "../components/Sidebar"
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Padding } from "@mui/icons-material";

const columns = ["Proyecto", "Fecha inicio", "Fecha final", "Estado", "Avance"];

const Progress = () => {

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    // ["John Walsh", "Test Corp", "Hartford", "CT"],
    // ["Bob Herm", "Test Corp", "Tampa", "FL"],
    // ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {

    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 20],
  };

  const getMuiTheme = () => createTheme({

    typography: {
      fontFamily: "Poppins",
    },
    palette: {
      background: {
        paper: "#697A98",
        default: "#17407D"
      },
      mode: "dark"
    },
    components: {
      MuiTableOverrides: {
        head: {
          Padding: "10px 4px",
        },
        body: {
          Padding: "7px 15px",
          color: "#FFFF",
        },
        footer: {
          fontFamily: "Poppins"
        }
      }
      
    }
  })

  // theme={getMuiTheme()}

  return (
    <div className="flex">
      <Sidebar />
      <h1 className="font-bold text-white text-3xl">Avances de Proyecto</h1>
      <div className="bg-blue py-10 h-screen flex justify-center items-center">
        <div className="w-full max-w-full">
          <ThemeProvider theme={getMuiTheme()}>

            <MUIDataTable
              className="w-full"
              data={data}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  )
}

export default Progress