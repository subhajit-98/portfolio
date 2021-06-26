import React, { useState } from "react"
import {Link} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, MenuList, MenuItem, ListItemIcon, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import MicIcon from '@material-ui/icons/Mic';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './Menu.css';

const Menu = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <AppBar position="static" className="menu_background">
                <Toolbar>
                    <IconButton edge="start" aria-label="menu" className="menu_icon" onClick={() => { setMenu(!menu) }} >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={menu} onClose={() => { setMenu(!menu) }}>
                        
                {/* <div style={{minWidth: '200px'}}>asdas</div> */}
                <MenuList className="menuList">
                    <Link to="/about">
                        <MenuItem>
                            <ListItemIcon>
                                <InfoIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">About Me</Typography>
                        </MenuItem>
                    </Link>
                </MenuList>
                <MenuList className="menuList">
                    <Link to="/work-experience">
                        <MenuItem>
                            <ListItemIcon>
                                <WorkIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Work Experience </Typography>
                        </MenuItem>
                    </Link>
                </MenuList>
                <MenuList className="menuList">
                    <Link to="/contact">
                        <MenuItem>
                            <ListItemIcon>
                                <ContactMailIcon fontSize="small"  style={{color: 'white'}} />
                            </ListItemIcon>
                            <Typography variant="inherit">Contact </Typography>
                        </MenuItem>
                    </Link>
                </MenuList>
            </Drawer>
        </>
    )
}

export default Menu