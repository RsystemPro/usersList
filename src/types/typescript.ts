export type styles = {
    className?: string
    style?: React.CSSProperties
}

export type data = {
    id: number
    order: number
    name: string
    lastName: string
    date: number
    meli: number
    location: {
        latitude: number,
        longitude: number
    }
    logins: any
}

export type locationCenter = {lat: number, lng: number}

export type order = { order: string, ascendign: boolean }

export type collections = 'all' | 'name' | 'last' | 'meli';

export type actions = 'view' | 'edit' | 'location' | 'chart' | 'remove'

export type addUser = { name: string, lastName: string, meli: number, date: number, location: { latitude: number, longitude: number } }