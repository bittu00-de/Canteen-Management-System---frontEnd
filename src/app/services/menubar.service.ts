import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MenubarService {

  constructor(private menubar: MatSnackBar) { }

  openMenuBar(message: string, action: string) {
    if (action === 'error') {
      this.menubar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['black-menubar']
      });
    }
    else {
      this.menubar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['green-menubar']
      });
    }
  }
}
