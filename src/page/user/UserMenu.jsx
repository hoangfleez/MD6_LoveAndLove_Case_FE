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
=========
import {useNavigate} from "react-router-dom";
// import { updateUser } from '../../redux/authSlice';

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
>>>>>>>>> Temporary merge branch 2

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    handleCloseUserMenu();
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