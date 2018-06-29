import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Cart } from "./cart";


@Injectable({
    providedIn: 'root',
})
export class CartCommunicationService {

    private valueObs: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(null);

    public setValue(value: Cart):void {
        this.valueObs.next(value);
    }

    public getValue(): Observable<Cart> {
        return this.valueObs;
    }

}
