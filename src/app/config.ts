import {HttpHeaders} from '@angular/common/http';

export const config = {
  hostapi: 'http://localhost:9000'
};

export const optionsRequest = new HttpHeaders({
  'Content-type': 'application/json',
  'token': localStorage.getItem('token')
});
