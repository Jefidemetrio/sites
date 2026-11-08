// Directus API client for Dinâmicos
// This file handles all Directus CMS interactions

import { createDirectus, rest, readItems, readItem } from '@directus/sdk';

const DIRECTUS_URL = import.meta.env.DIRECTUS_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = import.meta.env.DIRECTUS_TOKEN || 'local-only';

// Initialize Directus client
const directus = createDirectus(DIRECTUS_URL);
const staticClient = directus.withStaticToken(DIRECTUS_TOKEN);
const restClient = directus.getRestClient();

/**
 * Get all published blog posts
 */
export async function getBlogPosts(limit = 12) {
  try {
    const posts = await restClient.items('blog_posts').readMany({
      filter: { 
        published: { _eq: true },
        featured: { _eq: true }
      },
      sort: '-published_at',
      limit: limit,
      fields: [
        'id', 'title', 'slug', 'description', 'published_at', 
        'reading_time', 'tags', 'seo_title', 'seo_description',
        'image'
      ]
    });
    
    // Transform data for frontend use
    return posts.data.map(post => ({
      ...post,
      publishedDate: new Date(post.published_at),
      slug: post.slug
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Get single blog post by slug
 */
export async function getBlogPostBySlug(slug) {
  try {
    const post = await restClient.items('blog_posts').readOne(undefined, {
      filter: { slug: { _eq: slug } },
      fields: [
        'id', 'title', 'slug', 'description', 'content', 'published_at',
        'reading_time', 'tags', 'seo_title', 'seo_description', 'image',
        'author'
      ]
    });
    
    return {
      ...post.data,
      publishedDate: new Date(post.data.published_at),
      slug: post.data.slug
    };
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all services
 */
export async function getServices() {
  try {
    const services = await restClient.items('services').readMany({
      sort: 'order',
      fields: ['id', 'title', 'slug', 'description', 'content', 'order', 'icon']
    });
    
    return services.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

/**
 * Get site settings
 */
export async function getSiteSettings() {
  try {
    const settings = await restClient.items('site_settings').readOne(1);
    return settings.data;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

/**
 * Search blog posts (for SEO/keyword research)
 */
export async function searchBlogPosts(query) {
  try {
    const results = await restClient.items('blog_posts').search(query, {
      filter: { published: { _eq: true } },
      fields: ['id', 'title', 'slug', 'description', 'tags']
    });
    
    return results.data;
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

export default {
  getBlogPosts,
  getBlogPostBySlug,
  getServices,
  getSiteSettings,
  searchBlogPosts
};