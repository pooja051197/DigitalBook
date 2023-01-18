import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthorComponent } from './component/author/author.component';

import { CreateBookComponent } from './component/author/create-book/create-book.component';
import { EditBookComponent } from './component/author/edit-book/edit-book.component';
import { SearchBookComponent } from './component/author/search-book/search-book.component';

import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ReaderComponent } from './component/reader/reader/reader.component';
import { BookidSearchComponent } from './component/searchDashboard/bookid-search/bookid-search.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserComponent } from './component/user/user.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate:[AuthGuard], data:{roles:('READER')}
  },
  {
    path :'author',
     component: AuthorComponent,
     canActivate:[AuthGuard], data:{roles:('AUTHOR')}
  },
  {
    path :'signup',
     component: SignupComponent
  },
  {
    path :'forbidden',
     component: ForbiddenComponent
  },
  {
    path :'createBook',
     component: CreateBookComponent
  },
  {
    path :'editBook',
     component: EditBookComponent
  },
  
  {
    path :'searchBook',
     component: SearchBookComponent
  },
  {
    path :'searchAllBook',
     component: BookidSearchComponent,
  },
  
  {
    path :'read',
    component: ReaderComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
