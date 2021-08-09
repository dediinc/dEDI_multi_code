import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Forms } from './forms.component'

const routes = [
  {
    path: '',
    component: Forms,
  },
]

@NgModule({
  declarations: [Forms],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Forms],
})
export class FormsModule {}
