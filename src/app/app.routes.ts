import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RecursosComponent } from './components/recursos/recursos.component';

export const routes: Routes = [
    {
        path: '',
        component: FormularioComponent
    },
    {
        path: 'recursos',
        component: RecursosComponent
    }
];
