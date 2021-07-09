import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings'
import HelpOutlineIcon from '@material-ui/icons/HelpOutlineOutlined'
import AppsIcon from '@material-ui/icons/Apps';
import { ArchiveRounded } from '@material-ui/icons';

const Header = (props) => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://cdn.iconscout.com/icon/free/png-256/google-drive-16-761605.png" alt="pic unavailave"/>
                <p>Drive</p>
            </div>
            <div className="header_searchContainer">
                <div className="header_searchBar">
                    <SearchIcon />
                    <input type="text" placeholder="Search.."/>
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header_icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img src={props.userPhoto} alt="s"/>
                <p>{`Welcome ${props.userName}`}</p>
            </div>
        </div>
    )
} 

export default Header




























