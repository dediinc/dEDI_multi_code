import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Component4 } from './component4/component4.component'
import { Component2 } from './component2/component2.component'
import { Buttom } from './buttom/buttom.component'
import { Tip } from './tip/tip.component'
import { Component9 } from './component9/component9.component'
import { Component11 } from './component11/component11.component'
import { Navbar } from './navbar/navbar.component'
import { Component5 } from './component5/component5.component'
import { AppComponent } from './component/component.component'
import { ListItem } from './list-item/list-item.component'
import { Component10 } from './component10/component10.component'
import { Heading } from './heading/heading.component'
import { Component3 } from './component3/component3.component'
import { Component6 } from './component6/component6.component'
import { Component8 } from './component8/component8.component'
import { Component7 } from './component7/component7.component'
import { Component1 } from './component1/component1.component'

@NgModule({
  declarations: [
    Component4,
    Component2,
    Buttom,
    Tip,
    Component9,
    Component11,
    Navbar,
    Component5,
    AppComponent,
    ListItem,
    Component10,
    Heading,
    Component3,
    Component6,
    Component8,
    Component7,
    Component1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Component4,
    Component2,
    Buttom,
    Tip,
    Component9,
    Component11,
    Navbar,
    Component5,
    AppComponent,
    ListItem,
    Component10,
    Heading,
    Component3,
    Component6,
    Component8,
    Component7,
    Component1,
  ],
})
export class ComponentsModule {}
