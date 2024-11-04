import React, { createContext, useContext, useState } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary";
  className?: string;
};

// Context for Select
interface SelectContextType {
    value?: string;
    onValueChange?: (value: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
  }
  
  const SelectContext = createContext<SelectContextType>({
    open: false,
    setOpen: () => {}
  });
  
  // Enhanced type definitions
  interface SelectProps {
    value: string;
    onValueChange: (value: string) => void;
    children: React.ReactNode;
    className?: string;
  }
  
  interface SelectTriggerProps {
    className?: string;
    children: React.ReactNode;
  }
  
  interface SelectContentProps {
    className?: string;
    children: React.ReactNode;
  }
  
  interface SelectItemProps {
    value: string;
    className?: string;
    children: React.ReactNode;
  }
  
  interface SelectValueProps {
    placeholder?: string;
    className?: string;
  }

// Input Component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-800 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

// Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-purple-600 text-white hover:bg-purple-700 border-transparent",
      outline: "border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white",
      ghost: "border-transparent bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white"
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8"
    };

    return (
      <button
        className={`inline-flex items-center justify-center rounded-md border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Badge Component
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-purple-600 text-purple-50",
      secondary: "bg-gray-800 text-gray-300"
    };

    return (
      <div
        ref={ref}
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

// Select Component
const Select: React.FC<SelectProps> = ({
    children,
    value,
    onValueChange,
    className = ""
  }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
        <div className={`relative ${className}`}>
          {children}
        </div>
      </SelectContext.Provider>
    );
  };
  
  // SelectTrigger Component
  const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
    ({ className = "", children, ...props }, ref) => {
      const { setOpen, open } = useContext(SelectContext);
  
      return (
        <button
          type="button"
          ref={ref}
          className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-800 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          onClick={() => setOpen(!open)}
          {...props}
        >
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      );
    }
  );
  SelectTrigger.displayName = "SelectTrigger";
  
  // SelectContent Component
  const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
    ({ className = "", children, ...props }, ref) => {
      const { open } = useContext(SelectContext);
  
      if (!open) return null;
  
      return (
        <div
          ref={ref}
          className={`absolute top-[calc(100%+5px)] left-0 z-50 w-full min-w-[8rem] overflow-hidden rounded-md border border-gray-800 bg-gray-900 text-white shadow-md animate-in fade-in-0 zoom-in-95 ${className}`}
          {...props}
        >
          <div className="p-1">{children}</div>
        </div>
      );
    }
  );
  SelectContent.displayName = "SelectContent";
  
  // SelectItem Component
  const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
    ({ className = "", children, value, ...props }, ref) => {
      const { onValueChange, setOpen, value: selectedValue } = useContext(SelectContext);
  
      return (
        <div
          ref={ref}
          className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-800 focus:bg-gray-800 ${selectedValue === value ? 'bg-gray-800' : ''} ${className}`}
          onClick={() => {
            onValueChange?.(value);
            setOpen(false);
          }}
          {...props}
        >
          {children}
        </div>
      );
    }
  );
  SelectItem.displayName = "SelectItem";
  
  // SelectValue Component
  const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
    ({ className = "", placeholder, ...props }, ref) => {
      const { value } = useContext(SelectContext);
  
      return (
        <span
          ref={ref}
          className={`block truncate ${value ? 'text-white' : 'text-gray-400'} ${className}`}
          {...props}
        >
          {value || placeholder}
        </span>
      );
    }
  );
  SelectValue.displayName = "SelectValue";
  
  export {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
    Input,
    Button,
    Badge
  };