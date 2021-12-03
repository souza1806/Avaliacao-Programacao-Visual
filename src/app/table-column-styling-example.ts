import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Brutus Militsa Jabin', weight: '19/11/2004', symbol: '17/02/2005'},
  {position: 2, name: 'Ruaidhrí Naz Ivona', weight: '31/01/2007', symbol: '01/05/2007'},
  {position: 3, name: 'Dimitar Lída Pollux', weight: '23/04/2008', symbol: '22/07/2008'},
  {position: 4, name: 'Stanko Raziel Marguerite', weight: '30/08/2012', symbol: '28/11/2012'},
  {position: 5, name: 'Mihael Kassiopeia Rosaura', weight: '02/09/2014', symbol: '01/12/2014'},
  {position: 6, name: 'Funmilayo Zlata Dragoslav', weight: '28/10/2014', symbol: '26/01/2015'},
  {position: 7, name: 'Teodor Swaran Nelly', weight: '20/03/2017', symbol: '18/06/2017'},
  {position: 8, name: 'Casimir Berniece Richard', weight: '05/06/2017', symbol: '03/09/2017'},
  {position: 9, name: 'Maarika Anatol Carry', weight: '26/10/2018', symbol: '24/01/2019'},
  {position: 10, name: 'Vita Janet Roland', weight: '06/03/2020', symbol: '04/06/2020'},
];

/**
 * @title Styling columns using their auto-generated column names
 */
@Component({
  selector: 'table-column-styling-example',
  styleUrls: ['table-column-styling-example.css'],
  templateUrl: 'table-column-styling-example.html',
})
export class TableColumnStylingExample {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
