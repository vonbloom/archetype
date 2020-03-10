import * as _ from 'lodash'

import * as speaker from "./speaker";
import './app.scss';

function component()
{
    const div = document.createElement('div');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    
    div.classList.add('container');
    p.innerHTML = _.join(['Hello', 'webpack '], ' ');
    span.classList.add('badge','badge-danger', 'badge-pill');
    btn.innerHTML = 'Click me!';
    btn.classList.add('btn', 'btn-primary');
    btn.onclick = function(){
        speaker.speak();
        speaker.modify(span);
    };
    
    p.appendChild(span);
    div.appendChild(p);
    div.appendChild(btn);

    return div;
}

document.body.appendChild(component());