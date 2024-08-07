import fs from "fs";
import path from "path";

const appDirectory = path.join(process.cwd(), "src", "app");

export interface Project {
  title: string;
  description: string;
  slug: string;
  github: string;
}

export function getProjects(directory: string): Project[] {
  let posts: Project[] = [];
  const items = fs.readdirSync(directory, { withFileTypes: true });

  items.forEach((item) => {
    if (item.isDirectory()) {
      posts = posts.concat(getProjects(path.join(directory, item.name)));
    } else if (item.name.endsWith(".json")) {
      const post = JSON.parse(
        fs.readFileSync(path.join(directory, item.name), "utf8"),
      ) as Project;
      post.slug = path.join(directory).replace(appDirectory, "");
      posts.push(post);
    }
  });
  return posts;
}
