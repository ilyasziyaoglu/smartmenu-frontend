import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Category} from '../model/models';

@Component({
  selector: 'app-dialog-category-edit',
  templateUrl: './dialog-category-edit.component.html',
  styleUrls: ['./dialog-category-edit.component.scss']
})
export class DialogCategoryEditComponent implements OnInit {

  category: Category = new Category();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialogRef<DialogCategoryEditComponent>) {
  }

  ngOnInit(): void {
  }

  saveClick() {
    this.dialog.close({category: this.category});
  }

  cancelClick() {
    this.dialog.close({});
  }

  addPhotoClick() {

  }

}
