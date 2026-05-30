import React from 'react';
import { Container, Paper, Title, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Clock, Award } from 'lucide-react';
import { colors } from '../constants/colors';

const features = [
  { icon: <Sparkles size={28} />, title: 'Premium Quality', description: 'Only the finest ingredients for the perfect cotton candy experience' },
  { icon: <Heart size={28} />, title: 'Custom Events', description: 'Tailored packages for weddings, birthdays, and corporate events' },
  { icon: <Clock size={28} />, title: 'On-Time Arrival', description: 'Punctual setup and professional service guaranteed' },
  { icon: <Award size={28} />, title: `Utah's Best', description: 'Voted #1 premium cotton candy cart in the state` },
]

const FeaturesSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Paper radius="xl" p="xl" mb={60} style={{ background: `linear-gradient(135deg, ${colors.pink} 10%, ${colors.teal} 80%)` }}>
        <Container size="lg" style={{ textAlign: 'center', color: 'white' }}>
          <Sparkles size={40} style={{ margin: '0 auto 20px', opacity: 0.9 }} />
          <Title order={2} size={36} mb="md" c="white">Why Choose Cotton Candy?</Title>
          <SimpleGrid cols={{ base: 1, sm: 4 }} spacing="xl" mt="xl">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ThemeIcon size={50} radius="xl" color="white" variant="light" mx="auto" mb="md">
                  {feature.icon}
                </ThemeIcon>
                <Text fw={600} size="md" mb="xs" c="white">{feature.title}</Text>
                <Text size="sm" opacity={0.9} c="white">{feature.description}</Text>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Paper>
    </motion.div>
  );
};

export default FeaturesSection;