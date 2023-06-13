import './MultipleElement.scss'
import InputText from '../../inputs/InputText'
import InputRadio from '../../inputs/InputRadio'
import InputDate from '../../inputs/InputDate'
import InputRepeat from '../../inputs/InputRepeat'
import { GuidedInterview, Repeat } from '@/lib/GuidedInterview'


function MultipleElement(props: { interview: GuidedInterview }) {
    const { interview } = props
    
    const getQuestionBlocks = (interview: GuidedInterview, nested = 0) => {
        let content = [];
        for (let item of interview.questionsMap.values()) {
            if (interview.canBeShown(item)) {
                content.push(
                    <div className="question-and-code" key={item.id + nested}>
                        {item.type === 'text' && <InputText interview={interview} question={item as any} />}
                        {item.type === 'date' && <InputDate interview={interview} question={item as any} />}
                        {item.type === 'multipleChoice' && <InputRadio interview={interview} question={item as any} />}
                        {item.type === 'repeat' && <InputRepeat interview={interview} question={item as any} />}
                        <pre>{JSON.stringify(item, null, 4)}</pre>
                    </div>
                )
                if (item.type === 'repeat') {
                    const repeatItem = item as Repeat
                    Object.values(repeatItem.content).forEach((nestedContent, index) => {
                        if (nestedContent.hidden) return
                        const nestedInterview = nestedContent.nestedInterview
                        const repeatInterviewQuestions: any = getQuestionBlocks(nestedInterview, index)
                        content.push(...repeatInterviewQuestions)
                    })
                }
            }
        }
          return content;
    }


  return (
    <div className="MultipleElement">
        <div className="container">
            {getQuestionBlocks(interview)}
        </div>
    </div>
  )
}

export default MultipleElement
