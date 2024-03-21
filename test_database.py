
import psycopg2

conn = psycopg2.connect(database="postgres",
                        host="127.0.0.1",
                        user="postgres",
                        password="pw",
                        port="5432")


cur = conn.cursor()

cur.execute("SELECT * FROM testproducts")

cur.execute("CREATE TABLE test (id serial PRIMARY KEY, num integer, data varchar);")
conn.commit()

def create_table():
    cur.execute("""
    CREATE TABLE test (
    id serial PRIMARY KEY, 
    num integer, 
    data varchar);
    """)
    conn.commit()


print(cur.fetchall())


if __name__ == "__main__":
    create_table()
    print("Table created successfully")
    cur.close()
    conn.close()
