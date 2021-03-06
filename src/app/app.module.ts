import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './container/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavComponent } from './components/nav/nav.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ButtonComponent } from './components/button/button.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { SectionQuemsomosComponent } from './components/section-quemsomos/section-quemsomos.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';

  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    CarouselComponent,
    NavComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    SectionContactComponent,
    SectionQuemsomosComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule.forRoot({duration: 1000 })
  ],
  providers: [ModalComponent, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
