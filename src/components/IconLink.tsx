'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavMenuItemProps {
  icon: string;
  href: string;
}

function IconLink(props: NavMenuItemProps) {
  const { icon, href } = props;

  return (
    <Link href={href}>
      <Image src={icon} alt="Contact us" width={32} height={32} />
    </Link>
  )
}

export default IconLink;

