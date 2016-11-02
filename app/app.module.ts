import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NKDatetimeModule } from './shared/ng2-datetime/ng2-datetime.module';
import { ExampleComponent } from './shared/ng2-datetime/example.component';

@NgModule({
  imports:      [ BrowserModule, NKDatetimeModule, FormsModule ],
  declarations: [ AppComponent, ExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
