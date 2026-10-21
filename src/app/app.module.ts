import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { CheckoutBodyComponent } from './checkout-body/checkout-body.component';
import { CheckoutNav } from './checkout-nav/checkout-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    App,
    CheckoutBodyComponent,
    CheckoutNav,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
