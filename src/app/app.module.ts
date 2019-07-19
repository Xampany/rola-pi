import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { PiColorPipe } from './shared/pi-color.pipe';
import { LedListComponent } from './led-list/led-list.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { RestService } from './shared/rest.service';
import { RestStubService } from './stubs/rest-stub.service';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    PiColorPipe,
    LedListComponent,
    ActionBarComponent,
    ColorFormComponent,
    DashboardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: RestService,
      useClass: RestStubService
    },
    {
      provide: 'BASE_URL',
      useValue:
        'https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
