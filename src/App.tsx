import type { JSX } from 'react';
import { Container, Box, Divider, Group, Text, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import HeroSection from './components/HeroSection';
import BookingForm from './components/BookingForm';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import OurWorkSection from './components/OurWorkSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { colors } from './constants/colors';

function App(): JSX.Element {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundColor: colors.white,
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '400px',
          background: `radial-gradient(circle at 10% 20%, ${colors.yellow}15, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle at 80% 90%, ${colors.pink}10, transparent 70%)`,
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      <Container size="lg" py={{ base: rem(40), md: rem(60) }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <HeroSection />

          <motion.div variants={fadeInUp}>
            <Divider
              my="xl"
              label={
                <Group gap="xs">
                  <Star size={16} color={colors.yellow} fill={colors.yellow} />
                  <Text size="sm" c={colors.teal} fw={500}>Book Your Sweet Experience</Text>
                  <Star size={16} color={colors.yellow} fill={colors.yellow} />
                </Group>
              }
              labelPosition="center"
            />
          </motion.div>

          <StatsSection />
          <BookingForm />
          <AboutSection />
          <OurWorkSection />
          <FeaturesSection />
          <TestimonialsSection />
        </motion.div>
      </Container>

      <Footer />
    </Box>
  );
}

export default App;