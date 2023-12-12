import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unihaven';
  showEtudiantsOptions = false;
  showNavBar = true; // Set it to false when you want to hide the navigation bar


    toggleEtudiants(): void {
        this.showEtudiantsOptions = !this.showEtudiantsOptions;
    }
}
