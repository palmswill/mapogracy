import React, { useState } from "react";

import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(prev ? prev : initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
