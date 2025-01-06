import { Item } from "../Item";

export abstract class ItemUpdaterStrategy {
  constructor(protected item: Item) {}

  abstract update(): void;

  protected increaseQuality(quantity: number = 1) {
    this.item.quality = Math.min(50, this.item.quality + quantity);
  }

  protected decreaseQuality(quantity: number = 1) {
    this.item.quality = Math.max(0, this.item.quality - quantity);
  }
}
