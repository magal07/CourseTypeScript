export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}
  attackEnemy(character: Character): void {
    this.bordao();
    character.loseLife(this.attack);
  }
  loseLife(attackForce: number): void {
    this.life -= attackForce;
    console.log(`${this.emoji} ${this.name} now has ${this.life}...`);
  }
  abstract bordao(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'Warrior attacking!');
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'Monster: MUHAAHAHAHAHAHA!');
  }
}

const warrior = new Warrior('Warrior', 36, 1000);
const monster = new Monster('Monster', 87, 1000);

warrior.attackEnemy(monster);
monster.attackEnemy(warrior);
warrior.attackEnemy(warrior);
monster.attackEnemy(warrior);
warrior.attackEnemy(monster);
monster.attackEnemy(warrior);
warrior.attackEnemy(monster);
