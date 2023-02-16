import { useEffect, useState } from 'react'
import './Playground.scss'
import { GuidedInterview } from '../lib/GuidedInterview'
import data from './data/basic.json';
import SingleElement from './components/view-display/SingleElement/SingleElement';
import MultipleElement from './components/view-display/MultipleElement/MultipleElement';
import Menu from './components/menu/Menu'

function Playground() {

  const [interview, setInterview] = useState(new GuidedInterview(data));
  const [current, setCurrent] = useState(data.name);
  const [viewMode, setViewMode] = useState('normal');
  useEffect(() => {
    ['set-current', 'set-value'].forEach((event: any) => {
      interview.on(event, (question: any) => {
        setCurrent({...question})
      })
    })
  }, [])

  return (
    <div className="Playground">
        <Menu setViewMode={() => setViewMode(viewMode === 'normal' ? 'list' : 'normal')}/>
        {viewMode === 'normal' && <SingleElement interview={interview} current={current as any} />}
        {viewMode === 'list' && <MultipleElement interview={interview} />}
    </div>
  )
}

export default Playground
