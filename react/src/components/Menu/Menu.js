import React from "react";
import {
  Box,
  Grid,
  ListItemIcon,
  MenuList,
  MenuItem,
  Typography,
} from "@mui/material";
import styleLeftBar from "./styleMenu";
import PieChartIcon from "@mui/icons-material/PieChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AddchartIcon from "@mui/icons-material/Addchart";
import AndroidIcon from "@mui/icons-material/Android";

export default function LeftBar() {
  const classes = styleLeftBar();
  return (
    <Grid item xs={2} className={classes.background}>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon>
          <AndroidIcon style={{ fontSize: "20px" }} className={classes.icon} />
        </ListItemIcon>
        <Typography style={{ fontSize: "14px", fontWeight:"bold" }} className={classes.title}>MagerCRM</Typography>
      </MenuItem>
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <Typography className={classes.title}>General Menu</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <PieChartIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography  style={{ fontSize: "14px" }} className={classes.title}>Analytics</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <AccountCircleIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography style={{ fontSize: "14px" }} className={classes.title}>Customers</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <BusinessIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography style={{ fontSize: "14px" }} className={classes.title}>Companies</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <BusinessCenterIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography style={{ fontSize: "14px" }} className={classes.title}>Transaction</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <BarChartIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography style={{ fontSize: "14px" }} className={classes.title}>Sales Report</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <AssignmentTurnedInIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography style={{ fontSize: "14px" }} className={classes.title}>Task</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <AddchartIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography  style={{ fontSize: "14px" }} className={classes.title}>Accounting</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <CalendarTodayIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography style={{ fontSize: "14px" }} className={classes.title}>Calendar</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <AssignmentIndIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography style={{ fontSize: "14px" }} className={classes.title}>Recruitment</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <NoteAltIcon style={{ fontSize: "20px" }} className={classes.icon} />
          </ListItemIcon>
          <Typography style={{ fontSize: "14px" }} className={classes.title}>Training</Typography>
        </MenuItem>
        {/* <Typography style={{ fontSize: "14px" }} className={classes.title}>Active Members</Typography> */}

      </MenuList>
    </Grid>
  );
}
