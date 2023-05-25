import { useEffect, useState } from 'react'
import './Playground.scss'
import { GuidedInterview } from '../lib/GuidedInterview'
import SingleElement from './components/view-display/SingleElement/SingleElement';
import MultipleElement from './components/view-display/MultipleElement/MultipleElement';
import Menu from './components/menu/Menu'

// Demos
import data from './data/basic.json';
import solicitudVacaciones from './data/solicitud-vacaciones.json';
import repeatExample from './data/repeat-example.json';

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let demoData: any = data
if (params.demo === 'solicitud-vacaciones') demoData = solicitudVacaciones
if (params.demo === 'repeat-example') demoData = repeatExample

function Playground() {

  const [interview, setInterview] = useState(new GuidedInterview(demoData));
  const [current, setCurrent] = useState(demoData.name);
  const [viewMode, setViewMode] = useState('list');
  useEffect(() => {
    ['set-current', 'set-value'].forEach((event: any) => {
      interview.on(event, (question: any) => {
        setCurrent({...question})
      })
    })
  }, [])

  return (
    <div className="Playground">
        <Menu interview={interview} setViewMode={() => setViewMode(viewMode === 'normal' ? 'list' : 'normal')}/>
        {viewMode === 'normal' && <SingleElement interview={interview} current={current as any} />}
        {viewMode === 'list' && <MultipleElement interview={interview} />}
    </div>
  )
}

export default Playground
