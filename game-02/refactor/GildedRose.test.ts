import { describe, it, expect } from 'vitest';
import { GildedRose } from './GildedRose';
import { Item } from '../app/gilded-rose';

describe('GildedRose', () => {
  it('should update quality for default items', () => {
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 5, 7)]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0]).toEqual({ name: 'Elixir of the Mongoose', sellIn: 4, quality: 6 });
  });

  it('should increase quality for Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0]).toEqual({ name: 'Aged Brie', sellIn: 1, quality: 1 });
  });

  it('should handle Backstage passes correctly', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0]).toEqual({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 12 });
  });

  it('should not change Sulfuras', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0]).toEqual({ name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 });
  });

  it('should degrade quality twice as fast for Conjured items', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 3, 6)]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0]).toEqual({ name: 'Conjured', sellIn: 2, quality: 4 });
  });
});
