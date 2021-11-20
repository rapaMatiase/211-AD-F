import React from "react"
import { Checkbox } from "native-base"

const InputCheckbox = ({text, setValue}) => {

  return (
      <Checkbox size="md" onChange={(i)=>{setValue(i)}} >
        {text}
      </Checkbox>
  )
}

export default InputCheckbox;