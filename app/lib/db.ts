import { neon } from '@neondatabase/serverless';

const db = neon(process.env.POSTGRES_URL!);

// Small wrapper so you can keep writing sql<Revenue[]>`...` like in the course
export function sql<T = any[]>(
    strings: TemplateStringsArray,
    ...values: any[]
): Promise<T> {
    return db(strings, ...values) as unknown as Promise<T>;
}