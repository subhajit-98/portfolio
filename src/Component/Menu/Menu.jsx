import React, { useState } from "react"
import {NavLink} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, MenuList, MenuItem, ListItemIcon, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExtensionRoundedIcon from '@material-ui/icons/ExtensionRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import MarkunreadMailboxRoundedIcon from '@material-ui/icons/MarkunreadMailboxRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import HomeIcon from '@material-ui/icons/Home';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import './Menu.css';

const Menu = (props) => {
    const [menu, setMenu] = useState(false);
    // const [isDayTheme, setisDayTheme] = useState(false);

    /*const changeTheme = () => {
        setisDayTheme(!isDayTheme)
        localStorage.removeItem('IsDayTheme');
        localStorage.setItem('IsDayTheme', !isDayTheme);
    }*/
    return (
        <>
            <AppBar position="fixed" className="menu_background">
                <Toolbar>
                    <IconButton edge="start" aria-label="menu" className="menu_icon" onClick={() => { setMenu(!menu) }} >
                        <MenuIcon />
                    </IconButton>
                    {/* <Box flexDirection="row-reverse" display={{ xs: 'none', sm: 'none', md: 'block' }} className="header_nav_items">
                        <NavLink to="/" exact>
                            <HomeIcon fontSize="small"  style={{color: 'white'}} />
                            <Typography variant="inherit">Home</Typography>
                        </NavLink>
                    </Box> */}
                    <div className="header_nav_items">
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                            <NavLink to="/" exact>
                                <Typography variant="inherit">Home</Typography>
                            </NavLink>
                            <NavLink to="/about">
                                <Typography variant="inherit">About Me</Typography>
                            </NavLink>
                            <NavLink to="/projects">
                                <Typography variant="inherit">Projects</Typography>
                            </NavLink>
                            {/* <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                                <NavLink to="/work-experience">
                                    <MenuItem>
                                        <ListItemIcon>
                                            <WorkIcon fontSize="small"  style={{color: 'white'}} />
                                        </ListItemIcon>
                                        <Typography variant="inherit">Work Experience </Typography>
                                    </MenuItem>
                                </NavLink>
                            </MenuList> */}
                            <NavLink to="/education">
                                <Typography variant="inherit">Education </Typography>
                            </NavLink>
                            <NavLink to="/blog">
                                <Typography variant="inherit">Blog </Typography>
                            </NavLink>
                            <NavLink to="/contact">
                                <Typography variant="inherit">Contact </Typography>
                            </NavLink>
                        </Box>
                        
                    </div>
                    <Box className="theme_changer">
                        {/* {(!isDayTheme) ? <WbSunnyRoundedIcon onClick={() => (changeTheme())} /> : <Brightness2RoundedIcon  onClick={() => (changeTheme())} />} */}
                        {(!props.curentDayTheme) ? <WbSunnyRoundedIcon onClick={props.changetheme} /> : <Brightness2RoundedIcon  onClick={props.changetheme} />}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={menu} onClose={() => { setMenu(!menu) }}>
                        
                {/* <div style={{minWidth: '200px'}}>asdas</div> */}
                <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                    <NavLink to="/" exact>
                        <MenuItem>
                            <ListItemIcon>
                                {/* <AppsRoundedIcon fontSize="small"  style={{color: 'white'}} /> */}
                                <HomeIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Home</Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList>
                <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                    <NavLink to="/about">
                        <MenuItem>
                            <ListItemIcon>
                                <InfoIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">About Me</Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList>
                <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                    <NavLink to="/projects">
                        <MenuItem>
                            <ListItemIcon>
                                <ExtensionRoundedIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Projects</Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList>
                {/* <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                    <NavLink to="/work-experience">
                        <MenuItem>
                            <ListItemIcon>
                                <WorkIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Work Experience </Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList> */}
                <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                    <NavLink to="/education">
                        <MenuItem>
                            <ListItemIcon>
                                <SchoolRoundedIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Education </Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList>
                <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                    <NavLink to="/blog">
                        <MenuItem>
                            <ListItemIcon>
                                <MarkunreadMailboxRoundedIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Blog </Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList>
                <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                    <NavLink to="/contact">
                        <MenuItem>
                            <ListItemIcon>
                                <ContactMailIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Contact </Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList>
            </Drawer>
            <div style={{width: "100%", height: "66px"}}></div>
        </>
    )
}

export default Menu