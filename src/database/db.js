import pg from 'pg';

export default function conectar(){
	const pool = new pg.Pool({
			host: "localhost",
			user: 'orlando',     
			password: 'orlando',
			database: 'HotelPlus',
			port: 5432
		})
	return pool;		
}