// types/index.ts
export interface FormValues {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  // Event Details
  eventType: EventTypeValue | '';
  guestCount: number;
  duration: DurationValue | '';
  location: string;
  flavors: FlavorValue[];
  // Additional Info
  specialRequests?: string;
  preferredContactMethod?: 'email' | 'phone' | 'both';
  bestTimeToContact?: string;
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