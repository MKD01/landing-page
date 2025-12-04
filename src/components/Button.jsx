const Button = ({ text, style = "" }) => {
  let className = "custom-button";

  if (style.includes("reverse")) {
    className += " white-background";
  } else {
    className += " orange-background";
  }

  if (style.includes("shadow")) {
    className += " button-shadow";
  }

  return <button className={className}>{text}</button>;
};

export default Button;
