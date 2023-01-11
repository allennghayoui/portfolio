import React from "react";

function Footer() {
    return (
        <div id="footer" className="pb-5 pt-20 text-center dark:text-stone-300">
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Allen Nghayoui.
                All rights reserved.
            </p>
        </div>
    )
}

export default Footer;