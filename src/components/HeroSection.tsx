import React from 'react';
import { Title, Text, Group, ThemeIcon, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { colors } from '../constants/colors';

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Group justify="center" gap="xs" mb="md">
        <ThemeIcon size="md" color="transparent" style={{ color: colors.pink }}>
          <Sparkles size={24} fill={colors.yellow} />
        </ThemeIcon>
        <Text
          component="span"
          c={colors.teal}
          fw={600}
          tt="uppercase"
          size="sm"
          style={{ letterSpacing: '2px' }}
        >
          Utah's Finest
        </Text>
        <ThemeIcon size="md" color="transparent" style={{ color: colors.pink }}>
          <Sparkles size={24} fill={colors.yellow} />
        </ThemeIcon>
      </Group>
      <Title
        order={1}
        ta="center"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 700,
          color: colors.text,
          letterSpacing: '-0.02em',
        }}
      >
        <Box component="span" style={{ color: colors.pink }}>Cotton</Box>{' '}
        <Box component="span" style={{ color: colors.teal }}>Candy</Box>
      </Title>
      <Text
        ta="center"
        size="lg"
        c="dimmed"
        mt="xs"
        style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)' }}
      >
        Premium Event Cart Rental
      </Text>
      <Text
        ta="center"
        size="sm"
        c={colors.pink}
        mt="xs"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
      >
        <Heart size={14} fill={colors.pink} /> Spun fresh on-site for your special moments <Heart size={14} fill={colors.pink} />
      </Text>
    </motion.div>
  );
};

export default HeroSection;