import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [
    // ...existing code...
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [/* ...existing code... */]
})
export class AppModule { }