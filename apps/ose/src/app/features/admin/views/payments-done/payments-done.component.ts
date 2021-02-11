import { Component, OnInit } from '@angular/core';
import { PaidDocument } from '../../interfaces/document.interface';
import { DocumentService } from '../../../../../../../../libs/ose-commons/src/lib/services/document/document.service';
@Component({
  selector: 'app-payments-done',
  templateUrl: './payments-done.component.html',
  styleUrls: ['./payments-done.component.scss']
})
export class PaymentsDoneComponent implements OnInit {
  
      documents: PaidDocument[];
  
      selectedDocuments: Document[];
    
      statuses: any[];
  
      loading: boolean = true;
    
      constructor(private documentService: DocumentService) { }
  
      ngOnInit() {
          this.documentService.getPaidDocuments().then(documents => {
              this.documents = documents;
              this.loading = false;
              this.documents.forEach(document => document.dateEmit = new Date(document.dateEmit));
          });
  
      }
  }


