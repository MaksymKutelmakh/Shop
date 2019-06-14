import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { FormsModule } from '@angular/forms';
import { ForProductsPipe } from './for-products.pipe';
import { Pipe, PipeTransform } from '@angular/core'; 


import { MatPaginatorModule, MatCardModule, MatToolbarModule , MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatTableModule, MatSnackBarModule, MatDividerModule, MatIconModule} from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CreditsComponent } from './credits/credits.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

import { UserService } from './user.service';
import { ProductsService } from './products.service';






@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AboutUsComponent,
    ContactsComponent,
    ProductComponent,
    ProductsComponent,
    PrivacyComponent,
    CreditsComponent,
    SignUpComponent,
    CreateComponent,
    EditComponent,
    AdminComponent,
    UserComponent,
    ForProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatFileUploadModule,
    MatToolbarModule, 
    FormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSelectModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatSnackBarModule, 
    MatDividerModule, 
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
