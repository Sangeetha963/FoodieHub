import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateDemoComponent } from './animate-demo/animate-demo.component';
import { FeaturesSectionComponent } from './functional/features-section/features-section.component';
import { HeaderComponent } from './global/header/header.component';
// import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { MenuPreviewSectionComponent } from './functional/menu-preview-section/menu-preview-section.component';
import { IngredientsComponent } from './functional/ingredients/ingredients.component';
import { TodaysOfferComponent } from './functional/todays-offer/todays-offer.component';
import { OurJourneyComponent } from './functional/our-journey/our-journey.component';
import { CommonButtonComponent } from './common/common-button/common-button.component';
import { PlaceOrderComponent } from './functional/place-order/place-order.component';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    AnimateDemoComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesSectionComponent,
    MenuPreviewSectionComponent,
    IngredientsComponent,
    TodaysOfferComponent,
    OurJourneyComponent,
    CommonButtonComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
