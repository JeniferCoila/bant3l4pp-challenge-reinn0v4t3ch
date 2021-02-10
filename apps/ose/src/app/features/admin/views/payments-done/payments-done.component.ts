import { Component, OnInit } from '@angular/core';
import { Document } from '../../interfaces/document.interface';
import { DocumentService } from '../../../../../../../../libs/ose-commons/src/lib/services/document/document.service';
@Component({
  selector: 'app-payments-done',
  templateUrl: './payments-done.component.html',
  styleUrls: ['./payments-done.component.scss']
})
export class PaymentsDoneComponent implements OnInit {
  
      documents: Document[];
  
      selectedDocuments: Document[];
    
      statuses: any[];
  
      loading: boolean = true;
  
      activityValues: number[] = [0, 100];
  
      constructor(private documentService: DocumentService) { }
  
      ngOnInit() {
          this.documentService.getDocumentsSmall().then(documents => {
              this.documents = documents;
              this.loading = false;
              this.documents.forEach(document => document.dateEmit = new Date(document.dateEmit));
          });
  

  
          this.statuses = [
              {label: 'Unqualified', value: 'unqualified'},
              {label: 'Qualified', value: 'qualified'},
              {label: 'New', value: 'new'},
              {label: 'Negotiation', value: 'negotiation'},
              {label: 'Renewal', value: 'renewal'},
              {label: 'Proposal', value: 'proposal'}
          ]
      }
  }


