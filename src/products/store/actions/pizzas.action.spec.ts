import * as fromPizzas from './pizzas.actions';

describe('Pizzas Action', () => {
    describe('LoadPizzas Actions', () =>{
        describe('LoadPizzas', ()=> {
            it('should create an action', () => {
                const action = new fromPizzas.LoadPizzas();
                expect({...action}).toEqual({
                    type: fromPizzas.LOAD_PIZZAS,
                });
            });
        });

        describe('LoadPizzasFail', ()=> {
            it('should create an action', () => {
                const payload = { message: 'Load Error '};
                const action = new fromPizzas.LoadPizzasFail(payload);
                expect({...action}).toEqual({
                    type: fromPizzas.LOAD_PIZZAS_FAIL,
                    payload: payload
                });
            });
        });
    });

    describe('LoadPizzasSuccess', ()=> {
    it('should create an action', () => {
        const payload =  [
            {
                "name": "Blazin' Inferno",
                "toppings": [
                    {
                        "id": 3,
                        "name": "basil"
                    },
                ],
            "id": 1
            }
        ];
        const action = new fromPizzas.LoadPizzasSuccess(payload);
            expect({...action}).toEqual({
                type: fromPizzas.LOAD_PIZZAS_SUCCESS,
                payload: payload
            });
        });
    });
});
