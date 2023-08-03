import { useEffect } from "react";

const Select = ({
  className,
  value,
  name,
  passwordOptionsList,
  setPasswordOptionsList,
  generatePasswordList,
}) => {
  useEffect(() => {
    const storedListLength = localStorage.getItem("listLength");
    if (storedListLength) {
      setPasswordOptionsList((prevOptions) => ({
        ...prevOptions,
        listLength: parseInt(storedListLength),
      }));
    }
  }, [setPasswordOptionsList]);

  const handleChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    const updatedOptions = {
      ...passwordOptionsList,
      listLength: selectedValue,
    };
    setPasswordOptionsList(updatedOptions);
    localStorage.setItem("listLength", selectedValue); // Store the selected value in localStorage
    generatePasswordList();
  };

  return (
    <select
      className={`outline-none cursor-pointer bg-wheat rounded-lg text-accent-color text-center mobile-l:w-12 w-10 mobile-l:h-8 h-7 mobile-l:text-2xl text-lg block ${className}`}
      value={value}
      name={name}
      onChange={handleChange}
    >
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="8">8</option>
      <option value="10">10</option>
    </select>
  );
};

export default Select;
