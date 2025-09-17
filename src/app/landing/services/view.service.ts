import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  currentView = signal<'dashboard' | 'stuff'>('dashboard');

  setView(view: 'dashboard' | 'stuff') {
    this.currentView.set(view);
  }
}
