import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tableData: any , searchText: any): any  {
    console.log("value",tableData);
    console.log("args",searchText);
    if(searchText) return tableData;
    let search = searchText.toLowerCase();
    return tableData.filter((element:any)=>{
      return JSON.stringify(element).toLowerCase().includes(search)
    })

    }
  }

