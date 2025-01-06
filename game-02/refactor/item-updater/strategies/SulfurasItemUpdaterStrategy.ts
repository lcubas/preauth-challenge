import { ItemUpdaterStrategy } from "./ItemUpdaterStrategy";

export class SulfurasItemUpdaterStrategy extends ItemUpdaterStrategy {
  /**
   * Sulfuras does not change in quality or sellIn
   */
  update(): void {}
}
