export abstract class Coin {
  type: string;
  image: string;
  x: number;
  y: number;

  create(): void {
    this.addType();
    this.addDesign();
  }

  destroy(): void {
    this.removeCoin();
  }

  constructor(
    type: string,
    image: string,
    x: number,
    y: number
  ) {
    this.type = type;
    this.image = image;
    this.x = x;
    this.y = y;
  }

  protected abstract addType(): void;

  protected abstract addDesign(): void;

  protected abstract removeCoin(): void;
}
