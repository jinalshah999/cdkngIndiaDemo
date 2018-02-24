import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fontdialog',
  templateUrl: './fontdialog.component.html',
  styleUrls: ['./fontdialog.component.css']
})
export class FontdialogComponent implements OnInit {
isOpen=false;
selectedFont='';
fonts=[
  { name: "verdana" },
    { name: "courier" },
    { name: "Comic Sans MS" },
    { name: "Arial Black" },
    { name: "Times New Roman" },
    { name: "Georgia" },
    { name: "Blackadder ITC" }
];

  constructor() { }

  ngOnInit() {
  }

}
