import type { Flavor, EventType, DurationOption } from '../types';

export const flavors: Flavor[] = [
  { label: 'Green Apple', value: 'green-apple' },
  { label: 'Blue Razz', value: 'blue-razz' },
  { label: 'Pink Vanilla', value: 'pink-vanilla' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
];

export const eventTypes: EventType[] = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'birthday', label: 'Birthday Party' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'baby-shower', label: 'Baby Shower' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'festival', label: 'Festival / Fair' },
  { value: 'other', label: 'Other' },
];

export const durationOptions: DurationOption[] = [
  { value: '1', label: '1 hour' },
  { value: '2', label: '2 hours' },
  { value: '3', label: '3 hours' },
  { value: '4', label: '4 hours' },
  { value: '5', label: '5+ hours (contact for custom quote)' },
];