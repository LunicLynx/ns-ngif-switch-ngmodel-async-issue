import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {
    data: Observable<{ toggle: boolean }>;

    ngOnInit(): void {
        this.data = Observable.of({ toggle: false }).delay(5000);
    }
}
