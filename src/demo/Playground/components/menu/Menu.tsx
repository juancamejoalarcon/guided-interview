import { useState } from "react";
import "./Menu.scss";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { Dialog, DialogTitle, IconButton } from "@mui/material";

function SimpleDialog(props: { open: boolean, onClose: any, interview: any }) {
  const { open, onClose } = props;

  return (
    <Dialog onClose={onClose} open={open} maxWidth="lg">
      <DialogTitle>Interview data</DialogTitle>
      <pre style={{ width: '60vw', padding: '1rem' }}>
        {JSON.stringify(props.interview.getData(), null, 2)}
      </pre>
    </Dialog>
  );
}

function Playground(props: { interview: any }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  return (
    <div className="menu">
      <div className="menu-container">
        <IconButton
          aria-label="view-mode"
          size="large"
          onClick={handleClickOpen}
        >
          <DataObjectIcon fontSize="inherit" />
        </IconButton>
        <SimpleDialog
          onClose={handleClose}
          open={open}
          interview={props.interview}
        />
      </div>
    </div>
  );
}

export default Playground;
