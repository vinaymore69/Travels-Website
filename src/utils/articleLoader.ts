import { Language } from '@/contexts/LanguageContext';

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'quote';
  text: string;
  level?: number;
  author?: string;
}

interface ArticleContent {
  title: string;
  heroAlt: string;
  content: ContentBlock[];
}

// Cache for loaded articles
const articleCache: Record<string, ArticleContent> = {};

export const getArticleContent = async (slug: string, language: Language): Promise<ArticleContent | null> => {
  const cacheKey = `${slug}-${language}`;
  
  if (articleCache[cacheKey]) {
    return articleCache[cacheKey];
  }

  try {
    // Map slug to file names (you can expand this mapping as needed)
    const slugToFileMap: Record<string, string> = {
      'matheran-hill-getaway': 'matheran',
      'mahabaleshwar-tour': 'mahabaleshwar',
      'shirdi-pilgrimage': 'shirdi',
      'trimbakeshwar-yatra': 'trimbakeshwar',
      'goa-beach-tour': 'goa',
      'konkan-coast-tour': 'konkan',
      'ajanta-ellora-tour': 'ajanta-ellora',
      'kolhapur-heritage-tour': 'kolhapur',
      'rajmachi-trek': 'rajmachi',
      'kalsubai-trek': 'kalsubai',
      'bhandardara-tour': 'bhandardara',
      'pandharpur-yatra': 'pandharpur',
      'tarkarli-beach': 'tarkarli',
      'raigad-fort-tour': 'raigad',
      'harishchandragad-trek': 'harishchandragad',
      'discover-india-private-tours': 'discover-india',
      'hill-stations-getaways': 'hill-stations',
      'spiritual-pilgrimage-tours': 'spiritual-tours',
      'beach-coastal-holidays': 'beach-holidays',
      'heritage-cultural-tours': 'heritage-tours',
      'adventure-nature-tours': 'adventure-tours'
    };

    const fileName = slugToFileMap[slug];
    if (!fileName) {
      return null;
    }

    const content = await import(`@/locales/articles/${language}/${fileName}.json`);
    const articleContent = content.default as ArticleContent;
    
    // Cache the loaded content
    articleCache[cacheKey] = articleContent;
    
    return articleContent;
  } catch (error) {
    console.warn(`Failed to load article content: ${slug} in language ${language}`, error);
    return null;
  }
};