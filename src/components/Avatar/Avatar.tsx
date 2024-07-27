import React from "react";
import "./Avatar.css";

export interface AvatarProps {
  size?: "small" | "medium" | "large";
  alt?: string;
  src?: string;
}

const getSizeClass = (size: string) => {
  switch (size) {
    case "small":
      return "avatar--small";
    case "large":
      return "avatar--large";
    case "medium":
    default:
      return "avatar--medium";
  }
};

export const Avatar: React.FC<AvatarProps> = ({
  size = "medium",
  alt,
  src,
}) => {
  return (
    <div className={`avatar ${getSizeClass(size)}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="avatar-placeholder" />
      )}
    </div>
  );
};
