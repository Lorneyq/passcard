import { useState, useEffect } from "react";

export const PasswordGeneratorList = () => {
  const [passwordList, setPasswordList] = useState([]);
  const [passwordOptionsList, setPasswordOptionsList] = useState(() => {
    const storedOptions = localStorage.getItem("passwordOptionsList");
    return storedOptions
      ? JSON.parse(storedOptions)
      : {
          passwordLength: 8,
          includeSpecialChars: true,
          includeNumbers: true,
          includeLowercase: true,
          includeUppercase: true,
          includeSpaces: false,
          listLength: 6,
        };
  });

  const {
    passwordLength,
    includeSpecialChars,
    includeNumbers,
    includeLowercase,
    includeUppercase,
    includeSpaces,
    listLength,
  } = passwordOptionsList;

  useEffect(() => {
    localStorage.setItem(
      "passwordOptionsList",
      JSON.stringify(passwordOptionsList)
    );
  }, [passwordOptionsList]);

  const generatePasswordList = () => {
    const chars = [];
    if (includeSpecialChars) chars.push(..."!@#$%^&*()_+-=[]{}|;:,.<>/?");
    if (includeNumbers) chars.push(..."0123456789");
    if (includeLowercase) chars.push(..."abcdefghijklmnopqrstuvwxyz");
    if (includeUppercase) chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (includeSpaces) chars.push(" ");

    let generatedPasswords = [];

    for (let j = 0; j < 10; j++) {
      let generatedPassword = "";
      let lastChar = "";

      for (let i = 0; i < passwordLength; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)];

        if (includeSpaces && i === Math.ceil(passwordLength / 6)) {
          randomChar = " ";
        }

        while (randomChar === lastChar) {
          randomChar = chars[Math.floor(Math.random() * chars.length)];
        }

        generatedPassword += randomChar;
        lastChar = randomChar;
      }

      generatedPasswords.push(generatedPassword);
    }

    setPasswordList(generatedPasswords);
  };

  const handlePasswordLengthChange = (e) => {
    const length = parseInt(e.target.value);
    setPasswordOptionsList((prevOptions) => ({
      ...prevOptions,
      passwordLength: length,
    }));
  };

  const handleCheckboxChange = (name) => (e) => {
    const checked = e.target.checked;
    const activeCheckboxes = [
      includeSpecialChars,
      includeNumbers,
      includeLowercase,
      includeUppercase,
      includeSpaces,
    ].filter((checkbox) => checkbox);

    if (
      checked ||
      (includeSpaces && activeCheckboxes.length > 2) ||
      (!includeSpaces && activeCheckboxes.length > 1)
    ) {
      setPasswordOptionsList((prevOptions) => ({
        ...prevOptions,
        [name]: checked,
      }));
    } else {
      e.preventDefault();
    }
  };

  useEffect(() => {
    generatePasswordList();
  }, [
    passwordOptionsList.passwordLength,
    passwordOptionsList.includeSpecialChars,
    passwordOptionsList.includeNumbers,
    passwordOptionsList.includeLowercase,
    passwordOptionsList.includeUppercase,
    passwordOptionsList.includeSpaces,
  ]);

  return {
    passwordList,
    passwordLength,
    listLength,
    handlePasswordLengthChange,
    includeSpecialChars,
    handleIncludeSpecialCharsChange: handleCheckboxChange(
      "includeSpecialChars"
    ),
    includeNumbers,
    handleIncludeNumbersChange: handleCheckboxChange("includeNumbers"),
    includeLowercase,
    handleIncludeLowercaseChange: handleCheckboxChange("includeLowercase"),
    includeUppercase,
    handleIncludeUppercaseChange: handleCheckboxChange("includeUppercase"),
    includeSpaces,
    handleIncludeSpacesChange: handleCheckboxChange("includeSpaces"),
    generatePasswordList,
  };
};
