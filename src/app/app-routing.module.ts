import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JokeComponent } from './joke/joke.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'joke', component: JokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
