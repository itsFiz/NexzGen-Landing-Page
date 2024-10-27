// components/ui/label.tsx
import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label = ({ className = '', children, ...props }: LabelProps) => {
  return (
    <label
      className={`text-sm font-medium text-gray-200 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};