import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ReadUserComponent } from './read-user/read-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NycRecordsComponent } from './nyc-records/nyc-records.component';
import { NycRecordsListComponent } from './nyc-records-list/nyc-records-list.component';
import { UsersService } from './users.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ListFavoritesComponent } from './list-favorites/list-favorites.component';


const routes: Routes = [

  {
    path: 'profiles',
    component: ListProfilesComponent
  },
  {
    path: 'profiles/new',
    component: CreateProfileComponent
  },
  
  {
    path: 'profiles/:id',
    component: ReadProfileComponent
  },
  {
    path: 'profiles/edit/:id',
    component: UpdateProfileComponent
  },
  {
    path: 'users',
    component: ListUsersComponent
  },
  {
    path: 'users/new',
    component: CreateUserComponent
  },

  {
    path: 'users/:id',
    component: ReadUserComponent
  },
  {
    path: 'users/edit/:id',
    component: UpdateUserComponent
  },
  {
    path: 'records',
    component: NycRecordsComponent
  },
  {
    path: 'records/:id',
    component: NycRecordsListComponent
  },
  {
    path: 'favorites',
    component: ListFavoritesComponent
  },


];

@NgModule({
  declarations: [
    AppComponent,
    ListProfilesComponent,
    ReadProfileComponent,
    CreateProfileComponent,
    UpdateProfileComponent,
    CreateUserComponent,
    ListUsersComponent,
    ReadUserComponent,
    UpdateUserComponent,
    NycRecordsComponent,
    NycRecordsListComponent,
    ListFavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
