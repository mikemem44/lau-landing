import { cn } from "@/utils/twUtils";
import { FC } from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> 

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const inputStyle: string = "focus:outline-none font-normal w-full border border-border bg-input rounded-md p-0.5";

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