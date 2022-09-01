import React from "react";

export default function Validator() {
  const emailValidation = (email) => {
    if (email.includes("@redberry.ge")) return true;
    else return false;
  };
  return <div></div>;
}
