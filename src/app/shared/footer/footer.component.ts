import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  apiData: any;
  copyrightYear: any;
  appVersion: any;

  constructor( private sharedService: SharedService ) {}

  ngOnInit() {
    this.getApiData("2203"); 
  }

  getApiData(appId: any) {
    this.sharedService.getAppData(appId).subscribe((data => {
      this.apiData = data;
      this.copyrightYear = data.app.copyrightYear;
      this.appVersion = data.app.version;
    }))
  }

}
