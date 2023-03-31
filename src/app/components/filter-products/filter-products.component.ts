import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AllAdsService } from '../../service/all-ads.service';
import { LocationsInformationService } from '../../service/locations-information.service';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit , OnChanges {
  isGrid:boolean = true
  colors:any
  sizesSelected:number[] = []
  optionsSelected:number[] = []
  isOnline:boolean = false
  cities:any
  city:any = -1
  allColors:boolean = false
  allSizes:boolean = false
  seller_type:any = 0
  isMinVal:any = undefined
  isMaxVal:any = undefined


  minValue: number = 0;
  maxValue: number = 30000;
  options: Options = {
    floor: 0,
    ceil: 30000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };


  @Input() catSelected:any
  @Input() subSelected:any
  @Input() subSubSelected:any
  @Input() isSub:any
  @Input() categories:any
  @Input() subCategories:any
  @Input() subSubCategories:any
  @Output() catIdSelected = new EventEmitter();
  @Output() subIdSelected = new EventEmitter();
  @Output() subSubIdSelected = new EventEmitter();
  @Output() infoReq = new EventEmitter();
  sizes:any
  properties:any
  // currentPage:number = 1

  data:any
  constructor(
    private allAds:AllAdsService,
    private location:LocationsInformationService,
    private ngxService: NgxUiLoaderService
    ) { }

  counter(i: number) {
    return new Array(i);
}

changeCat(event:any){
  this.catIdSelected.emit(event.target.value)
  console.log(event.target.value);

  this.getProperties(event.target.value)

  // console.log(event.target.value);
  this.getSizesAndColors(event.target.value)
  this.handleReq()
}
handleReq(){
  this.data = []
  this.infoReq.emit({
    colors:this.checkSelected(this.colors),
    sizes:this.checkSelected(this.sizes),
    properties:this.checkMultiSelected(this.properties),
    is_online:this.isOnline == true?1:0,
    cities:this.city == -1 ?[]:[this.city],
    min_price:this.isMinVal,
    max_price: this.isMaxVal,
    seller_type:this.seller_type == 0?undefined:this.seller_type
  })
  // console.log({
  //   colors:this.checkSelected(this.colors),
  //   sizes:this.checkSelected(this.sizes),
  //   properties:this.checkMultiSelected(this.properties),
  //   is_online:this.isOnline == true?1:0,
  //   cities:this.city == -1 ?[]:this,
  //   min_price:this.minValue,
  //   max_price:this.maxValue
  // });
}

myMimValue(){
  this.isMinVal = this.minValue
}
myMaxValue(){
  this.isMaxVal = this.maxValue
}

changePrice(){
  this.myMimValue()
  this.myMaxValue()
  this.handleReq()
}
changeSub(event:any){
  if(event.target.value == -1){
    this.subIdSelected.emit({id:event.target.value ,hasCat:false})
    return;
  }
  let doc = this.subCategories.filter((el:any)=> el.id == event.target.value)
  this.subIdSelected.emit({id:doc[0].id,hasCat:doc[0].has_category})
}

changeSubSub(event:any){
  this.subSubIdSelected.emit(event.target.value)
}

checkSelected(selected:any){
  let colors = []
  for(let color of selected){
    if(color.isActive){
      colors.push(color.id)
    }
  }
  // console.log(colors);
  return colors;
}

checkMultiSelected(selected:any){
  let myProperties:any[] = []
  for(let prop of selected){
    // console.log(prop);
    let myObj = {id:0,options:[]}
    myObj.id = prop.id
    prop.options.forEach((element:{id:number,isSelected:boolean}) => {
      // console.log(element);
      element.isSelected == true?myObj.options.push(element.id as never): true;
    });
    myProperties.push(myObj)
  }
  // console.log(myProperties);

  return this.convertStringifyArr(myProperties);
}

convertStringifyArr(data:any[]){
  console.log(data);
  data.forEach(element=>{
    element.options = JSON.stringify(element.options)
  })
  console.log(data);
return data
}

toggleSizeSelected(size:number){
  if(this.sizes[size].isActive){
    this.sizes[size].isActive = false
    this.handleReq()
    return
  }
  this.sizes[size].isActive = true
  this.handleReq()
}

checkActive(event:any){
  console.log();
  if(this.colors[event].isActive){
    this.colors[event].isActive = false
    this.handleReq()
    return
  }
  this.colors[event].isActive = true
  this.handleReq()
}
selectAllColors(){
  if(this.allColors){
    this.colors.map((color:any)=>{
      color.isActive = true
    })
    this.handleReq()
  }else{
    this.colors.map((color:any)=>{
      color.isActive = false
    })
    this.handleReq()
  }
}
SelectAllSizes(){
  if(this.allSizes){
    this.sizes.map((size:any)=>{
      size.isActive = true
    })
    this.handleReq()
  }else{
    this.sizes.map((size:any)=>{
      size.isActive = false
    })
    this.handleReq()
  }
}

changeGrid(){
  this.isGrid = false
}

changeList(){
  this.isGrid = true
}

getData(){
  this.allAds.data$.subscribe((res:any)=>{
    // console.log(res.Response);
    this.data = res.Response
    // this.options.ceil = res.Response.max_price
    // this.options.floor = res.Response.min_price
    // this.maxValue = res.Response.max_price
    // this.minValue = res.Response.min_price
  },(error:any)=>{
    console.log(error);
  })
}

changeSelected(id:any,index:any){
  this.properties[index].selectedAll = false
  this.properties[index].options = this.properties[index].options.map((doc:any) => doc.id == id? {...doc,isSelected:doc.isSelected == true?false:true} : doc)
  // console.log(this.properties[index].options);
  this.handleReq()
}


getSizesAndColors(catSelected:any){
  // console.log(catSelected);
  this.colors = []
  this.sizes = []
  this.allAds.getSizesAndColors(catSelected).subscribe((res:any)=>{
    res.Response.colors.map((color:any)=>{
      color.isActive = false
    })
    res.Response.sizes.map((size:any)=>{
      size.isActive = false
    })
    // console.log(res.Response.sizes);
    this.colors = res.Response.colors
    this.sizes = res.Response.sizes
  },(error:any)=>{
    console.log(error);
  })
}
getProperties(id:any){
  this.properties = []
  if(id != -1){
    this.allAds.getProperties(id).subscribe((res:any)=>{
      res.Response.forEach((element:any) => {
        element.selectedAll = false
        element.options.forEach((ele:any) => {
          ele.isSelected = false
        });
      });
      console.log(res.Response);
      this.properties = res.Response
    },(error:any)=>{
      console.log(error);
    })
  }
}

getCities(){
  this.location.getCountries().subscribe((res:any)=>{
    // console.log(res.Response);
    this.cities = res.Response
    // this.ngxService.stop();
  },(error:any)=>{
    console.log(error);
  })
}

// nextPage(){
//   if(this.currentPage < this.data.last_page){
//     this.currentPage += 1
//     // console.log('next if',this.currentPage);
//     // this.getProducts()
//   }else{
//     // console.log('next else',this.currentPage);
//   }
// }

// previousPage(){
//   if(this.currentPage > 1){
//     this.currentPage -= 1
//     // console.log('prev if',this.currentPage);
//     // this.getProducts()
//   }
// }

// changePage(i:any){
//   this.currentPage = i
//   // console.log('change if',this.currentPage);
//   // this.getProducts()
// }

ngOnInit(): void {
  this.getData()
  this.getSizesAndColors(this.catSelected)
  this.getProperties(this.catSelected)
  this.getCities()
  this.ngxService.startBackground("do-background-things");
    // Do something here...
    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01"); // start foreground spinner of the loader "loader-01" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader("loader-01"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 5000);
}

checkAllInMyArr(index:any){
  if(this.properties[index].selectedAll){
    this.properties[index].selectedAll = !this.properties[index].selectedAll
    this.properties[index].options.forEach((el:any)=>{
      el.isSelected = this.properties[index].selectedAll;
    })
  }else{
    this.properties[index].selectedAll = !this.properties[index].selectedAll
    this.properties[index].options.forEach((el:any)=>{
      el.isSelected = this.properties[index].selectedAll;
    })
  }
  this.handleReq()
}

analyticsChange(obj:object){
  let myChanges:string[] = ['catSelected',]
}


ngOnChanges(changes: SimpleChanges) {
  // changes.prop contains the old and the new value...
  // console.log(changes);


  if (Object.keys(changes).includes('catSelected')) {
    // I'm Removed Change = -1   // && changes.catSelected.currentValue != -1
    this.getProperties(changes.catSelected.currentValue)
    this.getSizesAndColors(changes.catSelected.currentValue)
    this.handleReq()
  }else if (Object.keys(changes).includes('subSelected') && changes.subSelected.currentValue != -1) {

    // console.log('subSelected');

    this.getProperties(changes.subSelected.currentValue)
    this.getSizesAndColors(changes.subSelected.currentValue)
    this.handleReq()
  }else if (Object.keys(changes).includes('subSubSelected') && changes.subSubSelected.currentValue != -1) {

    // console.log('subSubSelected');

    this.getProperties(changes.subSubSelected.currentValue)
    this.getSizesAndColors(changes.subSubSelected.currentValue)
    this.handleReq()
  }

}

}
