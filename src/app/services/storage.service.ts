import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  favorites: string[] = [];
  category: any;

  constructor() {
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
      const value = localStorage.getItem(keys[i]);
      try {
        this[keys[i]] = JSON.parse(value);
      } catch (e) {
        this[keys[i]] = value;
      }
    }
  }

  setItem(key: string, value: any) {
    this[key] = value;
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  updateItem(key) {
    this.setItem(key, this[key]);
  }

  setEditItemSession(value) {
    sessionStorage.setItem('edit-item', JSON.stringify(value));
    console.log("deneme");
  }

  deleteEditItemSession() {
    sessionStorage.removeItem('edit-item');
  }

  getEditItemSession() {
    return JSON.parse(sessionStorage.getItem('edit-item'));
  }
}
