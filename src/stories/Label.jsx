import React from "react";
import PropTypes from "prop-types";
import "./label.css";

export const Label = ({ label, componentName }) => (
  <label for={componentName}>{label}</label>
);

Label.propTypes = {
  componentName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
