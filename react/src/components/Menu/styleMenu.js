import { makeStyles } from '@mui/styles';


const styleLeftBar = makeStyles(() => ({
    background: {
        height: '100vh',
    },

    icon: {
        fontSize: "medium",
        color: "white",
    },
    title: {
        fontFamily: 'Roboto',
        color: "white",

    },
    menuItem: {
        "&:hover": {
            backgroundColor: '#5591f5',
            color: 'blue'
        },
        borderRadius: '5px',
        height: "8vh",
        display: "flex",
        justifyContent: "space-between",
    }

}))

export default styleLeftBar