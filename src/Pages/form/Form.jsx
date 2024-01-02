import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import Header from "../../Component/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleClick();
  };
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
            <Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Stack sx={{ gap: 3 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName) ? "This field is required" : null
          }
          {...register("firstName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="outlined"
        />
        <TextField
          error={Boolean(errors.LastName)}
          helperText={
            Boolean(errors.LastName) ? "This field is required" : null
          }
          {...register("LastName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="outlined"
        />
      </Stack>
      <TextField
        error={Boolean(errors.Email)}
        helperText={Boolean(errors.Email) ? "This field is required" : null}
        {...register("Email", { required: true, pattern: regEmail })}
        label="Email"
        variant="outlined"
      />
      <TextField label="Contact Number" variant="outlined" />
      <TextField label="Adress 1" variant="outlined" />
      <TextField label="Adress 2" variant="outlined" />

      <FormControl fullWidth>
        <InputLabel>Role</InputLabel>
        <Select value={age} label="Role" onChange={handleChange}>
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Manger</MenuItem>
          <MenuItem value={30}>User</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          create new user
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created sucessfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
