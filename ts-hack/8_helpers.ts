interface User {
    id: string;
    username?: string;
    age: number;
    birthday: {
        year: number;
        day: number;
        month: number;
    }
}


// type NewUser = Omit<User, 'id' | 'age'>
type NewUser = Pick<User, 'id' | 'age'>
type ValueOf<T> = T[keyof T]
type Birthday = ValueOf<Pick<User, 'birthday'>>


type CarBrand = 'bmw' | 'lada' | 'toyota' | 'audi'
// type GermanyCar = Exclude<CarBrand, 'lada' | 'toyota'>
type GermanyCar = Extract<CarBrand, 'audi' | 'bmw'>

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T

const optionalUser: Partial<User>{
    birthday: { }
}
