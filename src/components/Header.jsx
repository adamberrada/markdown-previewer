import React from "react";
function Header() {
    const style = {
        margin : '0 0 20px 0'
    }
    return (
        <>
            <h1 className="h1">Markdown Previewer</h1>
            <hr style={style} />
        </>
    )
}
export default Header;