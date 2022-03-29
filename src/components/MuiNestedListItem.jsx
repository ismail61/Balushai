import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function MuiNestedListItem({menuText, menuIcon, subMenus}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
    <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {menuIcon}
        </ListItemIcon>
        <ListItemText primary={menuText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenus?.map((subMenu, index) => (
             <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {subMenu?.icon}
              </ListItemIcon>
              <ListItemText primary={subMenu?.text} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      </> 
  )
}
