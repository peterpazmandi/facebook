import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import Badge from '@mui/material/Badge';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }} >
                    Navbar
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search >
                    <InputBase placeholder="Search..." />
                </Search>
                <Icons >
                    <Badge badgeContent={2} color="error" >
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error" >
                        <Notifications />
                    </Badge>
                    <Avatar
                        onClick={e => setOpen(true)}
                        sx={{ width: 30, height: 30 }} />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} />
                    <Typography variant="body1">Péter</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar