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
  const currentPath = usePathname();

  const selected = currentPath === href;

  return (
    <Link href={href} className="h-full flex items-end">
      <text className={"group transition duration-500 first-letter:text-accent caret-transparent"}>
        {text}
        <span className={`block ${selected ? "max-w-full" : "max-w-0"} group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent`}></span>
      </text>
    </Link>
  )
}

export default NavMenuItem;
