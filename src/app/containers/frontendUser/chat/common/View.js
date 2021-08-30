import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
// import List from "./common/List";
// import View from "./common/View";
// import Create from "./common/Create";
import { Tabs, Tab } from "react-bootstrap";
import { FaRegComment } from "react-icons/fa";
import { BiLike, AiFillLike } from "react-icons/all";

const apiData = [
  {
    userImg: "https://bootdey.com/img/Content/avatar/avatar2.png",
    userName: "Parent post",
    time: "16 min ago",
    post: "First Post Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    likeCounter: 12,
    isLiked: false,
    commentCounter: 3,
    nestedBlock: [
      {
        userImg: "https://bootdey.com/img/Content/avatar/avatar2.png",
        userName: "Milan srivatava",
        time: "7 min ago",
        post: "First Post Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        likeCounter: 12,
        isLiked: false,
        commentCounter: 3,
      },
      {
        userImg: "https://bootdey.com/img/Content/avatar/avatar3.png",
        userName: "Second user",
        time: "15 min ago",
        post: "Reply Post Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        likeCounter: 14,
        isLiked: true,
        commentCounter: 6,
      },
    ],
  },
  {
    userImg: "https://bootdey.com/img/Content/avatar/avatar2.png",
    userName: "Parent second post",
    time: "10 min ago",
    post: "First Post Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    likeCounter: 7,
    isLiked: true,
    commentCounter: 13,
    nestedBlock: [
      {
        userImg: "https://bootdey.com/img/Content/avatar/avatar2.png",
        userName: "Harry",
        time: "25 min ago",
        post: "First Post Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        likeCounter: 42,
        isLiked: false,
        commentCounter: 23,
      },
      {
        userImg: "https://bootdey.com/img/Content/avatar/avatar3.png",
        userName: "Second user",
        time: "45 min ago",
        post: "Reply Post Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        likeCounter: 14,
        isLiked: true,
        commentCounter: 6,
      },
    ],
  },
];
const View = (props) => {
  const MediaBlock = ({
    userImg,
    userName,
    time,
    post,
    likeCounter,
    commentCounter,
    isLiked,
  }) => {
    const [like, setLike] = useState(isLiked);
    const [isReply, setIsReply] = useState(false);
    const [likeCount, setLikeCount] = useState(likeCounter);

    return (
      <div class="media-block">
        <div class="media-left">
          <img
            class="img-circle img-sm"
            alt="Profile Picture"
            src={userImg}
          ></img>
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
  };

  const FeedBlock = ({
    userImg,
    userName,
    time,
    post,
    likeCounter,
    commentCounter,
    nestedBlock,
    isLiked,
  }) => {
    const [like, setLike] = useState(isLiked);
    const [isReply, setIsReply] = useState(false);
    const [likeCount, setLikeCount] = useState(likeCounter);
    return (
      <div class="panel">
        <div class="panel-body">
          <div class="media-block">
            <div class="media-left">
              <img
                class="img-circle img-sm"
                alt="Profile Picture"
                src={userImg}
              />
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
                  {/* <div class="btn btn-sm btn-default btn-hover-success">
                    <i class="fa fa-thumbs-up"></i>
                  </div> */}
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
  };

  const Post = () => {
    return (
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
    );
  };

  return (
    <>
      <div className="chat">
        <Tabs defaultActiveKey="post" id="chat-tab">
          <Tab eventKey="post" title="Post">
            <Post />
          </Tab>
          <Tab eventKey="poll" title="Poll" disabled>
            Poll
          </Tab>
          <Tab eventKey="question" title="Question" disabled>
            Question
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default View;
