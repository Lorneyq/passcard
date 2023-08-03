import { useState } from "react";
import { PasswordGeneratorList } from "../../utils/PasswordGeneratorList";
import RangeSlider from "../UI/RangeSlider";
import Checkbox from "../UI/Checkbox";
import RefreshButton from "../UI/RefreshButton";
import CopyButton from "../UI/CopyButton";
import Select from "../UI/Select";

const BackSide = ({ visible }) => {
  const [passwordOptionsList, setPasswordOptionsList] = useState({
    passwordLength: 8,
    includeSpecialChars: true,
    includeNumbers: true,
    includeLowercase: true,
    includeUppercase: true,
    includeSpaces: false,
    listLength: 6,
  });
  const {
    passwordList,
    passwordLength,
    listLength,
    handlePasswordLengthChange,
    includeSpecialChars,
    handleIncludeSpecialCharsChange,
    includeNumbers,
    handleIncludeNumbersChange,
    includeLowercase,
    handleIncludeLowercaseChange,
    includeUppercase,
    handleIncludeUppercaseChange,
    includeSpaces,
    handleIncludeSpacesChange,
    generatePasswordList,
  } = PasswordGeneratorList();

  return (
    <div className={`${visible ? "" : "hidden"}`}>
      <h1 className="text-center mobile:text-4xl text-3xl mb-2">
        PassCardList
      </h1>
      <div className="relative">
        <RangeSlider
          name="Password length"
          id="password-length"
          min="8"
          max="32"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
        <Checkbox
          id="special-chars"
          name="Special Symbols"
          checked={includeSpecialChars}
          onChange={handleIncludeSpecialCharsChange}
        />
        <Checkbox
          id="numbers"
          name="Numbers"
          checked={includeNumbers}
          onChange={handleIncludeNumbersChange}
        />
        <Checkbox
          id="lowercase"
          name="Lowercase"
          checked={includeLowercase}
          onChange={handleIncludeLowercaseChange}
        />
        <Checkbox
          id="uppercase"
          name="Uppercase"
          checked={includeUppercase}
          onChange={handleIncludeUppercaseChange}
        />
        <Checkbox
          id="spaces"
          name="Spaces"
          checked={includeSpaces}
          onChange={handleIncludeSpacesChange}
        />
        <RefreshButton
          onClick={generatePasswordList}
          className="mobile-l:top-36 top-32"
        />
        <Select
          className="ml-auto mobile-l:mt-5 mt-4"
          value={passwordOptionsList.listLength}
          name="listLength"
          passwordOptionsList={passwordOptionsList}
          setPasswordOptionsList={setPasswordOptionsList}
          generatePasswordList={generatePasswordList}
        />

        <div className="passwordList mobile-l:mt-3 mt-2 border-t-1 pt-2 pr-4 overflow-auto mobile-l:max-h-75 max-h-68">
          {passwordList
            .slice(0, passwordOptionsList.listLength)
            .map((password, index) => (
              <CopyButton
                key={index}
                copyItem={password}
                className="flex w-full mobile-l:text-base text-sm mobile-l:text-center text-left overflow-auto whitespace-nowrap bg-grey rounded-lg mb-2 px-1 py-2"
              >
                {password}
              </CopyButton>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BackSide;
