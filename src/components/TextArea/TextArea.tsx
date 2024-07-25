import React from "react";
import "./textarea.css";

export interface TextAreaProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the textarea be?
   */
  size?: "small" | "medium" | "large";
  /**
   * TextArea contents
   */
  placeholder: string;
  /**
   * Optional change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextArea = ({
  primary = false,
  size = "medium",
  backgroundColor,
  placeholder,
  ...props
}: TextAreaProps) => {
  const mode = primary
    ? "storybook-textarea--primary"
    : "storybook-textarea--secondary";
  return (
    <textarea
      className={[
        "storybook-textarea",
        `storybook-textarea--${size}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      placeholder={placeholder}
      {...props}
    />
  );
};
