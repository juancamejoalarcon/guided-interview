import { useEffect, useState } from 'react'
import './index.scss'
import { GuidedInterview } from '@/lib/GuidedInterview'
import MultipleElement from './components/MultipleElement';
import Menu from './components/menu/Menu'
import { useLocation, useSearchParams } from 'react-router-dom';
const demoFiles = import.meta.glob("@/data/forms/*.json");

function Playground() {

  let location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [interviewData, setInterviewData] = useState<any>(null);

  useEffect(() => {
    if (!searchParams.has('demo')) {
      setSearchParams({demo: 'solicitud-vacaciones'})
      return
    }
    demoFiles[`/src/data/forms/${searchParams.get('demo')}.json`]().then((data: any) => {
      setInterviewData((data.default))
    })
  }, [location])

  const [interview, setInterview] = useState<any>(null);
  const [current, setCurrent] = useState<any>(null);
  
  useEffect(() => {
    if (interviewData) setInterview(new GuidedInterview(interviewData))
  }, [interviewData])

  useEffect(() => {
    if (interviewData === null || interview === null) return
    setCurrent(interviewData.name)
    ;['set-current', 'set-value'].forEach((event: any) => {
      interview.on(event, (question: any) => {
        setCurrent({...question})
      })
    })
  }, [interview])

  if (interviewData === null || interview === null) return (<div className="Playground">Loading...</div>)
  

  return (
    <div className="Playground">
        <Menu interview={interview}/>
        <MultipleElement interview={interview} />
    </div>
  )
}

export default Playground
