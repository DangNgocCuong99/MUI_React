import React from "react";
import { Grid, Box, Card, Avatar } from "@mui/material";

import styleIndex from "./styleItem";
import Menu from "./Menu/Menu";
import Header from "./header/header";
import Search from "./searchbar/search";
import AvatarOnline from "./avatar/avatar";
import LogAvatar from "./logAvatar/logAvatar";
import Chart from "./chart/chart";
import PieChart from "./piechart/piechart";
import Table from "./table/table";
import AddBoxIcon from '@mui/icons-material/AddBox';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import { green, pink, deepOrange } from '@mui/material/colors';
import StarsIcon from '@mui/icons-material/Stars';
import GppGoodIcon from '@mui/icons-material/GppGood';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
export default function Items(items) {
  const classes = styleIndex();
  return (
    <Grid container className={classes.all}>
      <Grid className={classes.main_left} xs={2}>
        <Grid xs={2} sx={{backgroundColor:'#000080'}}>
          <AddBoxIcon 
          sx={{
            margin:'6px', 
            borderRadius:'4px', 
            background:'#9eafff',
            fontSize: 30}}></AddBoxIcon>
          <InsertLinkIcon
          sx={{
            marginTop:'20px',
            marginRight:'6px',
            marginLeft: '6px',
            marginBottom: '6px', 
            borderRadius:'4px', 
            background:'#4682B4	',
            fontSize: 30}}></InsertLinkIcon>
          <AttachmentOutlinedIcon
            sx={{
              margin:'6px',
              borderRadius:'4px', 
              background:'#FF6347	',
              fontSize: 30}}></AttachmentOutlinedIcon>
              <ChatOutlinedIcon
                sx={{
                  margin:'6px',
                  borderRadius:'4px', 
                  background:'#00FA9A',
                  fontSize: 30}}></ChatOutlinedIcon>
        </Grid>
        <Grid xs={1}>
          <Menu />
        </Grid>
      </Grid>
      <Grid className={classes.main_right} xs={10}>
        <Grid container className={classes.main_right_top}>
          <Grid xs={12} className={classes.main_right_top_2}>
            <Grid
              container
              direction="row"
              className={classes.main_right_top_21}
              xs={12}
            >
              <Grid xs={5}>
                <Header></Header>
              </Grid>
              <Grid xs={3}>
                <Search></Search>
              </Grid>
              <Grid>
                <AvatarOnline></AvatarOnline>
              </Grid>
              <Grid>
                <LogAvatar container alignItems="flex-end"></LogAvatar>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              className={classes.main_right_top_22}
              xs={12}
            >
              <Grid xs={7}>
                <Chart></Chart>
              </Grid>
              <Grid xs={5}>
                <PieChart></PieChart>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.main_right_bottom}>
        <Grid xs={12} md={12} container sx={{
          height:'10vh',
          display:'flex',
          alignItem:'center',
          justifyContent:'center'
        }}>
          <Grid xs={10} md={11} sx ={{
            display: 'flex',
            justifyContent:'space-between'
          }}>
            <Grid xs={2.8} className={classes.boxItem}>
              <Grid xs={3} sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <StarsIcon/>
                </Avatar>
                </Grid>
              <Grid xs={9} sx={{marginTop:'6px'}}>
                <Grid sx={{
                  maxHeight:'4vh',
                  color:'grey'
                }}>Happy Customer</Grid>
                <Grid sx={{
                  fontWeight:"bold",
                  maxHeight:'6vh',
                  fontSize:'23px'
                }}>600</Grid>
              </Grid>
            </Grid>
            
            <Grid xs={2.8} className={classes.boxItem}>
              <Grid xs={3} sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <GppGoodIcon/>
                </Avatar>
                </Grid>
              <Grid xs={9} sx={{marginTop:'6px'}}>
                <Grid sx={{
                  maxHeight:'4vh',
                  color:'grey'
                }}>Active Customers</Grid>
                <Grid sx={{
                  fontWeight:"bold",
                  maxHeight:'6vh',
                  fontSize:'23px'
                }}>274</Grid>
              </Grid>
            </Grid>

            <Grid xs={2.8} className={classes.boxItem}>
              <Grid xs={3} sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  <OfflineBoltIcon/>
                </Avatar>
                </Grid>
              <Grid xs={9} sx={{marginTop:'6px'}}>
                <Grid sx={{
                  maxHeight:'4vh',
                  color:'grey'
                }}>Deals</Grid>
                <Grid sx={{
                  fontWeight:"bold",
                  maxHeight:'6vh',
                  fontSize:'23px'
                }}>600</Grid>
              </Grid>
            </Grid>

            <Grid xs={2.8} className={classes.boxItem}>
              <Grid xs={3} sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Avatar>
                  <AssignmentIcon />
                </Avatar>
                </Grid>
              <Grid xs={9} sx={{marginTop:'6px'}}>
                <Grid sx={{
                  fontFamily: 'Roboto',
                  maxHeight:'4vh',
                  color:'grey'
                }}>New Members</Grid>
                <Grid sx={{
                  fontWeight:"bold",
                  maxHeight:'6vh',
                  fontSize:'23px'
                }}>130</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          <Table data={items.items}></Table>
        </Grid>
     
      </Grid>
    </Grid>
  );
}

