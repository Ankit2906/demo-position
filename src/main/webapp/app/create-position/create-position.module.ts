import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePositionComponent } from './create-position.component';
import { CreatePositionRoutingModule } from './create-position-routing.module';
import { DemoSharedLibsModule } from 'app/shared/shared-libs.module';

@NgModule({
  declarations: [CreatePositionComponent],
  imports: [CommonModule, DemoSharedLibsModule, CreatePositionRoutingModule],
})
export class CreatePositionModule {}
