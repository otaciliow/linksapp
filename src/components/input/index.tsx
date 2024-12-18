import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: IInputProps) {
    return (
        <input 
            className="border-0 h-9 rounded-md outline-none px-2 mb-3"
            {...props}
        />
    )
}