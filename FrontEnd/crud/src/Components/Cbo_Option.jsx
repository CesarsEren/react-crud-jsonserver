import React, { Fragment, useEffect, useState } from "react";

export default function Cbo_Option({ cbos, nombre }) {
  //const []
  useEffect(() => {}, []);

  return (
    <Fragment>
      <option value="-1">Seleccione {nombre}</option>
      {cbos.map((cb) => (
        <option key={cb.value} value={cb.value}>{cb.text}</option>
      ))}
    </Fragment>
  );
}
