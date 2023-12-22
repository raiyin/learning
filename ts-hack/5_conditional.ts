// type Conditional<T> = T extends string ? number : boolean;
// const value: Conditional<number> = true;

type Data = { value: string }
type Car = { model: string }
type DataOrCar<T> = T extends string ? Data : Car;
function todo<T>(arg: T): DataOrCar<T> {
    throw Error('not implemented')
}

const value = todo(123)
value.model
