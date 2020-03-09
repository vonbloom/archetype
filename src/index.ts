import * as _ from 'lodash'
import * as speaker from "./speaker";

import 'bootstrap/dist/css/bootstrap.min.css';

function component()
{
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    
    div.classList.add('container');
    p.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console';
    btn.classList.add('btn', 'btn-primary');
    btn.onclick = function(){
        speaker.speak();
        speaker.modify(p);
    };
    
    div.appendChild(p);
    div.appendChild(btn);

    return div;
}

document.body.appendChild(component());