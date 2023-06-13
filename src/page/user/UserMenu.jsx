import { Logout, Settings } from '@mui/icons-material';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/useService';
import {useNavigate} from "react-router-dom";

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector(({ user }) => {
  //   return user.currentUser;
  // });

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    handleCloseUserMenu();
    window.location.reload(); // Reloads the current page
  };

  const handleProfile = () => {
    navigate("profile")
  }


  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem onClick={handleProfile}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;