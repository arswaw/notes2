import { RouterModule }  from '@angular/router';
//components
import {QualityComponent} from './quality.component';

export const routing = RouterModule.forChild([
    { 
        path: 'quality', 
        children: [
            {
                path: '',
                component: QualityComponent,
            }
        ]
    }
]);