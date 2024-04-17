import { Coin } from '../../models/coin';

export class Diamond extends Coin {
  constructor(x:number, y:number) {
    super('diamond', '../../../assets/images/stone.png', x, y); // Передайте всі необхідні аргументи до батьківського конструктора
    this.addType();
    this.addDesign();
  }

  addType(): void {
    this.type = 'diamond';
  }
  addDesign(): void {
    this.image = '../../../assets/images/stone.png';
  }

  removeCoin(): void {
    this.type = '';
    this.image = '';
  }
}
