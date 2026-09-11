export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleFAQ = {
  question: string;
  answer: string;
};

export type Article = {
  /* =========================================================
     BASIC ARTICLE INFORMATION
  ========================================================= */

  slug: string;

  title: string;

  category: string;

  type: string;

  readTime: string;

  date: string;

  excerpt: string;

  image: string;


  /* =========================================================
     ARTICLE CONTENT
  ========================================================= */

  content: {
    introduction: string;

    sections: ArticleSection[];

    takeaway?: string;

    whenToSeekHelp?: string;
  };


  /* =========================================================
     FAQ
  ========================================================= */

  faqs?: ArticleFAQ[];


  /* =========================================================
     SOURCES
  ========================================================= */

  sources?: string[];
};