import React from "react";
import "./Main.css";

export default props =>
<React.Fragment className="menu-area">
    <main className="content container-fluid">
        <div className="p-3 mt-3">
            {props.children}
        </div>
    </main>
</React.Fragment>
