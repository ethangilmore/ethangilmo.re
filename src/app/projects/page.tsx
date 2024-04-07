// src/app/projects/page.tsx

import fs from 'fs';
import path from 'path';
import ProjectPost from '@/components/ProjectPost';

// Define the base directory for the app
const appDirectory = path.join(process.cwd(), 'src', 'app');

interface Post {
  title: string;
  description: string;
  slug: string;
}

// Recursive function to read MDX files from nested directories
export function getPosts(directory: string) : Post[] {
  let posts: Post[] = [];
  const items = fs.readdirSync(directory, { withFileTypes: true });

  items.forEach(item => {
    if (item.isDirectory()) {
      posts = posts.concat(getPosts(path.join(directory, item.name)));
    } else if (item.name.endsWith('.json')) {
      const post = JSON.parse(fs.readFileSync(path.join(directory, item.name), 'utf8'));
      post.slug = path.join(directory).replace(appDirectory, '');
      posts.push(post);
    }
  });
  return posts;
}

// The page component that uses the posts data
export default function Projects() {
  const posts = getPosts(path.join(appDirectory, 'projects'));
  return (
    <div>
      {posts.map(post => (
        <ProjectPost post={post}/>
      ))}
    </div>
  );
}
