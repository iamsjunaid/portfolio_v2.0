import articles from '@/lib/articles.json'

import ArticleItem from '@/components/ArticleItem'

import { ArticleType } from '@/lib/types'

const ArticlesList = () => {
  return (
    <div className='sm:px-16 sm:py-8'>
      <div >
        <p className='font-semibold'>Articles</p>
      </div>
      <div className='flex justify-around flex-wrap px-4 py-8 gap-4 w-full rounded'>
        {articles.map((article: ArticleType) => (
          <ArticleItem key={article.title} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticlesList
