import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "@mui/material";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Tabs>
          <Tab
            label="首頁"
            component={Link}
            href="/"
            sx={{ typography: "h6", fontWeight: 400 }}
          />
          <Tab
            label="自介"
            component={Link}
            href="/about/"
            sx={{ typography: "h6", fontWeight: 400 }}
          />
          <Tab
            label="專案"
            component={Link}
            href="/projects/"
            sx={{ typography: "h6", fontWeight: 400 }}
          />
        </Tabs>
      </div>
    </nav>
  );
}

export default Navbar;
