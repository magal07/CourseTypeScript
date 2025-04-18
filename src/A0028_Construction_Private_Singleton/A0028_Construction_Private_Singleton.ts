// Singleton - GoF / Factory Method

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connect: ${this.host}, ${this.user}, ${this.password}`);
  }
  static getDataBase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Return created instance');
      return Database.database;
    }
    console.log('Created new instance');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDataBase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDataBase('localhost', 'root', '123456');
db2.connect();
const db3 = Database.getDataBase('localhost', 'root', '123456');
db3.connect();
const db4 = Database.getDataBase('localhost', 'root', '123456');
db4.connect();
const db5 = Database.getDataBase('localhost', 'root', '123456');

db5.connect();
