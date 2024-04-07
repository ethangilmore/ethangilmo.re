import React from "react";
import NavMenuItem from "@/components/NavMenuItem";

function NavMenu() {
  return (
      <div className="p-12 md:flex md:justify-around md:py-16 lg:py-32">
        <h1 className="text-4xl text-center caret-transparent">Ethan Gilmore</h1>
        <div className="flex justify-evenly py-2 md:space-x-8 md:text-lg lg:space-x-16 lg:text-xl">
          <NavMenuItem text="~/" href="/"/>
          <NavMenuItem text="~/projects" href="/projects"/>
          <NavMenuItem text="~/resume" href="/resume"/>
          <NavMenuItem text="~/contact" href="/contact"/>
        </div>
      </div>
  )
}

export default NavMenu;
