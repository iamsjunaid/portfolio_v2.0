import { ArticleType } from "@/lib/types"

import Tooltip from "./Tooltip";

import { Maximize, Tag } from "lucide-react";

import PropTypes from 'prop-types';

const ArticleItem = ({ article }: { article: ArticleType }) => {
    return (
        <div className="flex flex-col bg-white shadow-lg rounded p-4 w-[36rem] gap-2">
            <div className="flex justify-around items-start">
                <div className="flex flex-col gap-2 ">
                    <h2 className="font-semibold text-sm">{article.title}</h2>
                    <p className="text-xs">{article.content}</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <Tooltip text='Medium↗'>
                        <a href={article.url} aria-describedby='tooltip-id' className="" target="_blank" rel="noreferrer">
                            <Maximize className="size-6 p-1 hover:bg-gray-100 rounded hover:text-primaryColor" />
                        </a>
                    </Tooltip>
                </div>
            </div>
            <div className="flex justify-start gap-2 items-center w-full">
                {article.tags.map((tag, index) => {
                    return (
                        <div className="flex justify-around items-center gap-2 bg-gray-600 text-white p-1 rounded" key={index}>
                            <Tag className="size-3" />
                            <p className="text-xs">{tag}</p>
                        </div>)
                })}
            </div>
        </div>
    )
}
ArticleItem.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string,
        date: PropTypes.string,
    }).isRequired,
};


export default ArticleItem
