import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotacoesPageRoutingModule } from './anotacoes-routing.module';

import { AnotacoesPage } from './anotacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    AnotacoesPageRoutingModule
  ],
  declarations: [AnotacoesPage]
})
export class AnotacoesPageModule {}
