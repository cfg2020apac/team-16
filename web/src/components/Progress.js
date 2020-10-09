import React from "react"
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const data = [
    { 
        title: "Planning with Purpose"
    }, 
]

export const ProjectProgress = () => { 
    
    return(
        <Collapse defaultActiveKey={['1']} onChange={callback}>
        {
            data.map(project =>  
                <Panel showArrow={false} header={project.title} key="1">
                    <p>{text}</p>
                </Panel>
            )
        } 
        </Collapse>
    )
}