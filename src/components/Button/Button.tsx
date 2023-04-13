import React from "react"
import { Boton } from "./button.styles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...rest } : ButtonProps) {
  return (
    <Boton {...rest}>
      {children}
    </Boton>
  )
}

export default Button