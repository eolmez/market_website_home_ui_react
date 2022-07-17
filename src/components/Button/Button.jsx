import { StyledButton } from "./ButtonStyles";

const Button = ({ children, ...attrs }) => {
  return (
    <>
      <StyledButton {...attrs}>{children}</StyledButton>
    </>
  );
};

export default Button;
