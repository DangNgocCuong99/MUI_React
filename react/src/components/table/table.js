import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Avatar from '@mui/material/Avatar';


import{ Item} from './styleTable'
const useStyles = makeStyles({
    table:  {
        width: '100%',
        // height: '100%',
    },
    tablecell: {
        background:"pink", 
        borderRadius:60,
        other:"f"
    }
});



export default function SimpleTable(dulieu) {
    const rows = dulieu.data

    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width:"10%"}}>Name</TableCell>
                        <TableCell align="" >email</TableCell>
                        <TableCell align="">phone</TableCell>
                        <TableCell align="">company</TableCell>
                        <TableCell align="" style={{width:"8%",}}>status</TableCell>
                        <TableCell sx={{ width: 120 }} align="left">CRUD</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row" >
                            {/* <Avatar  alt="Remy Sharp" src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg" />  */}
                                {row.name}  
                                </TableCell>
                                <TableCell align="">{row.email}

                                </TableCell>
                                <TableCell align=""  >{row.phone}</TableCell>
                                <TableCell align="">{row.company}</TableCell>
                                {/* <TableCell align="center" className={classes.tablecell} > */}
                                    <Item>
                                        {row.status}
                                    </Item>
                                {/* </TableCell> */}
                                
                                <TableCell align="left">
                                            <ChatBubbleOutlineIcon style={{color:"green"}}/>
                                            <EditIcon style={{color:"blue", opacity:0.8}}/>
                                            <DeleteOutlineIcon style={{color:"red", opacity:0.8}}/>
                                            {/* {row._id} */}
                                        </TableCell>
                            </TableRow>
                        ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 63 * emptyRows }}>
                            {/* <TableCell colSpan={6} /> */}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <TablePagination
                rowsPerPageOptions={[3, 4, 5]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}
