import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from '../../interfaces/document';
import { DocumentModule } from './document.module';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) { }

    getDocumentsSmall() {
        return this.http.get<any>('assets/data/documents/documents-small.json')
            .toPromise()
            .then(res => <Document[]>res.data)
            .then(data => { return data; });
    }
}

