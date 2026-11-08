import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const blogDir = path.join(process.cwd() || __dirname, 'src', 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  published: Date;
  updatedDate?: Date;
  featured?: boolean;
  readingTime?: string;
  image?: string;
  tags?: string[];
  author?: {
    name: string;
    url?: string;
  };
  content: string;
  contentHtml: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  
  if (!fs.existsSync(blogDir)) {
    return posts;
  }
  
  const directories = fs.readdirSync(blogDir, { withFileTypes: true });
  const categories = directories
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  for (const category of categories) {
    const postPath = path.join(blogDir, category, 'index.md');
    
    if (fs.existsSync(postPath)) {
      const fileContents = fs.readFileSync(postPath, 'utf-8');
      const { data, content } = matter(fileContents);
      
      const contentHtml = marked(content) as string;
      
      const post: BlogPost = {
        slug: category,
        title: data.title,
        description: data.description,
        published: typeof data.pubDate === 'string' ? new Date(data.pubDate) : (data.pubDate || new Date(data.published || new Date())),
        updatedDate: data.updatedDate ? new Date(data.updatedDate) : undefined,
        featured: data.featured || false,
        readingTime: data.readingTime,
        image: data.image,
        tags: data.tags,
        author: data.author,
        content,
        contentHtml,
      };
      
      posts.push(post);
    }
  }
  
  return posts.sort((a, b) => b.published.getTime() - a.published.getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug);
}