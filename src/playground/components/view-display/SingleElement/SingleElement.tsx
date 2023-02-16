import './SingleElement.scss'
import Button from '@mui/material/Button';
import InputText from '../../inputs/InputText'
import { GuidedInterview } from '../../../../lib/GuidedInterview'
import { Question } from '../../../../lib/interfaces/Question.interface'

function SingleElement(props: { interview: GuidedInterview, current: Question }) {
    const { interview, current } = props

  return (
    <div className="SingleElement">
        <div className="container">
            <div className="left-side">
                {current.type === 'text' && <InputText interview={interview} question={current as any} />}
            </div>
            <div className="right-side">
                <pre>{JSON.stringify(current, null, 4)}</pre>
            </div>
            <div className="navigation">
                <div className="content">
                <Button variant="contained" onClick={() => interview.previous()}>Previous</Button>
                <Button variant="contained" onClick={() => interview.next()}>Next</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleElement
