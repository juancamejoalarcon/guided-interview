import './index.scss';
// Solicitud de vacaciones
// import template from "@/data/templates/solicitud-vacaciones.html?raw";
// import json from "@/data/solicitud-vacaciones.json";
// import jsonData from '@/data/templates/data-for-template-example.json';

// Repeat example
import template2 from "@/data/templates/repeat-example-1.html?raw";
import json2 from "@/data/forms/repeat-example-1.json";
import jsonData2 from '@/data/templates/data-for-template-example-2.json';

// Nested Repeat example
import template3 from "@/data/templates/repeat-example-3.html?raw";
import json3 from "@/data/forms/repeat-example-2.json";
import jsonData3 from '@/data/templates/data-for-template-example-3.json';

import { GuidedInterview } from "@/lib/GuidedInterview";
export default function Text() {
    const interview = new GuidedInterview(json3, { data: jsonData3});
    const result = interview.makeTemplate(template3)
    return (
        <div className="Text">
            <div className="split-container">
                <div className="split-item">
                    <div className="left-container">
                        <div className="top">
                            <pre>{template3}</pre>
                        </div>
                        <div className="bottom">
                            <pre>{JSON.stringify(jsonData3, null, 2)}</pre>
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