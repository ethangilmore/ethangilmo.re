'use client';
import React from "react";
import NavMenuItem from "@/components/NavMenuItem";

function NavMenu() {
  return (
      <div className="md:flex md:justify-between mb-16">
        <text className="text-4xl text-center caret-transparent">Ethan Gilmore</text>
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
