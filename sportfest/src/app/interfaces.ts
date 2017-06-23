export interface Variable{
    name?: string,
    expId?:string,
    desc?:string,
}

export interface Regel{
    regeltext?: string,
    punkte?: number,
}

export interface Disziplin {
    did?: number,
    name?: string,
    beschreibung?: string,
    minTeilnehmer?: number,
    maxTeilnehmer?: number,
    aktiviert?: boolean,
    teamleistung?: boolean
}