import './Menu.scss'
import IconButton from '@mui/material/IconButton';
import ViewListIcon from '@mui/icons-material/ViewList';

function Playground(props: { setViewMode: any }) {


  return (
    <div className="menu">
      <div className="menu-container">
      <IconButton aria-label="view-mode" size="large" onClick={props.setViewMode}>
        <ViewListIcon fontSize="inherit" />
      </IconButton>
      </div>
    </div>
  )
}

export default Playground
