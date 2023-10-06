import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/constants";
import Header from "../../components/header/Header";
import { LabedditContext } from "../../global/LabedditContext";
import { WrapperPost } from "./styled";
import { useNavigate } from "react-router-dom";
import CardPosts from "../../components/cards/card-message/CardPost";
import TypeContentPosts from "../../components/cards/type-content/TypeContentPosts";

export default function Post() {
  const navigate = useNavigate()
  const context = useContext(LabedditContext)

  const [isLoading, setIsLoading] = useState()

  const [posts, setPosts] = useState()

  const [editing, setEditing] = useState(null)
  
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const token = context.getToken() || "not-loged"
    setIsLoading(true)
    try {
      const res =
        await axios
          .get(BASE_URL + "/posts", {
            headers: {
              Authorization: token
            }
          })
      setPosts(res.data);
    } catch (error) { }
    finally{
      setIsLoading(false)
    }
  };

  
  return (
    <>
      <Header />
      <WrapperPost>
        <TypeContentPosts />
        {
          isLoading ? <img src="/image/loading.gif"></img> :

            posts?.map(post => CardPosts(
              post,
              context,
              posts, setPosts,
              navigate,
              editing, setEditing))
        }
      </WrapperPost>
    </>
  )
}

export function infoLikes(post) {
  console.log(post.likes, "-", post.dislikes)
}

export const handlePostComment = (e, setEditing) => {
  setEditing(prevState => ({
    ...prevState,
    content: e
  }))
}
export const updateLocalStatusLike = (post, action, posts, setPosts) => {
  const postId = post.id ? post.id : no
  const statusLiked = post.liked ? post.liked : no
  let newLikes = post.likes ? post.likes : 0
  let newDislikes = post.dislikes ? post.dislikes : 0

  if (!postId) return
  let newLiked
  if (statusLiked == "no") {
    newLiked = action
    if (action === "like") {
      newLikes++
    } else {
      newDislikes++
    }
  } else if (statusLiked === action) {
    newLiked = "no"
    if (statusLiked === "like") {
      newLikes--
    } else {
      newDislikes--
    }
  } else if (statusLiked === "dislike") {
    newLiked = "like"
    newLikes++
    newDislikes--
  } else {
    newLiked = "dislike"
    newLikes--
    newDislikes++
  }
  const updatedPosts = posts.map((post) => {
    if (post.id === postId) {
      return {
        ...post, liked: newLiked,
        likes: newLikes,
        dislikes: newDislikes
      }
    }
    return post
  });
  setPosts(updatedPosts)

}