import { AfterContentInit, Component, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[Title,]
})
export class AppComponent implements OnInit,AfterContentInit {

  constructor(private titleBroser:Title ){}
  ngAfterContentInit(): void {
    setTimeout(()=>{
      this.titleBroser.setTitle("Hello raoul");
    this.title.update(state=>state=this.titleBroser.getTitle());
    },5000);
  }
  ngOnInit(): void {
    this.title.update(state=>state=this.titleBroser.getTitle());
  }
  title =signal<string>("");


}
