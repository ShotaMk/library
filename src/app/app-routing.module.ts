import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/content/content.module').then(m => m.ContentModule) },
  { path: '**',  component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
