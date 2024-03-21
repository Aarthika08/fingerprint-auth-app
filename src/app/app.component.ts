// Import necessary modules and components
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickGridModule } from 'angular-slickgrid';

// Define a sample data source
const mockData = [
  { id: 1, title: 'Task 1', duration: 5 },
  { id: 2, title: 'Task 2', duration: 10 },
  { id: 3, title: 'Task 3', duration: 15 },
];

// Define an Angular component where you want to display the grid
@Component({
  selector: 'app-grid',
  template: '<angular-slickgrid gridId="grid1" [columnDefinitions]="columnDefinitions" [gridOptions]="gridOptions" [dataset]="dataset"></angular-slickgrid>'
})
export class GridComponent {
  columnDefinitions = [
    { id: 'id', name: 'ID', field: 'id', sortable: true },
    { id: 'title', name: 'Title', field: 'title', sortable: true },
    { id: 'duration', name: 'Duration', field: 'duration', sortable: true }
  ];

  gridOptions = {
    enableAutoResize: true,
    enableCellNavigation: true,
    enableSorting: true
  };

  dataset = mockData;
}

// Define the Angular module
@NgModule({
  imports: [BrowserModule, SlickGridModule],
  declarations: [GridComponent],
  bootstrap: [GridComponent]
})
export class AppModule {}
