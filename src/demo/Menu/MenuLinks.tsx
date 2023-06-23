import { useSearchParams } from 'react-router-dom';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DataObjectIcon from '@mui/icons-material/DataObject';

const demoFiles = import.meta.glob("@/data/forms/*.json");

let pathElements: string[] = [];

for (const file in demoFiles) {
  const p = file.split("/");
  pathElements.push(p[p.length - 1].replace(".json", ""))
}


function MenuLinks() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      {pathElements.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => setSearchParams({demo: text})}>
            <ListItemIcon>
              <DataObjectIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

export default MenuLinks;
