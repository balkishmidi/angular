import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Remove this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBlocsComponent } from './Bloc/components/all-blocs/all-blocs.component';
import { HttpClientModule } from '@angular/common/http';
import { AlletudiantComponent } from './Etudiant/components/alletudiant/alletudiant.component';
import { UpdateetudiantComponent } from './Etudiant/components/updateetudiant/updateetudiant.component';
import { DeleteetudiantComponent } from './Etudiant/components/deleteetudiant/deleteetudiant.component';
import { AddetudiantComponent } from './Etudiant/components/addetudiant/addetudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBlocsComponent,
    AlletudiantComponent,
    UpdateetudiantComponent,
    DeleteetudiantComponent,
    AddetudiantComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Ensure FormsModule is here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
