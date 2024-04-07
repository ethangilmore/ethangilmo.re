import React from "react";
import NavMenuItem from "@/components/NavMenuItem";

function NavMenu() {
  return (
      <div className="py-32 flex justify-around">
        <h1 className="text-4xl caret-transparent">Ethan Gilmore</h1>
        <div className="flex space-x-8 text-xl">
          <NavMenuItem text="~/" href="/"/>
          <NavMenuItem text="~/projects" href="/projects"/>
          <NavMenuItem text="~/resume" href="/resume"/>
          <NavMenuItem text="~/contact" href="/contact"/>
        </div>
      </div>
  )
}

export default NavMenu;
