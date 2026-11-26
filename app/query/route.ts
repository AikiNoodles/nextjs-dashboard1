import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

export async function GET() {
	try {
		return Response.json(await listInvoices());
	} catch (error) {
		console.error('Query error:', error);
		return Response.json({ error: String(error) }, { status: 500 });
	}
}