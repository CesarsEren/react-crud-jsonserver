import React, { Fragment } from "react";

export default function Alert({activo,alert,msg}) {
  return (
    <Fragment >
      <div style={{display:activo?'block' :'none'}} className={"alert alert-"+alert} role="alert">
      {msg}
      </div>
    </Fragment>
  );
}
