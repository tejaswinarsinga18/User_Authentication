import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";

const PasswordValidation = () => {
  const [password, setPassword] = useState("Abc.@678");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSetPassword(event) {
    setPassword(event.target.value);
    setErrorMessage(errorMessage);
  }
  return (
    <div>
      <div> Enter the password: </div>
      <input type="text" value={password} onChange={handleSetPassword} />

      <PasswordChecklist
        rules={["capital", "specialChar", "minLength", "lowercase", "number"]}
        minLength={8}
        value={password}
        messages={{
          minLength: "The minimum length of the password should be 8.",
          specialChar:
            "The password should contain at least one special character.",
          number: "The password should contain at least one numeric letter.",
          capital: "The password should contain at least one uppercase letter.",
          lowercase:
            "The password should contain at least one lowercase letter.",
        }}
      />
    </div>
  );
};
export default PasswordValidation;
