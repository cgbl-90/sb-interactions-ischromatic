import React from "react";
import { Button } from "./Button";

export default {
  title: "COMPONENTS/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Submit",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Accept",
};
