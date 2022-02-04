import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FacebookComponent } from './facebook/facebook.component';
import { HomebannerComponent } from './homebanner/homebanner.component';
import { InstaComponent } from './insta/insta.component';
import { LolComponent } from './lol/lol.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  {path:'home',component:HomebannerComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'facebook',component:FacebookComponent},
  {path:'lol',component:LolComponent},
  {path:'instagram',component:InstaComponent},
  {path:'tiktok',component:TiktokComponent},
  {path:'about',component:AboutComponent},
  {path:'youtube',component:YoutubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
