import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatWrapComponent } from './components/chat-wrap/chat-wrap.component';

const routes: Routes = [
  {
    path: '',
    component: ChatWrapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {
}
