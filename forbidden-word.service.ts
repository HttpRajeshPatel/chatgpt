import { Injectable } from '@angular/core';
import { Result } from 'src/app/global/models/result.model';
import { HttpClient } from '@angular/common/http';
import { forbiddenWordDto } from '../model/forbidden-word.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ForbiddenWordService {
  public accounts: Result<forbiddenWordDto[]>;
  constructor(private http: HttpClient) { }

  getList() {
    const url = `${environment.urls.forbiddenWord}`;
    return this.http.get<Result<forbiddenWordDto[]>>(url);
  }

  updateForbiddenWord(forbiddenWordDetials: forbiddenWordDto) {
    const url = `${environment.urls.forbiddenWord}/update-word`;
    return this.http.put<Result<any>>(url, forbiddenWordDetials);
  }

  deleteForbiddenWord(word: forbiddenWordDto) {
    const url = `${environment.urls.forbiddenWord}/${word.id}`;
    return this.http.delete<Result<any>>(url);
  }
}
