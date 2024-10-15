interface IButton {
  outline?: boolean;
}
const Button = ({ outline }: IButton) => {
  console.log(outline);
  const outlineClass: string = "bg-transpatent";
  return <button className={outlineClass}>Button</button>;
};

export default Button;
