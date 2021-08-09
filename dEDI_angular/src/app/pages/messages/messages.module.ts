import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Messages } from './messages.component'

const routes = [
  {
    path: '',
    component: Messages,
  },
]

@NgModule({
  declarations: [Messages],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Messages],
})
export class MessagesModule {}
