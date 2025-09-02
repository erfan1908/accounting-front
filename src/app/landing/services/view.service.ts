import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  // سیگنال برای نگهداری وضعیت فعلی view
  currentView = signal<'dashboard' | 'stuff'>('dashboard');

  // متد تغییر view
  setView(view: 'dashboard' | 'stuff') {
    this.currentView.set(view);
  }
}
