import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    let articles = posts.map((post) => {
        return(
            <Article key = {post.id} title = {post.title} date = {post.date} preview = {post.preview} minutes = {post.minutes}/>
        )
    })

    return(
        <main>
            {articles}
        </main>
        
    )
}

export default ArticleList;