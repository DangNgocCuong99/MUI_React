import Box from '@mui/material/Box';
export function Item(props) {
    const { sx, ...other } = props;
    console.log(other.children, 'day la data')
    if (other.children === "Lost Client") {
        return (
            <Box
                sx={{
                    // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    // color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                    // border: '1px solid',
                    // borderColor: (theme) =>
                    //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    p: 1,
                    m: 1,
                    borderRadius: 5,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    background: "pink",
                    color:'red',
                    textAlign: 'center',
                    marginTop:1.9,
                    ...sx,
                }}
                {...other}
            />
        )

    }
    if (other.children === "New Lead") {
        return (
            <Box
                sx={{
                    // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    // color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                    // border: '1px solid',
                    // borderColor: (theme) =>
                    //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    p: 1,
                    m: 1,
                    borderRadius: 5,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    bgcolor: 'info.main',
                    color: 'blue',
                    opacity: 0.75,
                    textAlign: 'center',
                    marginTop:1.9,
                    ...sx,
                }}
                {...other}
            />
        )

    }
    if (other.children === "Converted") {
        return (
            <Box
                sx={{
                    // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    // color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                    // border: '1px solid',
                    // borderColor: (theme) =>
                    //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    p: 1,
                    m: 1,
                    borderRadius: 5,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    bgcolor: 'success.main',
                    color: 'black',
                    opacity: 0.77,
                    textAlign: 'center',
                    marginTop:1.9,
                    ...sx,
                }}
                {...other}
            />
        )

    }
}
export function Pagination(){
    
}
