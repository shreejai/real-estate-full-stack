import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = parseInt(url.searchParams.get('limit') || '5', 10);
  const offset = (page - 1) * limit;

  try {
    const db = await pool.getConnection();

    const [rows] = await db.execute('SELECT COUNT(*) as count FROM ptabletest');
    const totalCount = rows[0].count;
    const totalPages = Math.ceil(totalCount / limit);

    const query = 'SELECT * FROM ptabletest LIMIT ? OFFSET ?';
    const [properties] = await db.execute(query, [limit, offset]);
    db.release();

    return NextResponse.json({ properties, totalPages });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
