const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl",
    secondary: "bg-white dark:bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-transparent hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 focus:ring-blue-500",
    glow: "bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;
