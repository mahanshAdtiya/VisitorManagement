import React from "react";
import { Header } from "../components";
import { StudentForm, FacultyForm, VisitorForm } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

function Form() {
  const { userData } = useStateContext();

  let formToRender;

  if (userData.userType === "student") {
    console.log("loda lele loda");
    formToRender = <StudentForm />;
  } else if (userData.userType === "faculty") {
    formToRender = <FacultyForm />;
  } else if (userData.userType === "visitor") {
    formToRender = <VisitorForm />;
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Form" title="Edit your Profile" />
      {formToRender}
    </div>
  );
}

export default Form;
