import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderCategoryComponent } from './components/header-category/header-category.component';
import { FooterFormComponent } from './components/footer-form/footer-form.component';
import { FooterRelatedInforComponent } from './components/footer-related-infor/footer-related-infor.component';
import { ContentComponent } from './layout/content/content.component';
import { BrandingComponent } from './components/branding/branding.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NormalProductComponent } from './components/normal-product/normal-product.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlankComponent } from './layout/blank/blank.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCategoryComponent,
    FooterFormComponent,
    FooterRelatedInforComponent,
    ContentComponent,
    BrandingComponent,
    MostPopularComponent,
    ProductItemComponent,
    NormalProductComponent,
    HomePageComponent,
    BlankComponent,
    SignInComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
