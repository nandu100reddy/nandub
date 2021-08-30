import React, { useState, useEffect } from "react";
import { BiLike, AiFillLike } from "react-icons/all";

function MediaBlock({
  userImg,
  userName,
  time,
  post,
  likeCounter,
  commentCounter,
  isLiked,
}) {
  const [like, setLike] = useState(isLiked);
  const [isReply, setIsReply] = useState(false);
  const [likeCount, setLikeCount] = useState(likeCounter);

  return (
    <div class="media-block">
      <div class="media-left">
        <img class="img-sm" alt="Profile Picture" src={userImg}></img>
      </div>
      <div class="media-body">
        <div class="mar-btm">
          <div class="btn-link text-semibold media-heading box-inline">
            {userName}
          </div>
          <p class="text-muted text-sm">
            <i class="fa fa-mobile fa-lg"></i> - {time}
          </p>
        </div>
        <p>{post}</p>
        <div class="pad-ver">
          <div class="btn-group">
            <div
              class="btn btn-sm btn-default btn-hover-primary"
              onClick={() => {
                setLikeCount(like ? likeCount - 1 : likeCount + 1);
                setLike(!like);
              }}
            >
              {like ? <AiFillLike /> : <BiLike />} {likeCount} Like this!
            </div>
            <button
              class="btn btn-sm btn-default btn-hover-primary"
              onClick={() => {
                setIsReply(!isReply);
              }}
            >
              Reply
            </button>
          </div>
          <div>
            {isReply && (
              <div class="social-comment">
                {/* <img
                    alt="image"
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  /> */}
                <div class="media-body">
                  <textarea
                    class="form-control"
                    placeholder="Write comment..."
                  ></textarea>
                </div>
              </div>
            )}
          </div>
          {/* <div class="btn btn-sm btn-default btn-hover-primary">Comment</div> */}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default MediaBlock;
