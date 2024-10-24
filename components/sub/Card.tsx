import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg  bg-transparent shadow-sm ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };