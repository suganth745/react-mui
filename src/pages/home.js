import Grid from "@mui/material/Grid";
import Table from "../components/table";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6" component="h6">
              All Products
            </Typography>
            <Typography variant="caption" gutterBottom>
              As the title suggests, I've been trying to figure out why on earth
            </Typography>
          </Grid>
          <Grid textAlign={"end"} item xs={4}>
            <Button
              color="error"
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ marginRight: ".5rem" }}
            >
              New Product
            </Button>
            <Button
              color="error"
              variant="outlined"
              sx={{ marginRight: ".5rem" }}
            >
              Import
            </Button>
            <Button color="error" variant="outlined">
              Export
            </Button>
          </Grid>
        </Grid>

        <Table />
      </Box>
    </>
  );
};

export default Home;
