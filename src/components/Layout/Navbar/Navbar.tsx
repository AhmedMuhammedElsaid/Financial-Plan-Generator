import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Nav = () => {
  return (
    <>
      <Navbar bg="primary">
        <NavbarBrand href="/">
          <img
            src="https://images.wuzzuf-data.net/files/company_logo/Xpovi-Egypt-67730-1630431973.png"
            alt="Xpovi-Egypt-logo"
            width="80"
          />
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Nav;
