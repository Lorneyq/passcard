import { useState, useEffect } from "react";

export const PasswordGeneratorClassic = () => {
  const [passwordClassic, setPasswordClassic] = useState("");
  const [securityLevel, setSecurityLevel] = useState("F");
  const [passwordOptionsClassic, setPasswordOptionsClassic] = useState(() => {
    const storedOptions = localStorage.getItem("passwordOptionsClassic");
    return storedOptions
      ? JSON.parse(storedOptions)
      : {
          passwordLength: 8,
          includeSpecialChars: true,
          includeNumbers: true,
          includeLowercase: true,
          includeUppercase: true,
          includeSpaces: false,
        };
  });

  const {
    passwordLength,
    includeSpecialChars,
    includeNumbers,
    includeLowercase,
    includeUppercase,
    includeSpaces,
  } = passwordOptionsClassic;

  const calculateSecurityLevel = () => {
    let score = 0;

    if (includeUppercase) score++;
    if (includeLowercase) score++;
    if (includeNumbers) score++;
    if (includeSpecialChars) score++;
    if (includeSpaces) score++;

    if (passwordLength >= 12) score++;
    if (passwordLength >= 16) score++;
    if (passwordLength >= 20) score++;
    if (passwordLength >= 24) score++;

    if (score === 4) return "F";
    if (score === 5) return "DD";
    if (score === 6) return "CCC";
    if (score === 7) return "BBBB";
    if (score >= 8) return "AAAAA";

    return "F";
  };

  useEffect(() => {
    localStorage.setItem(
      "passwordOptionsClassic",
      JSON.stringify(passwordOptionsClassic)
    );
  }, [passwordOptionsClassic]);

  const generatePasswordClassic = () => {
    const chars = [];
    if (includeSpecialChars) chars.push(..."!@#$%^&*()_+-=[]{}|;:,.<>/?");
    if (includeNumbers) chars.push(..."0123456789");
    if (includeLowercase) chars.push(..."abcdefghijklmnopqrstuvwxyz");
    if (includeUppercase) chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (includeSpaces) chars.push(" ");

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

    setPasswordClassic(generatedPassword);
    setSecurityLevel(calculateSecurityLevel());
  };

  const handlePasswordLengthChange = (e) => {
    const length = parseInt(e.target.value);
    setPasswordOptionsClassic((prevOptions) => ({
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
      setPasswordOptionsClassic((prevOptions) => ({
        ...prevOptions,
        [name]: checked,
      }));
    } else {
      e.preventDefault();
    }
  };

  useEffect(() => {
    generatePasswordClassic();
  }, [
    passwordOptionsClassic.passwordLength,
    passwordOptionsClassic.includeSpecialChars,
    passwordOptionsClassic.includeNumbers,
    passwordOptionsClassic.includeLowercase,
    passwordOptionsClassic.includeUppercase,
    passwordOptionsClassic.includeSpaces,
  ]);

  return {
    passwordClassic,
    passwordLength,
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
    generatePasswordClassic,
    securityLevel,
  };
};
