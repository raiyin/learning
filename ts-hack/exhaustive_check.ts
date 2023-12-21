type CarBrand = 'bmw' | 'lada' | 'toyota';

interface CarBase {
    year: number;
    brand: CarBrand;
}

interface Bmw extends CarBase {
    climaateControl: boolean;
    brand: 'bmw';
}

interface Lada extends CarBase {
    brand: 'lada';
    conditioner?: boolean;
}

interface Toyota extends CarBase {
    brand: 'toyota';
    cruise?: boolean;
}

type Car = Bmw | Lada | Toyota;

function exhaustiveCheck(param: never) {
    console.log('Обработайте значение ' + param)
}

function todoSmthWithCar(car: Car) {
    switch (car.brand) {
        case 'bmw':
            // todo with bmw
            break;
        case 'lada':
            // todo with lada
            break;
        default:
            exhaustiveCheck(car) // Error
    }
}
