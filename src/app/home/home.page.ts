import { Component, OnInit } from '@angular/core';
import { GuilbaudApiService } from '../guilbaud-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items: any;
  constructor(
    private GuilbaudApiService:GuilbaudApiService
  ) {}

  ngOnInit(): void {
    this.GuilbaudApiService.obtenerproductos().subscribe((descendientes)=>{
      
      this.items=descendientes;
      localStorage.setItem('descendientes',JSON.stringify(this.items));
    })
  }

}
