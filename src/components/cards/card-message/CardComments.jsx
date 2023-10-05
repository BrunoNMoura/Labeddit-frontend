import {
  handlePostComment,
  infoLikes,
  updateLocalStatusLike,
} from "../../../pages/posts/PostPage";
import {
  ButtonCancel,
  ButtonConfirm,
  ButtonDeletePostComment,
  ButtonDislike,
  ButtonEditPostComment,
  ButtonLike,
  ContainerButtonComment,
  ContainerButtonEdit,
  ContainerButtonLiked,
  ContainerMessage,
  ContainerUser,
  MessageContent,
  MessageStatus,
  Score,
  TextArea,
  TextUserCreator,
} from "./styled";

export default function CardComments(
  comment,
  context,
  comments,
  setComments,
  editing,
  setEditing,
  post
) {
  const { deletePostComment } = context;
  return (
    <ContainerMessage key={comment.id}>
      <ContainerUser>
        <TextUserCreator>Enviado por: {comment?.creator.name}</TextUserCreator>
        {!editing &&
          comment.creator.id == context.userLoged.userId &&
          window.location.href.includes("comments") && (
            <ContainerButtonEdit>
              <ButtonEditPostComment
                onClick={() => {
                  setEditing(comment);
                }}
              />
              <ButtonDeletePostComment
                onClick={() => {
                  deletePostComment({ postId: comment.id, action: "comments" });
                  post.comments--;
                  setEditing(null);
                }}
              />
            </ContainerButtonEdit>
          )}
        {editing &&
          comment.creator.id == context.userLoged.userId &&
          comment.id == editing.id && (
            <ContainerButtonEdit>
              <ButtonConfirm
                onClick={() => {
                  context.editPostComment({
                    postId: editing.id,
                    content: editing.content,
                    action: "comments",
                  });
                  setEditing(null);
                }}
              />
              <ButtonCancel
                onClick={() => {
                  setEditing(null);
                }}
              />
            </ContainerButtonEdit>
          )}
      </ContainerUser>

      <MessageContent>
        {editing && comment.id == editing.id ? (
          <TextArea
            id="content"
            name="content"
            value={editing.content}
            onChange={(e) => handlePostComment(e.target.value, setEditing)}
            min="1"
            required
          ></TextArea>
        ) : (
          <>{comment?.content}</>
        )}
      </MessageContent>

      <MessageStatus>
        <ContainerButtonLiked>
          <ButtonLike
            onClick={async () => {
              const result = await context.sendLike(
                comment.id,
                "comments",
                true
              );
              if (result) {
                updateLocalStatusLike(comment, "like", comments, setComments);
              }
            }}
            $applyfilter={comment.liked === "like" ? "true" : null}
          ></ButtonLike>
          <Score onMouseOver={() => infoLikes(comment)}>
            {comment.likes - comment.dislikes}
          </Score>
          <ButtonDislike
            onClick={async () => {
              const result = await context.sendLike(
                comment.id,
                "comments",
                false
              );
              if (result) {
                updateLocalStatusLike(
                  comment,
                  "dislike",
                  comments,
                  setComments
                );
              }
            }}
            $applyfilter={comment.liked === "dislike" ? "true" : null}
          ></ButtonDislike>
        </ContainerButtonLiked>
        <ContainerButtonComment $noborder={"yes"} />
      </MessageStatus>
    </ContainerMessage>
  );
}
