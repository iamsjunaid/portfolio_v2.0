import articles from '@/lib/articles.json'

import ArticleItem from '@/components/ArticleItem'

import { ArticleType } from '@/lib/types'

const ArticlesList = () => {
  return (
    <div className= 'sm:py-8'>
      <div className='ml-4 mt-4'>
        <p className='section-header sm:ml-8 mt-4'>Articles</p>
        <p className="text-sm sm:ml-8">
          Apart from my projects, I also write articles on various topics related to technology, programming, and web development. Check it out here<br />
          <br />
        </p>
      </div>
      <div className='flex justify-around flex-wrap px-4 py-8 gap-4 rounded'>
        {articles.map((article: ArticleType) => (
          <ArticleItem key={article.title} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticlesList
