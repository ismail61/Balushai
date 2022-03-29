import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Toolbar, Typography } from '@mui/material';
import MuiNestedListItem from './MuiNestedListItem';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';

export default function MuiSidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '260px', maxWidth: 360 }}
      component="nav"
      aria-labelledby="sidebar"
     /*  subheader={
        <Toolbar>
          <Typography>
            BALUSHAI VENDOR
          </Typography>
        </Toolbar>
      } */
    >
      <MuiNestedListItem menuText="Products" menuIcon={<AllInboxOutlinedIcon/>} subMenus={[{text: 'Manage Products', icon: <DoubleArrowOutlinedIcon/>}]}/>
      <MuiNestedListItem menuText="Orders & Reviews" menuIcon={<ReviewsOutlinedIcon/>}/>
    </List>
  );
}
