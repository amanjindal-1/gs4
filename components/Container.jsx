const Container = ({ children, className, className1 }) => {
  return (
    <div className={`w-full px-8 sm:px-20 ${className}`}>
      <div className={`max-w-[1120px] mx-auto ${className1}`}>{children}</div>
    </div>
  );
};

export default Container;
