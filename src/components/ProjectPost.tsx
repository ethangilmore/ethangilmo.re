'use client';
import React from "react";
import Link from "next/link";
import { Project } from "@/utilities/getProjects";

interface ProjectPostProps {
  project: Project;
}

function ProjectPost(props: ProjectPostProps) {
  const { project: post } = props;
  return (
    <Link href={post.slug} key={post.slug}>
      <div>
        <text className="text-4xl">{post.title}</text>
      </div>
      <div className="mb-16">
        <text>{post.description}</text>
      </div>
    </Link>
  )
}

export default ProjectPost;

