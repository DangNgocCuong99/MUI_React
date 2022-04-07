import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';



export default function GroupAvatars() {
  return (
    <AvatarGroup sx={{paddingLeft: "70px"}} max={4}>
      <Avatar  alt="Remy Sharp" src="" />
      <Avatar alt="Travis Howard" src="" />
      <Avatar alt="Cindy Baker" src="" />
      <Avatar alt="Agnes Walker" src="" />
      <Avatar alt="Trevor Henderson" src="" />
    </AvatarGroup>
  );
}
