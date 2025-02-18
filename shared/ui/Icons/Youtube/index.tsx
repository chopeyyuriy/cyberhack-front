import { FC } from "react";

import "./styles.scss";

const YoutubeIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="icon"
    >
      <defs>
        <clipPath id="clip16_37681">
          <rect
            id="Social/ YouTube"
            width="20.000000"
            height="20.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>

      <g clipPath="url(#clip16_37681)">
        <path
          id="Vector"
          d="M19.8 6C19.8 6 19.6 4.62 19 4.01C18.24 3.21 17.39 3.21 17 3.16C14.2 2.96 10 2.96 10 2.96L9.99 2.96C9.99 2.96 5.79 2.96 3 3.16C2.6 3.21 1.75 3.21 0.99 4.01C0.39 4.62 0.2 6 0.2 6C0.2 6 0 7.62 0 9.23L0 10.75C0 12.37 0.19 13.99 0.19 13.99C0.19 13.99 0.39 15.37 0.99 15.97C1.75 16.77 2.75 16.74 3.19 16.83C4.8 16.98 10 17.03 10 17.03C10 17.03 14.2 17.02 17 16.82C17.39 16.77 18.24 16.77 19 15.97C19.6 15.37 19.8 13.99 19.8 13.99C19.8 13.99 20 12.37 20 10.75L20 9.23C20 7.62 19.8 6 19.8 6ZM7.93 12.59L7.93 6.97L13.33 9.79L7.93 12.59Z"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default YoutubeIcon;
