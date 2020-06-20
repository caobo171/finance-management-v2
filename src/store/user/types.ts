export interface User {
    displayName: string,
    id: string,
    photoURL: string ,
    email: string | null ,
    role?: 'admin' | 'root' | 'member',
    placeId: string,
    token?: string
}


export interface State{
    current: User | null,
    byId: Record<string, User>
}


export interface UserPassword{
    email: string,
    password: string
}