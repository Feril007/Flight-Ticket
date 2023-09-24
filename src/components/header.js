import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import '../Css/oneway.css'
export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar className="header" ><h3>Easy Flights</h3></Toolbar>
        </AppBar>
    );
}
