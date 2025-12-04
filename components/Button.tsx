import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border border-transparent shadow-md hover:shadow-lg",
    secondary: "bg-transparent text-gray-900 border border-gray-200 hover:border-gray-400 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-full",
    md: "text-sm px-5 py-2.5 rounded-full",
    lg: "text-base px-8 py-3 rounded-full",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;