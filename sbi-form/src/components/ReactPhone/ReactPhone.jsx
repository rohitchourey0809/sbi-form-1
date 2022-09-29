import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ReactPhone = ({}) => {
    const [phone, setPhone] = useState()
    return (
      <PhoneInput
        placeholder="Enter phone number"
        Phone={phone}
        onChange={setPhone}
        />
    )
}

export default ReactPhone
