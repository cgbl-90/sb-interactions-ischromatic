import React from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Page } from "./Page";
import isChromatic from "chromatic/isChromatic";

export default {
  title: "PAGE",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const SnapshotStepOne = Template.bind({});

SnapshotStepOne.args = {
  nmName: "Enter your name",
  nmLabel: "name",
  pwdName: "Enter your password",
  pwdLabel: "pwd",
  btnLabel: "Save",
  btnClr: "green",
};

SnapshotStepOne.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.type(await canvas.findByTestId("name"), "email@provider.com");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (!isChromatic()) {
    userEvent.type(await canvas.findByTestId("pwd"), "a-random-password");
    userEvent.click(canvas.getByRole("button"));
  }
};
