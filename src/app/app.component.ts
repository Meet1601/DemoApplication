import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApplication';
  inputText: string = '';
  destroy: boolean = true;

  OnSubmit(inputEl: HTMLInputElement){
    this.inputText = inputEl.value;
  }
  loginUser(item:any)
  {
      console.warn(item);
      
  }
  DestroyComponent(){
    this.destroy = false;
  }
}
