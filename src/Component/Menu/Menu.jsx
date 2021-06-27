import React, { useState } from "react"
import {NavLink} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, MenuList, MenuItem, ListItemIcon, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExtensionRoundedIcon from '@material-ui/icons/ExtensionRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import MarkunreadMailboxRoundedIcon from '@material-ui/icons/MarkunreadMailboxRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import './Menu.css';

const Menu = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <AppBar position="fixed" className="menu_background">
                <Toolbar>
                    <IconButton edge="start" aria-label="menu" className="menu_icon" onClick={() => { setMenu(!menu) }} >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={menu} onClose={() => { setMenu(!menu) }}>
                        
                {/* <div style={{minWidth: '200px'}}>asdas</div> */}
                <MenuList className="menuList" onClick={() => { setMenu(!menu) }}>
                    <NavLink to="/" exact>
                        <MenuItem>
                            <ListItemIcon>
                                <AppsRoundedIcon fontSize="small"  style={{color: 'white'}} />
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
                <MenuList className="menuList">
                    <NavLink to="/projects">
                        <MenuItem>
                            <ListItemIcon>
                                <ExtensionRoundedIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Projects</Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList>
                <MenuList className="menuList">
                    <NavLink to="/work-experience">
                        <MenuItem>
                            <ListItemIcon>
                                <WorkIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Work Experience </Typography>
                        </MenuItem>
                    </NavLink>
                </MenuList>
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