import chalk from 'chalk';

export async function append(key: string, value: string): Promise<void> {
    //todo: add the value to the specified key in mongo
}

export function printUsage(): void {
    console.log('TODO: write a color-coded usage message per the requirements');
}

export interface Options {
    list?: boolean
    key?: string
    append?: boolean
    delete?: boolean
}