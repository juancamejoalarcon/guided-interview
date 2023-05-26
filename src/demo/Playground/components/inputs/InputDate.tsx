import { useEffect, useState } from 'react'
import './InputDate.css'
import { DateTime } from '@/lib/interfaces/Date.interface'
import { GuidedInterview } from '@/lib/GuidedInterview'
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function InputDate(props: { interview: GuidedInterview, question: DateTime }) {
    const { id, title, required, value, placeholder, format } = props.question
    const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
  }, [])

  return (
    <div className="InputDate">
        <div className="container">
            <h2>{title}</h2>
            <DatePicker dateFormat={format} selected={startDate} onChange={(date) => {
              props.interview.setValue(id, new Date(date).toLocaleDateString())
              // console.log(new Date(date).toLocaleDateString())
              }} />
        </div>
    </div>
  )
}

export default InputDate
