import React from "react";
import { Button } from "./Button";
import { Label } from "./Label";
import { Input } from "./Input";
import "./page.css";

export const Page = ({
  nmName,
  nmLabel,
  pwdName,
  pwdLabel,
  btnLabel,
  btnClr,
}) => {
  return (
    <div className="box">
      <Label label={nmName} componentName={nmLabel} />
      <Input name={nmLabel} data-testid={nmLabel} />
      <br />
      <br />
      <Label label={pwdName} componentName={pwdLabel} />
      <Input name={pwdLabel} data-testid={pwdLabel} />
      <br />
      <br />
      <Button label={btnLabel} backgroundColor={btnClr} />
    </div>
  );
};
