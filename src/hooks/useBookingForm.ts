import { useState } from 'react';
import { useForm } from '@mantine/form';
import { isNotEmpty, isInRange } from '@mantine/form';
import type { FormValues, FlavorValue } from '../types';

export const useBookingForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [selectedFlavors, setSelectedFlavors] = useState<FlavorValue[]>([]);

  const form = useForm<FormValues>({
    initialValues: {
      eventType: '',
      guestCount: 50,
      duration: '',
      location: '',
      flavors: [],
    },
    validate: {
      eventType: isNotEmpty('Please select an event type'),
      guestCount: isInRange({ min: 1, max: 5000 }, 'Number of guests must be between 1 and 5000'),
      duration: isNotEmpty('Please select service duration'),
      location: isNotEmpty('Please enter event location'),
      // Fixed: Custom validator function for flavors array
      flavors: (value: FlavorValue[]) => {
        if (value.length === 0) return 'Please select at least one flavor';
        if (value.length > 2) return 'You can only select exactly 2 flavors';
        return null;
      },
    },
  });

  const handleFlavorChange = (flavorValue: FlavorValue, checked: boolean): void => {
    let newFlavors = [...selectedFlavors];
    if (checked) {
      if (newFlavors.length >= 2) {
        form.setFieldError('flavors', 'You can only select exactly 2 flavors');
        return;
      }
      newFlavors.push(flavorValue);
      form.clearFieldError('flavors');
    } else {
      newFlavors = newFlavors.filter(f => f !== flavorValue);
      if (newFlavors.length < 2 && newFlavors.length > 0) {
        form.clearFieldError('flavors');
      }
      if (newFlavors.length === 0) {
        form.setFieldError('flavors', 'Please select at least one flavor');
      } else {
        form.clearFieldError('flavors');
      }
    }
    setSelectedFlavors(newFlavors);
    form.setFieldValue('flavors', newFlavors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validation = form.validate();
    if (validation.hasErrors) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Form submitted:', form.values);
  };

  return {
    form,
    submitted,
    selectedFlavors,
    handleFlavorChange,
    handleSubmit,
  };
};