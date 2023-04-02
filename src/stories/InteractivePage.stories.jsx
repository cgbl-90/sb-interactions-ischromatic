import React from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Page } from "./Page";

export default {
  title: "PAGE",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const FilledForm = Template.bind({});

FilledForm.args = {
  nmName: "Enter your name",
  nmLabel: "name",
  pwdName: "Enter your password",
  pwdLabel: "pwd",
  btnLabel: "Save",
  btnClr: "green",
};

FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.type(await canvas.findByTestId("name"), "email@provider.com");
  userEvent.type(await canvas.findByTestId("pwd"), "a-random-password");
  userEvent.click(canvas.getByRole("button"));
};
