import React from 'react';

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'quote';
  text: string;
  level?: number;
  author?: string;
}

interface ArticleContentProps {
  content: ContentBlock[];
}

export const ArticleContentRenderer: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <>
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index}>{block.text}</p>;
          
          case 'heading':
            const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
            return <HeadingTag key={index}>{block.text}</HeadingTag>;
          
          case 'quote':
            return (
              <figure key={index} className="blockquote-big">
                <blockquote>{block.text}</blockquote>
                {block.author && <figcaption>{block.author}</figcaption>}
              </figure>
            );
          
          default:
            return null;
        }
      })}
    </>
  );
};
