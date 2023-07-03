import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, DataAdapterUtils, DiscreteBarChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3Locale.service';

@Component({
  selector: 'app-products-chart',
  templateUrl: './products-chart.component.html',
  styleUrls: ['./products-chart.component.css']
})
export class ProductsChartComponent implements OnInit {

  @ViewChild('discretebar',{static:true}) protected discretebar: OChartComponent;
  public chartParameters: DiscreteBarChartConfiguration;

  noTranslateData = [
    { "date": 1672574400000, "value": 1 },
    { "date": 1675252800000, "value": 5 },
    { "date": 1677672000000, "value": 3 },
    { "date": 1680350400000, "value": 8 },
    { "date": 1682942400000, "value": 9 },
    { "date": 1685620800000, "value": 10 },
    { "date": 1688212800000, "value": 5 },
    { "date": 1690891200000, "value": 3 },
    { "date": 1693569600000, "value": 1 },
    { "date": 1696161600000, "value": 2 },
    { "date": 1698840000000, "value": 1 },
    { "date": 1701432000000, "value": 5 }
  ];
    
  constructor(private translateService: OTranslateService, private d3LocaleService:D3LocaleService, private router: Router) { 
    this.translateService.onLanguageChanged.subscribe(() => this.reloadComponent());
  }

  ngOnInit() {
    this.configureLanguage();
    let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.discretebar.setDataArray(dataAdapter.adaptResult(this.noTranslateData));
  }

  private configureLanguage(){
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.configureDiscreteBarChart(d3Locale);
  }

  private configureDiscreteBarChart(locale: any): void {
    let colors:string[] = ['#1464a5','#4649A6','#41bf78','#363636','#006bdb']
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.xAxis = "date";
    this.chartParameters.yAxis = ["value"];
    this.chartParameters.color = colors;
    this.chartParameters.xDataType = d => locale.timeFormat('%b')(new Date(d));
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
