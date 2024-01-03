import { type } from "os"


type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

function Button() {
  return (
    <div>Button</div>
  )
}

export default Button