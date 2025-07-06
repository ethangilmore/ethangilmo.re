'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/utilities/getProjects";

interface ProjectPostProps {
  project: Project;
}

function ProjectPost(props: ProjectPostProps) {
  const { project: post } = props;
  return (
    <div>
      <Link className="inline-block" href={post.github} key={post.slug}>
        <div className="flex space-x-4">
          <p className="text-4xl">{post.title}</p>
          <Image src={"/Github_white.svg"} className="hidden dark:block" alt="Github" width={28} height={28} />
          <Image src={"/Github_dark.svg"} className="dark:hidden" alt="Github" width={28} height={28} />
        </div>
        <div className="mt-1 mb-12 px-1 w-fit bg-accent">
          <p>{post.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectPost;

