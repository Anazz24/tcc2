import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'anotacoes',
    loadChildren: () => import('./anotacoes/anotacoes.module').then( m => m.AnotacoesPageModule)
  },
  {
    path: 'vacinas',
    loadChildren: () => import('./vacinas/vacinas.module').then( m => m.VacinasPageModule)
  },
  {
    path: 'diario',
    loadChildren: () => import('./diario/diario.module').then( m => m.DiarioPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
