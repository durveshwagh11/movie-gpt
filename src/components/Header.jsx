import React from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled('header')({
  opacity: 0.6,
  backgroundColor: '#141414',
  color: 'white', // Background color
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  position: 'fixed', // Changed to fixed
  top: 0, // Ensure it stays at the top
  width: '100%',
  zIndex: 1000, // Ensure it stays above other elements
});

const Logo = styled('img')({
  width: '100px',
});

const MenuItemStyled = styled(MenuItem)({
  color: 'white',
});

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error);
      navigate("/error");
    });
  };

  return (
    <HeaderContainer>
      {/* Logo */}
      <Logo
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      
      {/* Account Icon */}
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        style={{ color: 'white' }} // Icon color
      >
        <AccountCircle />
      </IconButton>

      {/* Menu */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#141414', // Background color of the menu
            color: 'white',
          },
        }}
      >
        <MenuItemStyled onClick={handleClose}>Profile</MenuItemStyled>
        <MenuItemStyled onClick={() => { handleClose(); handleSignOut(); }}>Sign Out</MenuItemStyled>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
