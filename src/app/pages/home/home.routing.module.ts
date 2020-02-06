import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from '@pages/home/home.page';


const routes: Routes = <Routes>[
    {
        path: ':app',
        component: HomePage,
        children: [
            {
                path: 'test1',
                loadChildren: './main-panel/test/test.module#TestPageModule',
            },
            {
                path: 'test2',
                loadChildren: './main-panel/test2/test2.module#Test2PageModule',
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NxRoutingModule {
}
