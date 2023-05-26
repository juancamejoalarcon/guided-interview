import './MultipleElement.scss'
import InputText from '../../inputs/InputText'
import InputRadio from '../../inputs/InputRadio'
import InputDate from '../../inputs/InputDate'
import InputRepeat from '../../inputs/InputRepeat'
import { GuidedInterview } from '@/lib/GuidedInterview'


function MultipleElement(props: { interview: GuidedInterview }) {
    const { interview } = props
    
    const getQuestionBlocks = () => {
        let content = [];
        for (let item of interview.questionsMap.values()) {
            if (interview.canBeShown(item)) {
                content.push(
                    <div className="question-and-code" key={item.id}>
                        {item.type === 'text' && <InputText interview={interview} question={item as any} />}
                        {item.type === 'date' && <InputDate interview={interview} question={item as any} />}
                        {item.type === 'multipleChoice' && <InputRadio interview={interview} question={item as any} />}
                        {item.type === 'repeat' && <InputRepeat interview={interview} question={item as any} />}
                        <pre>{JSON.stringify(item, null, 4)}</pre>
                    </div>
                )
            }
        }
          return content;
    }


  return (
    <div className="MultipleElement">
        <div className="container">
            {getQuestionBlocks()}
        </div>
    </div>
  )
}

export default MultipleElement
