import React from 'react';
import { Title, SimpleGrid, Card, Text, Group, Avatar, Rating, Box } from '@mantine/core';
import { Quote, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { colors } from '../constants/colors';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "The cotton candy was absolutely delicious and beautifully presented! The cart was gorgeous and added so much charm to our wedding. Highly recommend!",
    name: "Sarah Johnson",
    role: "Bride",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    text: "Best decision we made for our corporate event. The team was professional, the setup was stunning, and everyone loved the cotton candy flavors!",
    name: "Michael Chen",
    role: "Event Planner",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 3,
    text: "Booked for my daughter's birthday and it was the highlight of the party. The kids (and adults) couldn't get enough! Will definitely book again.",
    name: "Emily Rodriguez",
    role: "Mom",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 4,
    text: "Professional, punctual, and the cotton candy was divine! The attention to detail and presentation exceeded our expectations.",
    name: "Linda Thompson",
    role: "Corporate Client",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <>
      <Title order={2} mb="lg" ta="center" style={{ color: colors.text }}>
        What Our <span style={{ color: colors.pink }}>Happy Clients</span> Say
      </Title>
      <Text ta="center" mb="xl" c="dimmed">
        Sweet moments, happy memories ❤️
      </Text>

      {/* Desktop Grid */}
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} mb={60} visibleFrom="md">
        {testimonialsData.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              withBorder
              padding="xl"
              radius="xl"
              style={{
                background: colors.white,
                borderColor: colors.yellow,
                height: '100%',
                position: 'relative'
              }}
            >
              <Heart size={24} color={colors.pink} style={{ position: 'absolute', top: 16, right: 16, opacity: 0.3 }} />
              <Quote size={32} color={colors.teal} style={{ marginBottom: 16, opacity: 0.5 }} />
              <Text size="md" mb="lg" style={{ lineHeight: 1.6, color: colors.text }}>
                "{testimonial.text}"
              </Text>
              <Group gap="md">
                <Avatar src={testimonial.avatar} size="lg" radius="xl" />
                <div>
                  <Text fw={600} style={{ color: colors.text }}>{testimonial.name}</Text>
                  <Text size="xs" c="dimmed">{testimonial.role}</Text>
                  <Rating value={testimonial.rating} readOnly size="xs" mt={4} />
                </div>
              </Group>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>

      {/* Mobile Carousel */}
      <Box mb={60} hiddenFrom="md">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          style={{ paddingBottom: 40 }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card
                withBorder
                padding="xl"
                radius="xl"
                style={{ background: colors.white, borderColor: colors.yellow }}
              >
                <Quote size={32} color={colors.teal} style={{ marginBottom: 16, opacity: 0.5 }} />
                <Text size="md" mb="lg" style={{ lineHeight: 1.6, color: colors.text }}>
                  "{testimonial.text}"
                </Text>
                <Group gap="md">
                  <Avatar src={testimonial.avatar} size="lg" radius="xl" />
                  <div>
                    <Text fw={600} style={{ color: colors.text }}>{testimonial.name}</Text>
                    <Text size="xs" c="dimmed">{testimonial.role}</Text>
                    <Rating value={testimonial.rating} readOnly size="xs" mt={4} />
                  </div>
                </Group>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default TestimonialsSection;