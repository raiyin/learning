type CarBrand = 'bmw' | 'lada';

interface CarBase {
    year: number;
    brand: CarBrand;
}

interface BmwBase extends CarBase {
    climaateControl: boolean;
    brand: 'bmw';
    model: 'x5' | 'x7'
}

interface Bmwx5 extends BmwBase {
    value: string;
    model: 'x5'
}

interface Bmvx7 extends BmwBase {
    value: number;
    model: 'x7'
}

type Bmw = Bmvx7 | Bmwx5

interface LadaBase extends CarBase {
    brand: 'lada';
    conditioner?: boolean;
    model: 'priora' | 'vesta';
}

interface Vesta extends LadaBase {
    conditioner?: boolean;
    model: 'vesta';
}

interface Priora extends LadaBase {
    conditioner?: boolean;
    model: 'priora';
}

type Lada = Vesta | Priora;

type Car = Bmw | Lada;

function isLadaVesta(car: Car): car is Vesta // !!!
{
    return car.brand === 'lada' && car.model === 'vesta';
}

function isBmwX5(car: Car): car is Bmwx5 // !!!
{
    return car.brand === 'bmw' && car.model === 'x5'
}

function fn(car: Car) {
    if (isLadaVesta(car)) {
    }
    if (isBmwX5(car)) {
    }
}
