import { useState } from 'react';
import { useForm } from '@mantine/form';
import { isNotEmpty, isInRange, isEmail, matches } from '@mantine/form';
import type { FormValues, FlavorValue } from '../types';
import { sendBookingEmail } from '../services/emailServices';

export const useBookingForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [selectedFlavors, setSelectedFlavors] = useState<FlavorValue[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const form = useForm<FormValues>({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: null,
      eventTime: '',
      guestCount: 50,
      duration: '',
      location: '',
      flavors: [],
      specialRequests: '',
      preferredContactMethod: 'email',
      bestTimeToContact: '',
    },
    validate: {
      fullName: isNotEmpty('Please enter your full name'),
      email: isEmail('Please enter a valid email address'),
      phone: matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone number'),
      eventType: isNotEmpty('Please select an event type'),
      eventDate: (value) => !value ? 'Please select the event date' : null,
      eventTime: isNotEmpty('Please select the event start time'),
      guestCount: isInRange({ min: 1, max: 5000 }, 'Number of guests must be between 1 and 5000'),
      duration: isNotEmpty('Please select service duration'),
      location: isNotEmpty('Please enter event location'),
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validation = form.validate();
    if (validation.hasErrors) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const result = await sendBookingEmail({
        fullName: form.values.fullName,
        email: form.values.email,
        phone: form.values.phone,
        preferredContactMethod: form.values.preferredContactMethod || 'email',
        bestTimeToContact: form.values.bestTimeToContact || 'anytime',
        eventType: form.values.eventType,
        eventDate: form.values.eventDate,
        eventTime: form.values.eventTime,
        guestCount: form.values.guestCount,
        duration: form.values.duration,
        location: form.values.location,
        flavors: form.values.flavors,
        specialRequests: form.values.specialRequests || '',
      });

      if (result.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Store in localStorage as backup
        const bookingData = {
          ...form.values,
          submittedAt: new Date().toISOString(),
        };
        localStorage.setItem('lastCottonCandyBooking', JSON.stringify(bookingData));

        // Reset form after successful submission
        form.reset();
        setSelectedFlavors([]);
      } else {
        setErrorMessage(result.error || 'Failed to send booking request. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('There was an issue submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    submitted,
    isSubmitting,
    errorMessage,
    setErrorMessage,
    selectedFlavors,
    handleFlavorChange,
    handleSubmit,
  };
};