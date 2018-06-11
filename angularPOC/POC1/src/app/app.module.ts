import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { ItemComponent } from './items/item.component';
import { EscapeHtmlPipe } from './items/pipe';
import { DeleteItemComponent } from './delete/delete.component';
import { ReusableComp } from './reusable/reusable.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    EscapeHtmlPipe,
    DeleteItemComponent,
    ReusableComp
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
