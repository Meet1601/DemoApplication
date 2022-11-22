import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/Container.component';
import { CustomedirectiveDirective } from './customedirective.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CustomedirectiveDirective,
    ContainerComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
