export interface Variable {
    name?: string,
    desc?:string,
    expId?:string,
    typ?:Datentyp
}

export interface Datentyp {
    tid?: string,
}
//     typ: {
//       tid: 100,
//       name: "Ganzzahl",
//       desc: "Einfacher Zahlenwert",
//       zustaende: [],
//       typ: "int"
//     }

export interface Regel{
    index?: string;
    expression?: string,
    points?: number,
}

export interface Disziplin {
    aktiviert?: boolean,
    beschreibung?: string,
    did?: number,
    kontrahentenAnzahl?: number,
    maxTeilnehmer?: number,
    minTeilnehmer?: number,
    name?: string,
    regeln?: Regel[],
    teamleistung?: boolean,
    variablen?: Variable[]
}

export interface Klasse {
    kid?: number,
    name?: string
}
export interface Schueler {
    sid?: number,
    vorname?: string,
    name?: string,
    kid?: number,
    gid?: number
}
export interface Ergebnis {
    ergebnis?: number,
    firstEntry?: boolean
}

export interface Ergebnis2 {
    wert?: number,
    var?: Array<VariableValue>
}

export interface VariableValue {
    var_id?: number
}

export interface Leistung {
    did?: number,
    kid?: number,
    sid?: number,
    ergebnisse: Array<Ergebnis>,
    timestamp: string
}