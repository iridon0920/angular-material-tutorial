import { Component, EventEmitter, Inject } from '@angular/core';
import { Post } from '../post';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css'],
})
export class PostDialogComponent {
  blogPost: Post = {
    title: '',
    body: '',
    category: '',
    position: 0,
    datePosted: new Date(),
  };
  public event = new EventEmitter<{ data: Post }>();

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dataService: DataService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.blogPost.position = this.dataService.dataLength();
    this.event.emit({ data: this.blogPost });
    this.dialogRef.close();
  }

  categories = this.dataService.getCategories();
}
