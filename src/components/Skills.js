import React from 'react';

import { Skills } from '../data/index.js';

export default () => <div id="skills">
<h2 className="header slide-in-right">{Skills.header}</h2>
{
    Skills.data.map(data => {
        let buffer = []
        buffer.push(<h4 key={data.type}>{data.type}</h4>)
        buffer.push(<div key='languages' className='languages'>{
            data.list.map(language => {
            return <img key={language.name} src={language.icon} title={language.name} alt={language.name}/>
        })}</div>)
        return buffer
    })
}
</div>