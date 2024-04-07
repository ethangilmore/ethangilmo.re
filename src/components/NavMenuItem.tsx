'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMenuItemProps {
  text: string;
  href: string;
}

function NavMenuItem(props: NavMenuItemProps) {
  const { text, href } = props;
  const [clicked, setClicked] = React.useState(false);
  const currentPath = usePathname();

  const selected = currentPath === href;

  return (
    <Link href={href} className="h-full flex items-end" onClick={() => setClicked(true)}>
      <h1 className={"group transition duration-500 first-letter:text-red-400 caret-transparent"}>
        {text}
        <span className={`block ${selected ? "max-w-full" : "max-w-0"} group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-400`}></span>
      </h1>
    </Link>
  )
}

export default NavMenuItem;
