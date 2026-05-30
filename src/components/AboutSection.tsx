import React from 'react';
import { Title, Text, SimpleGrid, Box, ThemeIcon, Group, Image, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import { Heart, Award, Sparkles, Truck, Clock, Star } from 'lucide-react';
import { colors } from '../constants/colors';
import aboutUs from '../assets/about-us.png';
import ourWork from '../assets/work-cotton-candy.png';

interface AboutSectionProps {
    images?: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ images = [] }) => {
    const features = [
        { icon: <Heart size={24} />, title: 'Passion for Sweetness', description: 'We bring joy to every event with our hand-spun, premium cotton candy made fresh on-site.' },
        { icon: <Award size={24} />, title: 'Premium Quality', description: 'Only the finest ingredients and highest standards for an unforgettable experience.' },
        { icon: <Truck size={24} />, title: 'Full-Service Setup', description: 'We handle everything from setup to cleanup, so you can enjoy your event stress-free.' },
        { icon: <Clock size={24} />, title: 'Punctual & Professional', description: 'Arriving early and fully prepared to make your event extra special.' },
    ];

    const defaultImages = [
        aboutUs,
        ourWork,
    ];

    const displayImages = images.length > 0 ? images : defaultImages;

    return (
        <Box mb={80}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Title order={2} mb="md" ta="center" style={{ color: colors.text }}>
                    About <span style={{ color: colors.pink }}>Cotton Candy</span>
                </Title>
                <Text ta="center" mb={40} c="dimmed" maw={700} mx="auto">
                    We're a Utah-based startup on a mission to bring whimsical, premium cotton candy experiences to life's sweetest moments.
                </Text>

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} mb={60}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Text size="lg" style={{ color: colors.text, lineHeight: 1.8 }} mb="md">
                            Born from a love of nostalgia and celebration, <strong style={{ color: colors.teal }}>Cotton Candy</strong> brings the magic of freshly spun cotton candy to events across Utah.
                        </Text>
                        <Text style={{ color: colors.text, lineHeight: 1.7 }} mb="lg">
                            We’re a family-owned business dedicated to bringing fun, color, and a touch of magic to every event through freshly spun cotton candy. Whether it’s a birthday party, wedding, baby shower, school event, or corporate gathering, we love creating experiences that make people smile.
                        </Text>
                        <Text style={{ color: colors.text, lineHeight: 1.7 }} mb="lg">
                            Our cotton candy is made fresh on-site, allowing guests to enjoy the excitement of watching it come to life before their eyes. We take pride in providing friendly service, delicious flavors, and a unique experience that both kids and adults will remember long after the event is over.                        </Text>
                        <Text style={{ color: colors.text, lineHeight: 1.7 }} mb="lg">
                            We believe the sweetest memories are made in the little moments.
                        </Text>
                        <Group gap="md" mt="xl">
                            <ThemeIcon size="lg" radius="xl" style={{ background: colors.pink, color: 'white' }}>
                                <Star size={18} />
                            </ThemeIcon>
                            <Text fw={500} style={{ color: colors.text }}>100% Fresh, Hand-Spun On-Site</Text>
                        </Group>
                        <Group gap="md" mt="md">
                            <ThemeIcon size="lg" radius="xl" style={{ background: colors.teal, color: 'white' }}>
                                <Sparkles size={18} />
                            </ThemeIcon>
                            <Text fw={500} style={{ color: colors.text }}>Serving 15+ Cities Across Utah</Text>
                        </Group>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SimpleGrid cols={{ base: 2 }} spacing="md">
                            {displayImages.slice(0, 2).map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`Cotton Candy cart at event ${idx + 1}`}
                                    radius="lg"
                                    height={200}
                                    style={{ objectFit: 'cover' }}
                                    fallbackSrc="https://placehold.co/600x400/FCE3A1/F69BB4?text=Cotton+Candy"
                                />
                            ))}
                        </SimpleGrid>
                    </motion.div>
                </SimpleGrid>

                <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mt={40}>
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Paper
                                withBorder
                                p="md"
                                radius="lg"
                                ta="center"
                                style={{
                                    background: colors.white,
                                    borderColor: colors.yellow,
                                    transition: 'all 0.3s ease',
                                    hover: 'y: -5'
                                }}
                            >
                                <ThemeIcon
                                    size={45}
                                    radius="xl"
                                    mx="auto"
                                    mb="sm"
                                    style={{
                                        background: `${colors.pink}20`,
                                        color: colors.pink,
                                    }}
                                >
                                    {feature.icon}
                                </ThemeIcon>
                                <Text fw={600} size="sm" mb={4} style={{ color: colors.text }}>
                                    {feature.title}
                                </Text>
                                <Text size="xs" c="dimmed" lineClamp={3}>
                                    {feature.description}
                                </Text>
                            </Paper>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </motion.div>
        </Box>
    );
};

export default AboutSection;