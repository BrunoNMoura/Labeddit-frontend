import { handlePostComment, infoLikes, updateLocalStatusLike } from "../../../pages/posts/PostPage"
import { handleComments } from "../../../router/cordinator"
import * as s  from "./styled"

// renderiza CARD contendo texto do POST
export default function CardPosts(post, context, posts, setPosts, navigate, editing, setEditing) {

  const { deletePostComment, reload, setReload } = context

  return (
    <s.ContainerMessage key={post.id}>
      <s.ContainerUser>
        <s.TextUserCreator>
          Enviado por: {post.creator.name}
        </s.TextUserCreator>

        {
          !editing  
          && post.creator.id == context.userLoged.userId 
          && window.location.href.includes("posts") 
          && ( 
            <s.ContainerButtonEdit>
              <s.ButtonEditPostComment
                onClick={() => { setEditing(post) }} />
              <s.ButtonDeletePostComment
                onClick={() => { deletePostComment({ postId: post.id, action: "posts" }) }}
              />
            </s.ContainerButtonEdit>
          )
        }
        {
          editing 
          && post.creator.id == context.userLoged.userId 
          && post.id == editing.id 
          && ( 
            <s.ContainerButtonEdit>
              <s.ButtonConfirm 
                onClick={() => {
                  context.editPostComment(
                    {
                      postId: editing.id,
                      content: editing.content,
                      action: "posts"
                    }
                  )
                  setEditing(null)
                }}
              />
              <s.ButtonCancel 
                onClick={
                  () => { setEditing(null) }}
              />
            </s.ContainerButtonEdit>
          )
        }
      </s.ContainerUser>
      <s.MessageContent>
        {          
          editing && post.id == editing.id
            ? (
              <s.TextArea
                id="content"
                name="content"
                value={editing.content}
                onChange={(e) => handlePostComment(e.target.value, setEditing)}
                min="1"
                required>
              </s.TextArea>
            )
            : ( 
              <>{post.content}</>
            )
        }
      </s.MessageContent>
      <s.MessageStatus>
        <s.ContainerButtonLiked>
          <s.ButtonLike
            onClick={async () => {
              const result = await context.sendLike(post.id, "posts", true)
              if (result) {

                updateLocalStatusLike(post, "like", posts, setPosts)
              }
            }}
            $applyfilter={post.liked === "like" ? "true" : null}
          />
          <s.Score onMouseOver={() => infoLikes(post)}>{post?.likes - post?.dislikes}</s.Score>
          <s.ButtonDislike
            onClick={async () => {
              const result=await context.sendLike(post.id, "posts", false)
              if (result) {
                updateLocalStatusLike(post, "dislike", posts, setPosts)
              }
            }}
            $applyfilter={post.liked === "dislike" ? "true" : null}
          />
        </s.ContainerButtonLiked>

        <s.ContainerButtonComment>
          <s.ButtonComment
            onClick={() => {
              const postSelected = [post]
              context.setPostSelect(postSelected)
              handleComments(navigate)
            }}
          />
          <s.Score>{post.comments > 0 ? post.comments : 0}</s.Score>
        </s.ContainerButtonComment>
      </s.MessageStatus>
    </s.ContainerMessage >
  )
}
