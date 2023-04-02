import React from "react";
import { Label } from "./Label";

export default {
  title: "COMPONENTS/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  componentName: "name",
  label: "Enter your name",
};

export const Secondary = Template.bind({});
Secondary.args = {
  componentName: "pwd",
  label: "Enter your password",
};
