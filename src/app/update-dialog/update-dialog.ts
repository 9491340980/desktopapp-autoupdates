import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-update-dialog',
  imports: [CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule],
  templateUrl: './update-dialog.html',
  styleUrl: './update-dialog.scss',
})
export class UpdateDialog {
  downloading = false;
  downloaded = false;
  progress = 0;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onDownload() {
    this.downloading = true;
    this.dialogRef.close('download');
  }

  onInstall() {
    this.dialogRef.close('install');
  }

  onDismiss() {
    this.dialogRef.close('dismiss');
  }

  updateProgress(percent: number) {
    this.progress = percent;
  }

  setDownloaded() {
    this.downloading = false;
    this.downloaded = true;
  }
}
