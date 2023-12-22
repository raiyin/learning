const enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

type ValueOf<T> = T[keyof T]

const UserRole = {
    ADMIN: 'admin',
    USER: 'user',
} as const;

type UserRole = ValueOf<typeof UserRole>
