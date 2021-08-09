import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CreateUser } from './create_user.component'

const routes = [
  {
    path: '',
    component: CreateUser,
  },
]

@NgModule({
  declarations: [CreateUser],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CreateUser],
})
export class CreateUserModule {}
