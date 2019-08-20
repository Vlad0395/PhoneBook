require('./bootstrap');
require('./style.css');
import React from 'react';
import {render} from 'react-dom';

import Router from './Router/index';

render(< Router/>, document.getElementById('example'));
