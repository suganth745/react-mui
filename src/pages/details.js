import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6" component="h6">
              Product Details
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
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Role"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Sales Code"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <div style={{ marginTop: "2rem" }}>
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            sx={{ marginRight: "1rem" }}
            onClick={() => navigate("/")}
          >
            Save
          </Button>
          <Button variant="text" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Details;
