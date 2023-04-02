import React from "react";
import { Page } from "./Page";

export default {
  title: "PAGE",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const EmptyForm = Template.bind({});
EmptyForm.args = {
  nmName: "Enter your name",
  nmLabel: "name",
  pwdName: "Enter your password",
  pwdLabel: "pwd",
  btnLabel: "Save",
  btnClr: "green",
};
