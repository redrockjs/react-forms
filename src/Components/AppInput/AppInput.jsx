import React, {forwardRef} from "react"


export default function AppInput(props) {

    return <>
        <label htmlFor={props.name}>{props.label}</label>
        <input className={props.className}
               type={props.type}
               name={props.name}
               value={props.value}
               placeholder={props.placeholder}
               onChange={(e) => {
                   props.onChange(props.formatter ? props.formatter(e.target.value) : e.target.value);
               }}
        />
        {typeof props.error === "string" ? (<span>{props.error}</span>) : ("")}

    </>
}