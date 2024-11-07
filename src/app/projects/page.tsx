import path from 'path';
import { getProjects } from '@/utilities/getProjects';
import ProjectPost from '@/components/ProjectPost';

export default function Projects() {
  const projects = getProjects(path.join(process.cwd(), 'src', 'app', 'projects'));
  return (
    <div>
      {projects.sort((a, b) => 0).map(project => (
        <ProjectPost project={project} key={project.slug}/>
      ))}
    </div>
  );
}
