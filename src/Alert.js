import React from "react";

import swal from "sweetalert";
// import swal from '@sweetalert/with-react';
import "./Alert.css";

const Alert = () => {
  const fireAlert = () => {
    //  alert('ok')
    // swal({
    //   text: "Hello world!",
    // });
    // swal("Alert!", {
    //   className: "red-bg",
    // });
    swal("Completed", "Complete your task!", "success");
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button onClick={fireAlert}>Assinments</button>
      </div>
    </div>
  );
};

export default Alert;
