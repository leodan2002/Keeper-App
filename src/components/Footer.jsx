import React from 'react'


const currentYear = new Date().getFullYear();
function Footer() {
    return (
        <footer>
            Made by An Hoang <br/>
            Copyright © {currentYear}
        </footer>
    )
}

export default Footer
