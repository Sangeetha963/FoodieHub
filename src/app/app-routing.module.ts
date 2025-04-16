import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPreviewSectionComponent } from './functional/menu-preview-section/menu-preview-section.component';
import { TodaysOfferComponent } from './functional/todays-offer/todays-offer.component';
import { PlaceOrderComponent } from './functional/place-order/place-order.component';

const routes: Routes = [
  { path: 'menu', component: MenuPreviewSectionComponent },
  { path: 'offers', component: TodaysOfferComponent },
  { path: 'order', component: PlaceOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
