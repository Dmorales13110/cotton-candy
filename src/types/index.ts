export interface FormValues {
  eventType: EventTypeValue | '';
  guestCount: number;
  duration: DurationValue | '';
  location: string;
  flavors: FlavorValue[];
}

export type FlavorValue = 'green-apple' | 'blue-razz' | 'pink-vanilla' | 'pineapple' | 'cherry' | 'grape';
export type EventTypeValue = 'wedding' | 'birthday' | 'corporate' | 'baby-shower' | 'graduation' | 'festival' | 'other';
export type DurationValue = '1' | '2' | '3' | '4' | '5';

export interface Flavor {
  label: string;
  value: FlavorValue;
}

export interface EventType {
  value: EventTypeValue;
  label: string;
}

export interface DurationOption {
  value: DurationValue;
  label: string;
}