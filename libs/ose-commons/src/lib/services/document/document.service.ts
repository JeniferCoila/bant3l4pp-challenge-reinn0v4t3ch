import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from '../../interfaces/document';
import { DocumentModule } from './document.module';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/data/documents/documents-small.json')
            .toPromise()
            .then(res => <Document[]>res.data)
            .then(data => { return data; });
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/data/documents/documents-medium.json')
            .toPromise()
            .then(res => <Document[]>res.data)
            .then(data => { return data; });
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/data/documents/documents-large.json')
            .toPromise()
            .then(res => <Document[]>res.data)
            .then(data => { return data; });
    }

    getCustomersXLarge() {
        return this.http.get<any>('assets/data/documents/documents-xlarge.json')
            .toPromise()
            .then(res => <Document[]>res.data)
            .then(data => { return data; });
    }

    getCustomers(params) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', {params: params}).toPromise();
    }
}

