import { Component, OnInit } from '@angular/core';
import { PendingDocument } from '../../interfaces/document.interface';
import { DocumentService } from '../../../../../../../../libs/ose-commons/src/lib/services/document/document.service';

@Component({
  selector: 'app-pending-documents',
  templateUrl: './pending-documents.component.html',
  styleUrls: ['./pending-documents.component.scss']
})
export class PendingDocumentsComponent implements OnInit {
  
      documents: PendingDocument[];
  
      selectedDocuments: PendingDocument[];
    
      statuses: any[];
  
      loading: boolean = true;
    
      constructor(private documentService: DocumentService) { }
  
      ngOnInit() {
          this.documentService.getPendingDocuments().then(documents => {
              this.documents = documents;
              this.loading = false;
              this.documents.forEach(document => document.dateEmit = new Date(document.dateEmit));
          });
  
      }
  }

