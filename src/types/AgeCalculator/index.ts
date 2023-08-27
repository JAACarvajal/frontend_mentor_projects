export type NewDateType = {
    dateType: 'day' | 'month' | 'year',
    newValue: number | string | null
}

export type DatesDataType = {
    day: number | string | null,
    month: number | string | null,
    year: number | string | null
}
