import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[FormsModule,CommonModule,HttpClientModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedFile: File | null = null;
  pdfUrl: SafeResourceUrl | null = null;
  pdfLink: string = '';

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.loadPdf();
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any) {
    event.preventDefault();
    this.selectedFile = event.dataTransfer.files[0];
    this.loadPdf();
  }

  uploadPdf() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('pdf', this.selectedFile);

      this.http.post('YOUR_BACKEND_ENDPOINT', formData).subscribe({
        next: (response: any) => {
          console.log('PDF uploaded successfully', response);
        },
        error: (error: any) => {
          console.error('Error uploading PDF', error);
        }
      });
    }
  }

  loadPdf() {
    if (this.selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const blob = new Blob([e.target.result], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      };
      fileReader.readAsArrayBuffer(this.selectedFile);
    }
  }

  loadPdfFromLink() {
    if (this.pdfLink) {
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfLink);
    }
  }
  

  triggerFileInputClick() {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click();
    }
  }
}
