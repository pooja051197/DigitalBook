import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthorComponent } from './component/author/author.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { UserComponent } from './component/user/user.component';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.Interceptor';
import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateBookComponent } from './component/author/create-book/create-book.component';
import { EditBookComponent } from './component/author/edit-book/edit-book.component';
import { SearchBookComponent } from './component/author/search-book/search-book.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { BookidSearchComponent } from './component/searchDashboard/bookid-search/bookid-search.component';

import { ReaderComponent } from './component/reader/reader/reader.component';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AuthorComponent,
    HeaderComponent,
    FooterComponent,

    UserComponent,
    ForbiddenComponent,
    CreateBookComponent,
    EditBookComponent,
    SearchBookComponent,
    BookidSearchComponent,
    ReaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatRadioModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
