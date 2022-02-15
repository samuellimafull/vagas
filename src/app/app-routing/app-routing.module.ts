import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { OutrosVagasComponent } from '../outros-vagas/outros-vagas.component';

const rotas: Routes = [
  {path: 'mural', component: MuralVagasComponent},
  {path: 'painel', component: PainelVagasComponent},
  {path: 'outros', component: OutrosVagasComponent},
  {path: '', redirectTo: '/mural', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  //imports: [ CommonModule ],
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
