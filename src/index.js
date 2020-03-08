import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css';

function component()
{
    const element = document.createElement('button');
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('btn', 'btn-primary');
    
    return element;
}

document.body.appendChild(component());