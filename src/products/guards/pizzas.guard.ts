import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of }  from 'rxjs/Observable/of';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class PizzasGuard implements CanActivate {
    constructor(private store: Store<fromStore.ProductsState>) {}

    canActivate(): Observable<boolean>{
        console.log("called 1")
        return this.checkStore().pipe(
            switchMap(()=> of(true)),
            catchError(() => of(false))
        );
    }

    checkStore(): Observable<boolean>{
        console.log("called 2")
        return this.store.select(fromStore.getPizzasLoaded)
            .pipe(
                tap(loaded => {
                    if(!loaded){
                        this.store.dispatch(new fromStore.LoadPizzas());
                    }
                }),
                filter(loaded => loaded),
                take(1)
            )
    }
}
