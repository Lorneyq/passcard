const PasswordStrengthIndicator = ({ securityLevel }) => {
  const getProgressBarColor = () => {
    switch (securityLevel) {
      case "F":
        return "bg-red-500";
      case "DD":
        return "bg-orange-500";
      case "CCC":
        return "bg-yellow-500";
      case "BBBB":
        return "bg-green-500";
      case "AAAAA":
        return "bg-blue-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="w-full h-4 mb-2 bg-gray-300 rounded-full">
      <div
        className={`h-full rounded-full transition-all duration-300 ${getProgressBarColor()}`}
        style={{ width: `${securityLevel.length * 20}%` }}
      ></div>
    </div>
  );
};

export default PasswordStrengthIndicator;
