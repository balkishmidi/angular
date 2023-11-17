import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddetudiantComponent } from './Etudiant/components/addetudiant/addetudiant.component';
import { AlletudiantComponent } from './Etudiant/components/alletudiant/alletudiant.component';
import { FormsModule } from '@angular/forms'; // Ensure this is imported
import { UpdateetudiantComponent } from './Etudiant/components/updateetudiant/updateetudiant.component';

const routes: Routes = [
  { path: 'students/all', component: AlletudiantComponent },
  { path: 'students/add', component: AddetudiantComponent },
  { path: 'students/update/:id', component: UpdateetudiantComponent },

  // ... other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
