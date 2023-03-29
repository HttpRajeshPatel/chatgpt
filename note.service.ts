import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Result } from 'src/app/global/models/result.model';
import { SearchNoteDto } from '../model/search-note.model';
import { NoteDto } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  GetList(dto: SearchNoteDto, page: number = 1, recordsPerPage: number = 10) {
    let url = `${environment.urls.note}`;
    url = url + '?' + '$p=' + page + '&$r=' + recordsPerPage;
    let httpParams = new HttpParams();
    Object.keys(dto).forEach(key => {
      httpParams = httpParams.append(key, dto[key]);
    });

    return this.http.get<Result<NoteDto[]>>(url, { params: httpParams });
  }

  Post(id: string, dto: NoteDto) {
    const url = `${environment.urls.note}/${id}`;
    return this.http.post<Result<object>>(url, dto);
  }

  // Application Get and Post Note
  GetApplicationNotesList(dto: SearchNoteDto, page: number = 1, recordsPerPage: number = 50) {
    let url = `${environment.urls.note}/application-note`;
    url = url + '?' + '$p=' + page + '&$r=' + recordsPerPage;
    let httpParams = new HttpParams();
    Object.keys(dto).forEach(key => {
      httpParams = httpParams.append(key, dto[key]);
    });

    return this.http.get<Result<NoteDto[]>>(url, { params: httpParams });
  }

  PostApplication(id: string, dto: NoteDto) {
    const url = `${environment.urls.note}/${id}/application-note`;
    return this.http.post<Result<object>>(url, dto);
  }

  // Scheme Holder get and post
  getSchemeHolderNotes(dto: SearchNoteDto, page: number = 1, recordsPerPage: number = 10) {
    let url = `${environment.urls.note}/scheme-holder-notes`;
    url = url + '?' + '$p=' + page + '&$r=' + recordsPerPage;
    let httpParams = new HttpParams();
    Object.keys(dto).forEach(key => {
      httpParams = httpParams.append(key, dto[key]);
    });
    return this.http.get<Result<any>>(url, { params: httpParams });
  }

  postSchemeHolderNotes(dto) {
    const url = `${environment.urls.note}/add-scheme-holder-note`;
    return this.http.post<Result<object>>(url, dto);
  }
}
