function Button({ onClick, children, className, isDisabled }) {
  return (
    <button onClick={onClick} className={className} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
