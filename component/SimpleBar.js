import React from "react";

import SimpleBarReact from "simplebar-react";

import ListItemBar from "./ListItemBar";
export default function SimpleBar({ navbars }) {
  return (
    <div className="wrapper">
      <SimpleBarReact
        style={{
          maxHeight: "100vh",
          width: 260,
          position: "fixed",
          padding: "0px 16px",
          backgroundColor: "#ffffff",
        }}
      >
        <ListItemBar navbars={navbars} />
      </SimpleBarReact>
    </div>
  );
}
