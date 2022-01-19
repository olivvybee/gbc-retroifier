interface StepperProps<T = number> {
  possibleValues: T[];
  value: T;
  onChange: (newValue: T) => void;
  allowWrapping?: boolean;
  getLabel?: (value: T, currentIndex: number) => React.ReactElement;
}

export const Stepper = <T,>({
  possibleValues,
  value,
  onChange,
  allowWrapping = false,
  getLabel = (value) => <span>{value}</span>,
}: StepperProps<T>) => {
  const currentIndex = possibleValues.findIndex((item) => item === value);

  let nextIndex: number;
  let prevIndex: number;

  if (allowWrapping) {
    nextIndex = (currentIndex + 1) % possibleValues.length;
    prevIndex =
      (currentIndex + possibleValues.length - 1) % possibleValues.length;
  } else {
    nextIndex =
      currentIndex < possibleValues.length - 1 ? currentIndex + 1 : -1;
    prevIndex = currentIndex > 0 ? currentIndex - 1 : -1;
  }

  console.log({ currentIndex, nextIndex, prevIndex });

  return (
    <div className="d-flex align-items-center gx-3 mt-1">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onChange(possibleValues[prevIndex])}
        disabled={prevIndex === -1}>
        ◀
      </button>
      {getLabel(value, currentIndex)}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onChange(possibleValues[nextIndex])}
        disabled={nextIndex === -1}>
        ▶
      </button>
    </div>
  );
};
