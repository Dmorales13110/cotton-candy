import React from 'react';
import { SimpleGrid, Paper, Title, Text, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import { Heart, MapPin, Users, Sparkles } from 'lucide-react';
import { colors } from '../constants/colors';

const stats = [
  { icon: <Heart size={24} />, value: '+50', label: 'Happy Events' },
  { icon: <Users size={24} />, value: '+150', label: 'Guests Served' },
  { icon: <MapPin size={24} />, value: '15', label: 'Utah Cities' },
  { icon: <Sparkles size={24} />, value: '10+', label: 'Flavors' },
];

const StatsSection: React.FC = () => {
  return (
    <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mb={60}>
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <Paper
            withBorder
            p="xl"
            radius="xl"
            ta="center"
            style={{
              background: colors.white,
              borderColor: colors.yellow,
              transition: 'all 0.3s ease',
            }}
          >
            <ThemeIcon
              size={50}
              radius="xl"
              variant="light"
              mx="auto"
              mb="md"
              style={{
                background: `${colors.pink}20`,
                color: colors.pink,
              }}
            >
              {stat.icon}
            </ThemeIcon>
            <Title
              order={2}
              size={32}
              style={{ color: colors.text }}
            >
              {stat.value}
            </Title>
            <Text
              size="sm"
              c="dimmed"
            >
              {stat.label}
            </Text>
          </Paper>
        </motion.div>
      ))}
    </SimpleGrid>
  );
};

export default StatsSection;