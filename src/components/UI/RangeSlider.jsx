const RangeSlider = ({ name, id, min, max, value, onChange }) => {
  return (
    <div className="flex flex-col mb-2 mobile-l:text-base text-sm">
      <label htmlFor={id}>{name}</label>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="cursor-pointer bg-wheat accent-accent-color outline-none opacity-1 appearance-none h-2 rounded-lg slider-thumb"
      />
      <span className="mt-1">{value}</span>
    </div>
  );
};

export default RangeSlider;
