import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Register from "./Register";
import Login from "./Login";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
  p: 2,
};

export default function BasicModal({open,setOpen}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [signIn, setSignIn] = React.useState(false);
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            {signIn ?  <Register setSignIn={setSignIn}/>: <Login setSignIn={setSignIn}/>}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
