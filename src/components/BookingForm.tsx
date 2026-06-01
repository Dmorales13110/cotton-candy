import React from 'react';
import {
  Paper,
  TextInput,
  Select,
  NumberInput,
  Checkbox,
  Button,
  Stack,
  SimpleGrid,
  Box,
  Text,
  ThemeIcon,
  Group,
  Alert,
  Textarea,
  rem,
  LoadingOverlay,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cake,
  Users,
  Clock,
  MapPin,
  Check,
  AlertCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Send,
  Sparkles,
} from 'lucide-react';
import { colors } from '../constants/colors';
import { flavors, eventTypes, durationOptions } from '../constants/flavors';
import { useBookingForm } from '../hooks/useBookingForm';

// Import Mantine Dates styles
import '@mantine/dates/styles.css';

interface BookingFormProps {
  onSubmitSuccess?: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmitSuccess }) => {
  const { 
    form, 
    submitted, 
    isSubmitting, 
    errorMessage, 
    setErrorMessage, 
    selectedFlavors, 
    handleFlavorChange, 
    handleSubmit 
  } = useBookingForm();

  React.useEffect(() => {
    if (submitted && onSubmitSuccess) {
      onSubmitSuccess();
    }
  }, [submitted, onSubmitSuccess]);

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'both', label: 'Both' },
  ];

  const contactTimes = [
    { value: 'morning', label: 'Morning (9AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 5PM)' },
    { value: 'evening', label: 'Evening (5PM - 8PM)' },
    { value: 'anytime', label: 'Anytime' },
  ];

  // Simple time options
  const timeOptions = [
    { value: '9:00 AM', label: '9:00 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '12:00 PM', label: '12:00 PM' },
    { value: '1:00 PM', label: '1:00 PM' },
    { value: '2:00 PM', label: '2:00 PM' },
    { value: '3:00 PM', label: '3:00 PM' },
    { value: '4:00 PM', label: '4:00 PM' },
    { value: '5:00 PM', label: '5:00 PM' },
    { value: '6:00 PM', label: '6:00 PM' },
    { value: '7:00 PM', label: '7:00 PM' },
    { value: '8:00 PM', label: '8:00 PM' },
    { value: '9:00 PM', label: '9:00 PM' },
  ];

  return (
    <Paper
      shadow="xl"
      radius="lg"
      p={{ base: rem(20), sm: rem(40) }}
      style={{
        backgroundColor: colors.white,
        border: `1px solid ${colors.yellow}`,
        boxShadow: `0 20px 35px -10px rgba(0,0,0,0.05), 0 0 0 1px ${colors.yellow}40`,
        position: 'relative',
      }}
    >
      <LoadingOverlay
        visible={isSubmitting}
        loaderProps={{ color: colors.teal }}
        overlayProps={{ blur: 2 }}
      />

      <AnimatePresence mode="wait">
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Alert
              icon={<Check size={20} />}
              title="Booking Request Received!"
              color="teal"
              radius="md"
              variant="filled"
              mb="lg"
              style={{ backgroundColor: colors.teal, borderColor: colors.teal }}
            >
              <Text size="sm" c="white" mb="xs">
                Thank you for your interest in Cotton Candy!
              </Text>
              <Text size="sm" c="white">
                We've received your booking request and will contact you within 24 hours with your custom quote and Venmo payment details to secure your 50% deposit.
              </Text>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      {errorMessage && (
        <Alert
          icon={<AlertCircle size={20} />}
          title="Submission Error"
          color="red"
          radius="md"
          mb="lg"
          withCloseButton
          onClose={() => setErrorMessage('')}
        >
          {errorMessage}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Stack gap="lg">
          {/* Section: Personal Information */}
          <Box>
            <Group gap="xs" mb="md">
              <User size={18} color={colors.pink} />
              <Text fw={600} size="md" style={{ color: colors.text }}>
                Your Information
              </Text>
            </Group>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              <TextInput
                label="Full Name"
                placeholder="John Doe"
                leftSection={<User size={18} color={colors.pink} />}
                {...form.getInputProps('fullName')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
              <TextInput
                label="Email Address"
                placeholder="john@example.com"
                leftSection={<Mail size={18} color={colors.pink} />}
                {...form.getInputProps('email')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
              <TextInput
                label="Phone Number"
                placeholder="(801) 555-0123"
                leftSection={<Phone size={18} color={colors.pink} />}
                {...form.getInputProps('phone')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
              <Select
                label="Preferred Contact Method"
                data={contactMethods}
                leftSection={<MessageSquare size={18} color={colors.pink} />}
                {...form.getInputProps('preferredContactMethod')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
            </SimpleGrid>
          </Box>

          {/* Section: Event Details */}
          <Box>
            <Group gap="xs" mb="md">
              <Sparkles size={18} color={colors.teal} />
              <Text fw={600} size="md" style={{ color: colors.text }}>
                Event Details
              </Text>
            </Group>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              <Select
                label="Type of Event"
                placeholder="Select event type"
                data={eventTypes}
                leftSection={<Cake size={18} color={colors.pink} />}
                {...form.getInputProps('eventType')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
              <DatePickerInput
                label="Event Date"
                placeholder="Select event date"
                leftSection={<Calendar size={18} color={colors.pink} />}
                {...form.getInputProps('eventDate')}
                minDate={new Date()}
                valueFormat="MMMM D, YYYY"
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
              <Select
                label="Event Start Time"
                placeholder="Select start time"
                data={timeOptions}
                leftSection={<Clock size={18} color={colors.pink} />}
                {...form.getInputProps('eventTime')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
              <NumberInput
                label="Number of Guests"
                placeholder="Estimated guests"
                min={1}
                max={5000}
                leftSection={<Users size={18} color={colors.pink} />}
                {...form.getInputProps('guestCount')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
              <Select
                label="Service Time / Duration"
                placeholder="How many hours?"
                data={durationOptions}
                leftSection={<Clock size={18} color={colors.pink} />}
                {...form.getInputProps('duration')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
              <TextInput
                label="Event Location"
                placeholder="Venue address in Utah"
                leftSection={<MapPin size={18} color={colors.pink} />}
                {...form.getInputProps('location')}
                styles={{
                  label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                  input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
                }}
              />
            </SimpleGrid>
          </Box>

          {/* Rest of the form remains the same */}
          {/* Flavors section */}
          <Box>
            <Text fw={500} size="sm" mb="xs" c={colors.text}>
              Cotton Candy Flavors <Text component="span" c={colors.pink} size="xs">(Select exactly 2)</Text>
            </Text>
            <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="md" mt="xs">
              {flavors.map((flavor) => (
                <Checkbox
                  key={flavor.value}
                  label={flavor.label}
                  checked={selectedFlavors.includes(flavor.value)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFlavorChange(flavor.value, e.currentTarget.checked)}
                  color={colors.teal}
                  styles={{
                    label: { color: colors.text, cursor: 'pointer' },
                    input: { cursor: 'pointer', borderColor: '#d0d0d0' },
                  }}
                />
              ))}
            </SimpleGrid>
            {form.errors.flavors && (
              <Text size="xs" c="red" mt={5}>
                {form.errors.flavors}
              </Text>
            )}
          </Box>

          {/* Special Requests */}
          <Box>
            <Text fw={500} size="sm" mb="xs" c={colors.text}>
              Special Requests or Notes
            </Text>
            <Textarea
              placeholder="Any special requests, dietary considerations, or questions for us?"
              minRows={3}
              leftSection={<MessageSquare size={18} color={colors.pink} />}
              {...form.getInputProps('specialRequests')}
              styles={{
                input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
              }}
            />
          </Box>

          {/* Best Time to Contact */}
          <Box>
            <Text fw={500} size="sm" mb="xs" c={colors.text}>
              Best Time to Contact You
            </Text>
            <Select
              placeholder="Select preferred contact time"
              data={contactTimes}
              leftSection={<Calendar size={18} color={colors.pink} />}
              {...form.getInputProps('bestTimeToContact')}
              styles={{
                label: { color: colors.text, fontWeight: 500, marginBottom: 6 },
                input: { borderColor: '#e0e0e0', '&:focus': { borderColor: colors.teal } },
              }}
            />
          </Box>

          {/* Payment Policy Callout Box */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Box
              p="lg"
              style={{
                backgroundColor: `${colors.yellow}20`,
                borderRadius: rem(16),
                borderLeft: `4px solid ${colors.teal}`,
                borderRight: `1px solid ${colors.yellow}`,
                borderTop: `1px solid ${colors.yellow}`,
                borderBottom: `1px solid ${colors.yellow}`,
              }}
            >
              <Group align="flex-start" wrap="nowrap">
                <ThemeIcon color={colors.teal} variant="light" size="lg" radius="xl">
                  <AlertCircle size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={700} size="md" c={colors.text} mb={4}>
                    Booking Formalization Policy
                  </Text>
                  <Text size="sm" c="dimmed" lh={1.5}>
                    To fully secure and formalize your booking, a <strong style={{ color: colors.pink }}>50% non-refundable deposit</strong> of the total cost must be paid via Venmo. Once you submit this form, we will contact you shortly with the final quote and our Venmo details to complete your reservation.
                  </Text>
                </Box>
              </Group>
            </Box>
          </motion.div>

          <Button
            type="submit"
            size="lg"
            radius="xl"
            fullWidth
            mt="md"
            loading={isSubmitting}
            loaderProps={{ type: 'dots' }}
            style={{
              backgroundColor: colors.teal,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(24,184,206,0.3)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            leftSection={<Send size={18} />}
          >
            Request Booking
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default BookingForm;