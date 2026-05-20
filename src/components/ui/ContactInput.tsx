import { cn } from "@/utils/twUtils";
import { FC } from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> 

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const inputStyle: string = "bg-background border-border focus:border-accent";

export const ContactInput: FC<InputProps> = ({className,...props}: InputProps) => {
    return (
        <input className={cn(inputStyle, className)} {...props}/>
    )
}

export const ContactTextArea: FC<TextareaProps> = ({className,...props}: TextareaProps) => {
    return (
        <textarea className={cn(inputStyle, className)} {...props}/>
    )
}