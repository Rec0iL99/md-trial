import React from "react";
import { toast } from "react-toastify";

export default function Toast() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}
