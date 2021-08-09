import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CreateOrg } from './create_org.component'

const routes = [
  {
    path: '',
    component: CreateOrg,
  },
]

@NgModule({
  declarations: [CreateOrg],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CreateOrg],
})
export class CreateOrgModule {}
