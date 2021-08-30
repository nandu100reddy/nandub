import React from "react";
import FeedBlock from "./view/FeedBlock";
import { apiData } from "./apiData.json";

const Post = (props) => {
  return (
    <>
      <div>
        <div class="panel">
          <div class="panel-body">
            <textarea
              class="form-control"
              rows="2"
              placeholder="What are you thinking?"
            ></textarea>
            <div class="mar-top clearfix">
              <button class="btn btn-sm btn-primary pull-right" type="submit">
                <i class="fa fa-pencil fa-fw"></i> Share
              </button>
            </div>
          </div>
        </div>

        {/* Comment cards */}
        {apiData.map((value) => {
          return (
            <FeedBlock
              userImg={value.userImg}
              userName={value.userName}
              time={value.time}
              post={value.post}
              likeCounter={value.likeCounter}
              commentCounter={value.commentCounter}
              nestedBlock={value.nestedBlock}
              isLiked={value.isLiked}
            />
          );
        })}
      </div>
    </>
  );
};

export default Post;
