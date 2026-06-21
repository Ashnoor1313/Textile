import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  className = '', 
  icon: Icon = null 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-body text-xs uppercase tracking-widest px-8 py-4 transition-all duration-500 ease-out select-none cursor-pointer border relative overflow-hidden focus:outline-none';
  
  const variants = {
    primary: 'bg-accent-gold border-accent-gold text-primary-abyss hover:bg-transparent hover:text-accent-gold font-bold',
    outline: 'border-accent-gold/40 text-accent-gold hover:border-accent-gold hover:bg-accent-gold/10 font-medium',
    secondary: 'bg-surface-card border-surface-border text-text-light hover:bg-primary-deep hover:border-accent-gold hover:text-accent-gold',
    text: 'border-transparent text-text-muted hover:text-text-light px-4 py-2 bg-transparent'
  };

  const currentVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${currentVariant} shiny-hover ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

export default Button;
