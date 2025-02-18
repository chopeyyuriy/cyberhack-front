import { FC } from "react";

import cn from "classnames";

import "./styles.scss";

export interface ISliderCheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const SliderCheckbox: FC<ISliderCheckboxProps> = ({ checked, onChange }) => {
  return (
    <div className="slider-checkbox" onClick={() => onChange(!checked)}>
      <span
        className={cn("slider-checkbox__circle", {
          "slider-checkbox__circle_active": checked,
        })}
      />
    </div>
  );
};

export default SliderCheckbox;
