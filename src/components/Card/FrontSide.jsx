import { PasswordGeneratorClassic } from "../../utils/PasswordGeneratorClassic";
import RangeSlider from "../UI/RangeSlider";
import Checkbox from "../UI/Checkbox";
import RefreshButton from "../UI/RefreshButton";
import PasswordGeneratorOutput from "../PasswordGeneratorOutput";
import PasswordStrengthIndicator from "../UI/PasswordStrengthIndicator";

const FrontSide = ({ visible }) => {
  const {
    passwordClassic,
    passwordLength,
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
    generatePasswordClassic,
    securityLevel,
  } = PasswordGeneratorClassic();

  return (
    <div className={`${visible ? "" : "hidden"}`}>
      <h1 className="text-center mobile:text-4xl text-3xl mb-2">PassCard</h1>
      <div className="relative">
        <PasswordGeneratorOutput password={passwordClassic} />
        <PasswordStrengthIndicator securityLevel={securityLevel} />
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
        <RefreshButton onClick={generatePasswordClassic} />
      </div>
    </div>
  );
};

export default FrontSide;
