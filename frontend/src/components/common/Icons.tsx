import React from 'react';

interface IPropsType {
  className?: string;
  size?: number;
  full?: boolean;
  fill?: string;
  onClick?: () => void | null;
}

export const IconSearch = ({ className, size = 20 }: IPropsType) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="8 8 20 20"
    style={{ margin: '10px' }}
  >
    <g fill="#000" fillRule="evenodd">
      <circle cx="18" cy="18" r="14.727" fill="none" />
      <path d="M16 23a6.955 6.955 0 0 1-4.949-2.05 7.007 7.007 0 0 1 0-9.9A6.955 6.955 0 0 1 16 9c1.87 0 3.628.729 4.95 2.05a6.977 6.977 0 0 1 2.008 5.721 6.928 6.928 0 0 1-2.008 4.179A6.959 6.959 0 0 1 16 23m11.854 4.146-5.814-5.813c-.02-.02-.048-.03-.071-.047 1.131-1.276 1.807-2.812 1.983-4.406a7.99 7.99 0 0 0-2.295-6.537A7.976 7.976 0 0 0 16 8a8 8 0 0 0 0 16 7.97 7.97 0 0 0 5.296-2.017c.014.019.02.04.037.057l5.813 5.814a.502.502 0 0 0 .708 0 .502.502 0 0 0 0-.708" />
    </g>
  </svg>
);

export const IconPencil = ({ className }: IPropsType) => (
  <svg
    className={className}
    version="1.1"
    viewBox="0 0 512 512"
    enableBackground="new 0 0 512 512"
  >
    <g>
      <g>
        <g>
          <path d="m453.7,133l-286,289.6-71.6-75 284.8-288.4c9-9.1 24.8-9 33.7,0.1l39.2,40.3c9,9.2 8.9,24.2-0.1,33.4zm-375.7,254.4l49.1,51.5-66.9,14.5 17.8-66zm404.8-316.3l-39.2-40.3c-13.3-14.8-54.9-35.8-91.5-0.4l-298.7,302.5c-2.5,2.5-4.3,5.6-5.2,9l-36,133.1c-4.6,17 4.2,27.5 19.6,25.7 1.4-0.2 140.9-30.1 140.9-30.1 3.8-0.8 7.3-2.8 10.1-5.6l299.6-303.4c24.6-24.8 24.8-65.4 0.4-90.5z" />
        </g>
      </g>
    </g>
  </svg>
);

export const IconClose = ({
  className,
  size = 24,
  fill,
  onClick,
}: IPropsType) => (
  <svg
    className={className}
    width={size}
    height={size}
    fill={fill || '#42526e'}
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    <g data-name="Layer 2">
      <g data-name="close">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        />
        <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
      </g>
    </g>
  </svg>
);

export const IconArrow = ({ className, size = 100, fill }: IPropsType) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill={fill || '#212121'}
  >
    <polygon points="50 15, 100 100, 0 100" />
  </svg>
);
