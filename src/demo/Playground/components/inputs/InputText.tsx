import { useEffect, useState } from 'react'
import './InputText.css'
import { Question } from '@/lib/interfaces/Question.interface'
import { GuidedInterview } from '@/lib/GuidedInterview'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

function InputText(props: { interview: GuidedInterview, question: Question }) {
    const { id, title, required, value, placeholder } = props.question

  useEffect(() => {
  }, [])

  return (
    <div className="InputText">
        <div className="container">
            <h2>{title}</h2>
            <TextField 
                required={required}
                value={value}
                fullWidth 
                label={title}
                placeholder={placeholder}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    props.interview.setValue(id, event.target.value)
                }}
            />
        </div>
    </div>
  )
}

export default InputText
