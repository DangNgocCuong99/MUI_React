import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import * as React from "react";

export default function InputAdornments() {
  const [values, setValues] = React.useState({});
  return (
    <Box sx={{ marginTop:'5px', display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl>
          <InputLabel>Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            label="Amount"
            size="small"
          />
        </FormControl>
          <Badge sx={{marginLeft:'14px', marginTop:'8px'}} color="secondary" variant="dot">
            <MailIcon />
            <NotificationsIcon />
          </Badge>

      </div>
    </Box>
  );
}
