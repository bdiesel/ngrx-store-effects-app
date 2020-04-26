import * as fromToppings from './toppings.actions';

describe('Toppings Action', () => {
    describe('LoadToppings Actions', () =>{
        describe('LoadToppings', ()=> {
            it('should create an action', () => {
                const action = new fromToppings.LoadToppings();
                expect({...action}).toEqual({
                    type: fromToppings.LOAD_TOPPINGS,
                });
            });
        });

        describe('LoadToppingsFail', ()=> {
            it('should create an action', () => {
                const payload = { message: 'Load Error '};
                const action = new fromToppings.LoadToppingsFail(payload);
                expect({...action}).toEqual({
                    type: fromToppings.LOAD_TOPPINGS_FAIL,
                    payload: payload
                });
            });
        });
    });

    describe('LoadToppingsSuccess', ()=> {
    it('should create an action', () => {
        const payload =  [
            {id: 1, name: 'cheese' }
        ];
        const action = new fromToppings.LoadToppingSuccess(payload);
            expect({...action}).toEqual({
                type: fromToppings.LOAD_TOPPINGS_SUCCESS,
                payload: payload
            });
        });
    });
});
