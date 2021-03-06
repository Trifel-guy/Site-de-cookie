import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './structure/menu/menu.component';
import { FooterComponent } from './structure/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { CartComponent } from './pages/cart/cart.component';
import { CookieComponent } from './pages/cookie/cookie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailCookieComponent } from './pages/detail-cookie/detail-cookie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ConnectionComponent,
    CartComponent,
    CookieComponent,
    DetailCookieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
