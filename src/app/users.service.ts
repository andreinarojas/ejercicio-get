import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

  getData()  {
    let url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    return this._http.get(url)
  }
}
