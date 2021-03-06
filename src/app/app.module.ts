import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { ClarityModule } from 'clarity-angular';
import { NgUploaderModule } from 'ngx-uploader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    UsersModule,
    AdminModule,
    LoginModule,
    NgUploaderModule,
    ClarityModule.forRoot()
  ],
  providers: [
    {provide: 'API_URL', useValue: 'http://localhost:3001'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
