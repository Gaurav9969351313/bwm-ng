import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import{ CommonModule} from "@angular/common";

import { MapComponent } from "./map.component";
import { MapService } from "./map.service";
import { CamelizePipe } from "ngx-pipes";

  @NgModule({
      declarations: [
      MapComponent
    ],
    exports: [
      MapComponent
    ],
    imports: [
      AgmCoreModule.forRoot({
          apiKey: "AIzaSyBSVzq-pFeyGePh2RBD-i8qGjQvecm1GBA"
  }),
    CommonModule
  ],
  providers: [
      MapService,
      CamelizePipe
    ]
})
export class MapModule { }
