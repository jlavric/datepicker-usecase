## ng2-datetime picker
Project based on: [link](https://nkalinov.github.io/ng2-datetime/)

Component ng2-datetime is changed in a way that can be used in **model driven** forms.
**Template driven** forms example is hidden in ```example.ts```:)


## Setup

Put following into **index.html**. You can tweak it to suit your needs.
```
    <!-- bootstrap css -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <!-- font awesome css -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
    
    <!-- datepicker and timepicker css -->
    <link rel="stylesheet" href="app/shared/ng2-datetime/bootstrap-timepicker/bootstrap-timepicker.min.css">
    <link rel="stylesheet" href="app/shared/ng2-datetime/bootstrap-datepicker/bootstrap-datepicker3.min.css">
```
    ...
```
    <!-- jQuery js -->
    <script src="https://code.jquery.com/jquery-3.1.0.min.js"
            integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
    
    <!-- datepicker and timepicker js -->
    <script src="app/shared/ng2-datetime/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
    <script src="app/shared/ng2-datetime/bootstrap-timepicker/bootstrap-timepicker.min.js"></script>
```
## Typings for jQuery

```
    typings install dt~jquery --global
```

## Angular2 steps

Import **NKDatetimeModule** and **FormsModule** in ```app.module.ts```.
```
// example if ng2-datetime module exists in /shared folder
import { FormsModule}   from '@angular/forms';
import { NKDatetimeModule } from './shared/ng2-datetime/ng2-datetime.module';

@NgModule({
  imports:      [ BrowserModule, NKDatetimeModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

```
Take a look at short examples in **ExampleComponent**. Simply add **ExampleComponent** to ```app.module.ts```.
```
// example if ng2-datetime module exists in /shared folder
import { FormsModule}   from '@angular/forms';
import { NKDatetimeModule } from './shared/ng2-datetime/ng2-datetime.module';
import { ExampleComponent } from './shared/ng2-datetime/example.component';

@NgModule({
  imports:      [ BrowserModule, NKDatetimeModule, FormsModule ],
  declarations: [ AppComponent, ExampleComponent ],
  bootstrap:    [ AppComponent ]
})
```
ExampleComponent is shown where ```<datepicker-example>``` selector is used. 
    
## Known issues
Do not use **margin** on ```body```. It breaks left and top position of popup.