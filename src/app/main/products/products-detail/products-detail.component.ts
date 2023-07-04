import { formatDate } from '@angular/common';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import { DialogService, ODateInputComponent, OFileInputComponent, OFormComponent, OTableComponent, OntimizeService } from 'ontimize-web-ngx';



@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  public today: number;
  protected productService: OntimizeService;
  public availableDates:Date[]=[];

  @ViewChild('form',{static:true}) form:OFormComponent;
  @ViewChild('filetable',{static:true}) fileTable:OTableComponent;
  @ViewChild('fileinput',{static:true}) fileInput:OFileInputComponent;
  @ViewChild('filedate',{static:true}) fileDate:ODateInputComponent;

  constructor(protected dialogService: DialogService,public injector: Injector) {
    this.productService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    this.today = Date.now();
    const conf = this.productService.getDefaultServiceConfiguration('products');
    this.productService.configureService(conf);
    this.availableDates.push(new Date("2023-07-08"+"T00:00:00Z")); 
    this.availableDates.push(new Date("2023-07-09"+"T00:00:00Z")); 
    this.availableDates.push(new Date("2023-07-10"+"T00:00:00Z")); 
  }

  getFileData(){
    return {PRODUCT_ID:this.form.getDataValue('ID')}
  }

  onUploadFiles(event){
    if(event.response){
      let data = event.response.data;
      let errors:string[]= data.filter(element => element.status != "OK" && element.status != "ALREADY_EXIST").map(element => {return element.name});
      let oks:string[] = data.filter(element => element.status === "OK").map(element => {return element.name});
      let exists:string[]= data.filter(element => element.status === "ALREADY_EXIST").map(element => {return element.name});
      let message:string = '<p><b>Resultado de la subida de documentos:</b></p>';
      if(oks.length>0){
        message+='<p>Ficheros subidos correctamente: <ul><li>'+oks.join("</li><li>")+"</li></ul></p>";
      }
      if(exists.length>0){
        message+='<p>Ficheros que no se han subido por que ya existen: <ul><li>'+exists.join("</li><li>")+"</li></ul></p>";
      }
      if(errors.length>0){
        message+='<p>Ficheros que generaron un error en la subida: <ul><li>'+errors.join("</li><li>")+"</li></ul></p>";
      }
      if (this.dialogService) {
        if(errors.length ===0){
          this.dialogService.info('Resultado',message);
        }else{
          this.dialogService.error('Resultado',message);
        }
        
      }
    }
    this.fileInput.clearValue();
    this.fileTable.refresh();
  }

  actionClick(event){
    this.productService.query({id:event.ID}, ['NAME','BASE64'], 'fileContent').subscribe(res => {
      if (res.data && res.data.length) {
        let filename = res.data[0].NAME;
        let base64 = res.data[0].BASE64;
        const src = `data:text/csv;base64,${base64}`;
        const link = document.createElement("a");
        link.href = src;
        link.download = filename;
        link.click();
        link.remove();
      }
    });
    
  }

  onError(event){
    if(event.status === 507){
      this.showError(event);
    }
    this.fileInput.clearValue();
  }

  showError(event: any) {
    if (this.dialogService) {
    this.dialogService.error('Error',
        'El fichero ya existe');
    }
  }

  filterAvailability(date: Moment):boolean{
    let compDate: Date = date.toDate();
    for(let availableDate of this.availableDates){
      if(availableDate.toDateString() === compDate.toDateString()){
        return false;
      }
    }
    return true;
  }
}