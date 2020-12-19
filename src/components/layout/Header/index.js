import React from "react";

import { Avatar } from "@material-ui/core";
import { AccessTimeOutlined, SearchOutlined, HelpOutlineOutlined } from "@material-ui/icons";

import "./style.css";
import { useStateValue } from "../../../state/StateProvider";

function Header() {
    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeOutlined />
            </div>
            <div className="header__search">
                <SearchOutlined />
                <input placeholder="Search" />
            </div>
            <div className="header__right">
                <HelpOutlineOutlined />
            </div>
        </div>
    );
};

export default Header;
