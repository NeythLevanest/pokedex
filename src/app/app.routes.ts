import { RouterModule, Routes } from '@angular/router';
import { PokeDashboardComponent } from './screens/poke-dashboard/poke-dashboard.component';
import { PokeSearchComponent } from './screens/poke-search/poke-search.component';

const app_routes: Routes =[
    {path:'', component: PokeSearchComponent},
    {path:'poke-info', component:PokeDashboardComponent},
   
    
    // {path:'register', component: RegisterComponent,
    //  children: [
    //      {path:'user', component: SignupComponent},
    //      {path:'emprendimiento', component: EmprendimientoComponent},
    //      {path:'registrar-servicios', component: SolicitarServiciosComponent},
    //      {path:'', pathMatch:'full', redirectTo:'user'}
    //  ]
    // }
    //{path:'**', pathMatch:'full', redirectTo:'home'}

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});