import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface IPropsType {
  className?: string;
  children?: ReactNode;
  onClick?: () => null | void;
}

export const Button = ({ className, children, onClick }: IPropsType) => {
  return (
    <div className={classNames('button', className)} onClick={onClick}>
      {children}
    </div>
  );
};
