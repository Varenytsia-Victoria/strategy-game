import { Coin } from '../../models/coin';

export class GoldCoin extends Coin {
  constructor(x: number, y: number) {
    super('gold', '../../../assets/images/stone.png', x, y); 
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
    this.type = '';
    this.image = '';
  }
}
