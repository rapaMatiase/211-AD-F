import React from "react"
import { Checkbox } from "native-base"

const InputCheckbox = ({text, setValue}) => {

  return (
      <Checkbox size="lg" _text={{fontWeight : "bold"}} onChange={(input)=>{setValue(input)}} >
        {text}
      </Checkbox>
  )
}

export default InputCheckbox;