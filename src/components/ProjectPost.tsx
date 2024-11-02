'use client';
import React from "react";
import Link from "next/link";
import { Project } from "@/utilities/getProjects";
import IconLink from "@/components/IconLink";

interface ProjectPostProps {
  project: Project;
}

function ProjectPost(props: ProjectPostProps) {
  const { project: post } = props;
  return (
    <div>
      <div className="flex space-x-4">
        <Link  href={post.slug} key={post.slug}>
          <text className="text-4xl">{post.title}</text>
        </Link>
        <IconLink icon="/ethangilmo.re/Github_white.svg" href={post.github} />
      </div>
      <div className="mb-12">
        <Link  href={post.slug} key={post.slug}>
          <text className="bg-red-400">{post.description}</text>
        </Link>
      </div>
    </div>
  )
}

export default ProjectPost;

