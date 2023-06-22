import './index.scss';
import template from "@/data/templates/solicitud-vacaciones.html?raw";
// import json from "@/data/solicitud-vacaciones.json";
// import jsonData from '@/data/results/data-for-template-example.json';

import template2 from "@/data/templates/repeat-example-1.html?raw";
import json2 from "@/data/repeat-example-1.json";
import jsonData2 from '@/data/results/data-for-template-example-2.json';

import { GuidedInterview } from "@/lib/GuidedInterview";
export default function Text() {
    const interview = new GuidedInterview(json2, { data: jsonData2});
    console.log(interview.getData())
    const result = interview.makeTemplate(template2)
    return (
        <div className="Text">
            <div className="split-container">
                <div className="split-item">
                    <div className="left-container">
                        <div className="top">
                            <pre>{template}</pre>
                        </div>
                        <div className="bottom">
                            <pre>{JSON.stringify(jsonData2, null, 2)}</pre>
                        </div>
                    </div>
                </div>
                <div className="split-item" >
                    <div dangerouslySetInnerHTML={{ __html: result}} />
                </div>
            </div>
        </div>
    )
}