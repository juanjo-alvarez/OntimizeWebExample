import { Component, OnInit, ViewChild } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, CandlestickChartConfiguration, DataAdapterUtils, LineChartConfiguration, DiscreteBarChartConfiguration, LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3Locale.service';
import { D3Locales } from 'src/app/shared/d3-locale/locales';

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
    
  constructor(private translateService: OTranslateService, private d3LocaleService:D3LocaleService) { }

  ngOnInit() {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureDiscreteBarChart(d3Locale);
    let dataAdapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.discretebar.setDataArray(dataAdapter.adaptResult(this.noTranslateData));
  }
   
  private _configureDiscreteBarChart(locale: any): void {
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.xAxis = "date";
    this.chartParameters.yAxis = ["value"];
    this.chartParameters.xDataType = d => locale.timeFormat('%b')(new Date(d));
  }
}