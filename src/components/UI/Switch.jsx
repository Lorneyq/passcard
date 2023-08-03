const Switch = ({
  isSelected,
  select,
  firstName,
  secondName,
  firstSelect,
  secondSelect,
  className,
}) => {
  return (
    <div
      className={`flex mobile-l:text-4xl text-3xl items-center justify-center ${className}`}
    >
      <span className="mr-5 cursor-pointer select-none" onClick={firstSelect}>
        {firstName} {/* not necessary */}
      </span>
      <label className="relative flex mobile-l:w-40 mobile-l:h-20 w-20 h-10">
        <input
          className="block absolute bg-gray-300 rounded-full top-0 left-0 w-full h-full transition-all delay-300 ease-in-out appearance-none outline-none cursor-pointer"
          type="checkbox"
          name="toggle"
          role="switch"
          onClick={select}
        />
        <span
          className={`${
            isSelected ? "translate-x-9/4" : ""
          } absolute inline-block mobile-l:w-10 w-5 mobile-l:h-10 h-5 bg-green-500 top-2/4 mobile:left-4 left-2 -translate-x-0 -translate-y-2/4 rounded-full transition-transform mobile:duration-300 duration-150 ease-in-out cursor-pointer`}
        ></span>
      </label>
      <span className="ml-5 cursor-pointer select-none" onClick={secondSelect}>
        {secondName} {/* not necessary */}
      </span>
    </div>
  );
};

export default Switch;
