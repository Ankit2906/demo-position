import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatePositionComponent } from './create-position.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CreatePositionComponent,
      },
    ]),
  ],
})
export class CreatePositionRoutingModule {}
