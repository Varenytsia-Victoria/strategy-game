import { Coin } from '../../models/coin';

export class GoldCoin extends Coin {
  constructor(x: number, y: number) {
    super('gold', '../../../assets/images/stone.png', x, y); // Передайте всі необхідні аргументи до батьківського конструктора
    this.addType();
    this.addDesign();
  }

  addType(): void {
    this.type = 'gold';
  }
  addDesign(): void {
    this.image = '../../../assets/images/stone.png';
  }

  removeCoin(): void {
   this.x = -1000; // Поза межами екрану, можна також встановити яку завгодно координату, щоб монета більше не відображалась
   this.y = -1000;
  }
}
