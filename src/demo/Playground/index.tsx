import { useEffect, useState } from 'react'
import './index.scss'
import { GuidedInterview } from '@/lib/GuidedInterview'
import SingleElement from './components/view-display/SingleElement/SingleElement';
import MultipleElement from './components/view-display/MultipleElement/MultipleElement';
import Menu from './components/menu/Menu'
import { useLocation, useSearchParams } from 'react-router-dom';
const demoFiles = import.meta.glob("@/data/*.json");
import data from '@/data/solicitud-vacaciones.json';

function Playground() {

  let location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [interviewData, setInterviewData] = useState<any>(null);

  useEffect(() => {
    if (!searchParams.has('demo')) return
    demoFiles[`/src/data/${searchParams.get('demo')}.json`]().then((data: any) => {
      setInterviewData((data.default))
    })
  }, [location])

  const [interview, setInterview] = useState<any>(null);
  const [current, setCurrent] = useState<any>(null);
  const [viewMode, setViewMode] = useState('list');
  
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
        <Menu interview={interview} setViewMode={() => setViewMode(viewMode === 'normal' ? 'list' : 'normal')}/>
        {viewMode === 'normal' && <SingleElement interview={interview} current={current as any} />}
        {viewMode === 'list' && <MultipleElement interview={interview} />}
    </div>
  )
}

export default Playground
