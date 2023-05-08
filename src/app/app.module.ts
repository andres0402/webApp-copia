import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BenefitsModule } from './benefits/benefits.module';
import { MeetingsModule } from './meetings/meetings.module';
import { ProductsModule } from './products/products.module';
import { UserPreferencesModule } from './userPreferences/user-preferences.module';
import { HomeComponent } from './home/components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ManagementModule } from './management/management.module';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BenefitsModule,
    MeetingsModule,
    ProductsModule,
    UserPreferencesModule,
    HttpClientModule,
    ManagementModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
