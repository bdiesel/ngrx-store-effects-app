import * as fromPizzas from './pizzas.reducer';
import * as fromActions from '../actions/pizzas.actions';
import { Pizza } from '../../models/pizza.model';

describe('PizzasReducer', () => {
    describe('undefined', () =>{
        it('should return the default state ()', () => {
            const { initialState } = fromPizzas;
            const action = {} as any;
            const state = fromPizzas.reducer(undefined, action);

            expect(state).toBe(initialState);
        });
    });

    describe('LOAD_PIZZAS action', () =>{
        it('should set loading to true', () => {
            const { initialState } = fromPizzas;
            const action = new fromActions.LoadPizzas();
            const state = fromPizzas.reducer(initialState, action);

            expect(state.entities).toEqual({ });
            expect(state.loaded).toEqual(false);
            expect(state.loading).toEqual(true);
        });
    });

    describe('LOAD_PIZZAS_SUCCESS action', () =>{
        it('should set loading to true', () => {
            const pizzas: Pizza[] = [
                { id: 1, name: 'Pizza #1', toppings: [] },
                { id: 2, name: 'Pizza #2', toppings: [] },
            ]
            const entities = {
                1: pizzas[0],
                2: pizzas[1]
            };
            
            const { initialState } = fromPizzas;
            const action = new fromActions.LoadPizzasSuccess(pizzas);
            const state = fromPizzas.reducer(initialState, action);

            expect(state.entities).toEqual(entities);
            expect(state.loaded).toEqual(true);
            expect(state.loading).toEqual(false);
        });
    });
});

describe('PizzaReducer Selectors', () => {
    describe('getPizzaEntities', () => {
        it('should return .entities', () => {
            const entities: { [key: number]: Pizza } = {
               1: { id: 1, name: 'Pizza #1', toppings: [] },
               2: { id: 2, name: 'Pizza #2', toppings: [] }
            }

            const { initialState } = fromPizzas;
            const previousState = { ...initialState, entities };
            const slice = fromPizzas.getPizzasEntities(previousState);

            expect(slice).toEqual(entities);
        })
    })
})
