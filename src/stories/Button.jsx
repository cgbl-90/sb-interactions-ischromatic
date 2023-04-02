import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({ primary, backgroundColor, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
};
