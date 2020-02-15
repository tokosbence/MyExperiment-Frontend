import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImageUploadService {


  constructor(private http: HttpClient,private authenticationService: AuthenticationService) { }

  private imageUrl = '//localhost:8080/upload';

  upload(formData) {

    return this.http.post(this.imageUrl, formData)
    .catch((err: any) => {
              // Do messaging and error handling here
              return Observable.throw(err.json().error || 'Server error')
            });
  }
  
  deleteFiles(deleteableFiles, name) {
    
    return this.http.post('/upload/delete/' + name, deleteableFiles, {responseType: 'text'})
      .catch((err: any) => {
        // Do messaging and error handling here
        return Observable.throw('Server error')
      });
  }

  deleteFilesById(id) {
    
    return this.http.delete('/api/images/' + id, {responseType: 'text'})
      .catch((err: any) => {
        // Do messaging and error handling here
        return Observable.throw('Server error')
      });
  }
}
