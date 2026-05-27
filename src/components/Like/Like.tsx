import React from "react";
import { FaHeart } from "react-icons/fa6";
import styles from "./Like.module.css";

interface LikeProps {
  onClick: () => void;
  liked: boolean;
}

function Like({ onClick, liked }: LikeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={liked ? styles.heartBtnLiked : styles.heartBtnNotLiked}
    >
      <FaHeart />
    </button>
  );
}

export default Like;
