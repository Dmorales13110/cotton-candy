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
  rem,
} from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { Cake, Users, Clock, MapPin, Check, AlertCircle } from 'lucide-react';
import { colors } from '../constants/colors';
import { flavors, eventTypes, durationOptions } from '../constants/flavors';
import { useBookingForm } from '../hooks/useBookingForm';

interface BookingFormProps {
  onSubmitSuccess?: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmitSuccess }) => {
  const { form, submitted, selectedFlavors, handleFlavorChange, handleSubmit } = useBookingForm();

  React.useEffect(() => {
    if (submitted && onSubmitSuccess) {
      onSubmitSuccess();
    }
  }, [submitted, onSubmitSuccess]);

  return (
    <Paper
      shadow="xl"
      radius="lg"
      p={{ base: rem(20), sm: rem(40) }}
      style={{
        backgroundColor: colors.white,
        border: `1px solid ${colors.yellow}`,
        boxShadow: `0 20px 35px -10px rgba(0,0,0,0.05), 0 0 0 1px ${colors.yellow}40`,
      }}
    >
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
              title="Thank you for your inquiry!"
              color="teal"
              radius="md"
              variant="filled"
              mb="lg"
              style={{ backgroundColor: colors.teal, borderColor: colors.teal }}
            >
              Your booking request has been received. We'll contact you shortly with your final quote and Venmo details to complete your 50% deposit.
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit}>
        <Stack gap="lg">
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
          </SimpleGrid>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
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

          {/* Flavors section with strict 2 selection rule */}
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
          >
            Request Booking
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default BookingForm;