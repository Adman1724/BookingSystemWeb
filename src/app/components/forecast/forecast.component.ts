import { Component, OnInit } from '@angular/core';
import { TestHttpServiceService } from 'src/app/lib/services/test-http-service.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  data: any;

  constructor(private testHttpService: TestHttpServiceService) { }

  ngOnInit(): void {
    this.testHttpService.getForecast().subscribe((data)=> {
      console.log(data);
      this.data = data;
    })
  }

}
