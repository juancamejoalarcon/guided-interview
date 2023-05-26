import { useEffect, useState } from 'react'
import './index.scss'
import { GuidedInterview } from '@/lib/GuidedInterview'
import SingleElement from './components/view-display/SingleElement/SingleElement';
import MultipleElement from './components/view-display/MultipleElement/MultipleElement';
import Menu from './components/menu/Menu'
import { useLocation, useSearchParams } from 'react-router-dom';
const demoFiles = import.meta.glob("@/data/*.json");
import data from '@/data/basic.json';

function Playground() {

  let location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    demoFiles[`/src/data/${searchParams.get('demo')}.json`]().then((data: any) => {
      setInterview(new GuidedInterview(data.default))
      setCurrent(data.default.name)
    })
  }, [location])

  const [interview, setInterview] = useState(new GuidedInterview(data));
  const [current, setCurrent] = useState(data.name);
  const [viewMode, setViewMode] = useState('list');
  useEffect(() => {
    ['set-current', 'set-value'].forEach((event: any) => {
      interview.on(event, (question: any) => {
        setCurrent({...question})
      })
    })
  }, [interview])

  return (
    <div className="Playground">
        <Menu interview={interview} setViewMode={() => setViewMode(viewMode === 'normal' ? 'list' : 'normal')}/>
        {viewMode === 'normal' && <SingleElement interview={interview} current={current as any} />}
        {viewMode === 'list' && <MultipleElement interview={interview} />}
    </div>
  )
}

export default Playground
