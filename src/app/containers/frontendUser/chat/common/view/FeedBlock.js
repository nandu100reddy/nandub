import React, { useState } from "react";

import { FaRegComment } from "react-icons/fa";
import { BiLike, AiFillLike } from "react-icons/all";
import MediaBlock from "./MediaBlock";

function FeedBlock({
  userImg,
  userName,
  time,
  post,
  likeCounter,
  commentCounter,
  nestedBlock,
  isLiked,
}) {
  const [like, setLike] = useState(isLiked);
  const [isReply, setIsReply] = useState(false);
  const [likeCount, setLikeCount] = useState(likeCounter);
  return (
    <div class="panel">
      <div class="panel-body">
        <div class="media-block">
          <div class="media-left">
            <img class="img-sm" alt="Profile Picture" src={userImg} />
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
                  {like ? <AiFillLike /> : <BiLike />} {likeCount} Like this !
                </div>
              </div>
              <div class="btn btn-sm btn-default btn-hover-primary">
                <FaRegComment /> {commentCounter} Comment
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
                  <div class="media-body">
                    <textarea
                      class="form-control"
                      placeholder="Write comment..."
                    ></textarea>
                  </div>
                </div>
              )}
            </div>
            <hr />

            <div>
              {nestedBlock.map((value) => (
                <MediaBlock
                  userImg={value.userImg}
                  userName={value.userName}
                  time={value.time}
                  post={value.post}
                  likeCounter={value.likeCounter}
                  isLiked={value.isLiked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBlock;
