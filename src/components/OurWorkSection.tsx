import React, { useState } from 'react';
import { Title, Text, SimpleGrid, Box, Image, Modal, Group, Badge, Paper, ActionIcon, Tabs } from '@mantine/core';
import { motion } from 'framer-motion';
import { Maximize2, Heart, Calendar, MapPin, X, Sparkles, Truck, Star, Users } from 'lucide-react';
import { colors } from '../constants/colors';
import results from '../assets/results.png';
import stock from '../assets/stock.png';
import workCottonCandy from '../assets/work-2-cotton-candy.png';
import equipment from '../assets/equipment.png';
import client from '../assets/client-cotton-candy.png';
import results2 from '../assets/results-2.png';
import ourWork from '../assets/our-work02.png';
import client2 from '../assets/client-2-cotton-candy.png'

interface GalleryImage {
    id: number;
    src: string;
    title: string;
    category: 'events' | 'products' | 'equipment' | 'clients';
    description: string;
    location?: string;
    date?: string;
}

interface OurWorkSectionProps {
    images?: GalleryImage[];
}

const OurWorkSection: React.FC<OurWorkSectionProps> = ({ images = [] }) => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>('events');

    const defaultImages: GalleryImage[] = [
        {
            id: 1,
            src: results,
            title: 'Beautiful Results',
            category: 'events',
            description: 'Our premium cotton candy creations at a recent wedding event. The vibrant colors and fluffy texture made the celebration unforgettable.',
            location: 'Salt Lake City, UT',
            date: 'Summer 2025',
        },
        {
            id: 2,
            src: stock,
            title: 'Premium Ingredients',
            category: 'products',
            description: 'High-quality ingredients and flavor extracts we use to create the perfect cotton candy experience for every event.',
            location: 'Our Kitchen, UT',
            date: '2025',
        },
        {
            id: 3,
            src: workCottonCandy,
            title: 'Cotton Candy in Action',
            category: 'events',
            description: 'Our team spinning fresh cotton candy on-site, bringing joy and sweetness to guests of all ages.',
            location: 'Salt Lake City, UT',
            date: 'Spring 2025',
        },
        {
            id: 4,
            src: ourWork,
            title: 'Professional Equipment',
            category: 'equipment',
            description: 'Our premium cotton candy machine and setup. We use only the best equipment to ensure perfect results every time.',
            location: 'Our Workshop, UT',
            date: '2025',
        },
        {
            id: 5,
            src: client,
            title: 'Happy Client Event',
            category: 'clients',
            description: 'One of our amazing clients enjoying their custom cotton candy setup. Their logo beautifully displayed with our cotton candy creations.',
            location: 'Salt Lake City, UT',
            date: '2025',
        },
        {
            id: 6,
            src: results2,
            title: 'Wedding Sweet Table',
            category: 'events',
            description: 'A complete cotton candy display at an elegant wedding. The pastel colors matched perfectly with the wedding theme.',
            location: 'Salt Lake City, UT',
            date: 'May 2025',
        },
        {
            id: 7,
            src: results2,
            title: 'Flavor Selection',
            category: 'products',
            description: 'Our signature collection of premium flavors - Green Apple, Blue Razz, Pink Vanilla, Pineapple, Cherry, and Grape.',
            location: 'Our Studio, UT',
            date: '2025',
        },
        {
            id: 8,
            src: equipment,
            title: 'Our Beautiful Cart',
            category: 'equipment',
            description: 'The vintage-inspired cotton candy cart that adds charm and elegance to any event.',
            location: 'Salt Lake City, UT',
            date: '2025',
        },
        {
            id: 9,
            src: client2,
            title: 'Birthday Celebration',
            category: 'clients',
            description: 'A joyful birthday party where our cotton candy cart was the highlight of the celebration.',
            location: 'Salt Lake City, UT',
            date: 'June 2025',
        },
    ];

    const displayImages = images.length > 0 ? images : defaultImages;
    const filteredImages = displayImages.filter(img => img.category === activeTab);

    const categoryLabels = {
        events: { label: 'Live Events', icon: '📸', color: colors.teal },
        products: { label: 'Our Products', icon: '🍬', color: colors.pink },
        equipment: { label: 'Our Setup', icon: '⚙️', color: colors.teal },
        clients: { label: 'Happy Clients', icon: '💕', color: colors.pink },
    };

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    return (
        <Box mb={80}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Title order={2} mb="md" ta="center" style={{ color: colors.text }}>
                    Our <span style={{ color: colors.teal }}>Sweet Work</span>
                </Title>
                <Text ta="center" mb="md" c="dimmed" maw={700} mx="auto" style={{ color: colors.text }}>
                    Real moments, real sweetness. Take a look at our actual work across Utah.
                </Text>
                <Text
                    ta="center"
                    mb={40}
                    size="sm"
                    style={{
                        color: colors.pink,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}
                >
                    <Sparkles size={16} color={colors.yellow} /> From our cart to your special moments <Sparkles size={16} color={colors.yellow} />
                </Text>

                {/* Category Tabs with brand color */}
                <Tabs
                    value={activeTab}
                    onChange={setActiveTab}
                    mb="xl"
                    variant="pills"
                    radius="xl"
                    styles={{
                        tab: {
                            color: colors.text,
                            transition: 'all 0.2s ease',
                            fontWeight: 500,
                            padding: '8px 20px',
                            '&[data-active]': {
                                backgroundColor: colors.teal,
                                color: colors.white,
                            },
                            '&:hover': {
                                backgroundColor: `${colors.pink}20`,
                                color: colors.pink,
                            },
                        },
                        list: {
                            gap: '12px',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        },
                    }}
                >
                    <Tabs.List>
                        <Tabs.Tab
                            value="events"
                            leftSection={<Heart size={16} style={{ color: activeTab === 'events' ? colors.white : colors.pink }} />}
                        >
                            Live Events
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="products"
                            leftSection={<Sparkles size={16} style={{ color: activeTab === 'products' ? colors.white : colors.yellow }} />}
                        >
                            Our Products
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="equipment"
                            leftSection={<Truck size={16} style={{ color: activeTab === 'equipment' ? colors.white : colors.teal }} />}
                        >
                            Our Setup
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="clients"
                            leftSection={<Users size={16} style={{ color: activeTab === 'clients' ? colors.white : colors.pink }} />}
                        >
                            Happy Clients
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>

                {/* Gallery Grid */}
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                    {filteredImages.map((image, idx) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            style={{ cursor: 'pointer' }}
                            onClick={() => openModal(image)}
                        >
                            <Paper
                                withBorder
                                radius="lg"
                                style={{
                                    overflow: 'hidden',
                                    borderColor: colors.yellow,
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: colors.white,
                                }}
                            >
                                <div style={{ position: 'relative', flexShrink: 0 }}>
                                    <Image
                                        src={image.src}
                                        alt={image.title}
                                        height={260}
                                        style={{ objectFit: 'cover', width: '100%' }}
                                        fallbackSrc={`https://placehold.co/600x400/${colors.yellow.slice(1)}/${colors.pink.slice(1)}?text=Cotton+Candy`}
                                    />
                                    <ActionIcon
                                        variant="white"
                                        size="lg"
                                        radius="xl"
                                        style={{
                                            position: 'absolute',
                                            bottom: 12,
                                            right: 12,
                                            backgroundColor: colors.white,
                                            color: colors.teal,
                                            border: `1px solid ${colors.yellow}`,
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openModal(image);
                                        }}
                                    >
                                        <Maximize2 size={18} />
                                    </ActionIcon>
                                </div>
                                <Box p="md" style={{ flex: 1 }}>
                                    <Group justify="space-between" mb="xs">
                                        <Text fw={600} size="md" style={{ color: colors.text }}>
                                            {image.title}
                                        </Text>
                                        <Badge
                                            variant="light"
                                            style={{
                                                backgroundColor: `${colors.pink}20`,
                                                color: colors.pink,
                                            }}
                                        >
                                            {categoryLabels[image.category as keyof typeof categoryLabels]?.label || image.category}
                                        </Badge>
                                    </Group>
                                    <Text size="sm" c="dimmed" lineClamp={2} mb="xs" style={{ color: colors.text, opacity: 0.8 }}>
                                        {image.description}
                                    </Text>
                                    {image.location && (
                                        <Group gap="xs" mt="auto">
                                            <MapPin size={14} color={colors.teal} />
                                            <Text size="xs" c="dimmed" style={{ color: colors.text, opacity: 0.7 }}>{image.location}</Text>
                                        </Group>
                                    )}
                                </Box>
                            </Paper>
                        </motion.div>
                    ))}
                </SimpleGrid>

                {filteredImages.length === 0 && (
                    <Box ta="center" py={50}>
                        <Text c="dimmed" style={{ color: colors.text }}>No images in this category yet. Check back soon!</Text>
                    </Box>
                )}

                {/* Trust Badges with brand colors */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt={50}>
                        <motion.div whileHover={{ y: -5 }}>
                            <Paper
                                p="md"
                                radius="lg"
                                style={{
                                    background: `${colors.yellow}15`,
                                    textAlign: 'center',
                                    border: `1px solid ${colors.yellow}`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                }}
                            >
                                <Star size={24} color={colors.pink} style={{ margin: '0 auto 8px' }} />
                                <Text fw={600} size="sm" style={{ color: colors.text }}>50+ Events</Text>
                                <Text size="xs" style={{ color: colors.text, opacity: 0.7 }}>Successfully completed</Text>
                            </Paper>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }}>
                            <Paper
                                p="md"
                                radius="lg"
                                style={{
                                    background: `${colors.yellow}15`,
                                    textAlign: 'center',
                                    border: `1px solid ${colors.yellow}`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                }}
                            >
                                <Heart size={24} color={colors.pink} style={{ margin: '0 auto 8px', fill: `${colors.pink}40` }} />
                                <Text fw={600} size="sm" style={{ color: colors.text }}>100% Satisfaction</Text>
                                <Text size="xs" style={{ color: colors.text, opacity: 0.7 }}>From our clients</Text>
                            </Paper>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }}>
                            <Paper
                                p="md"
                                radius="lg"
                                style={{
                                    background: `${colors.yellow}15`,
                                    textAlign: 'center',
                                    border: `1px solid ${colors.yellow}`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                }}
                            >
                                <Sparkles size={24} color={colors.teal} style={{ margin: '0 auto 8px' }} />
                                <Text fw={600} size="sm" style={{ color: colors.text }}>Premium Quality</Text>
                                <Text size="xs" style={{ color: colors.text, opacity: 0.7 }}>Guaranteed every time</Text>
                            </Paper>
                        </motion.div>
                    </SimpleGrid>
                </motion.div>

                {/* Call to action with brand colors */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Box
                        mt={50}
                        p="xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.yellow}25, ${colors.pink}15)`,
                            borderRadius: 24,
                            textAlign: 'center',
                            border: `1px solid ${colors.yellow}`,
                        }}
                    >
                        <Heart size={32} color={colors.pink} style={{ margin: '0 auto 16px' }} />
                        <Title order={3} mb="sm" style={{ color: colors.text }}>
                            Ready to Sweeten Your Event?
                        </Title>
                        <Text mb="md" maw={500} mx="auto" style={{ color: colors.text, opacity: 0.8 }}>
                            Let's create unforgettable memories together. Book our premium cotton candy cart for your next celebration in Utah.
                        </Text>
                    </Box>
                </motion.div>
            </motion.div>

            {/* Modal for image preview */}
            <Modal
                opened={modalOpen}
                onClose={() => setModalOpen(false)}
                size="xl"
                radius="lg"
                padding={0}
                withCloseButton={false}
                styles={{
                    body: { padding: 0 },
                    content: {
                        overflow: 'hidden',
                        backgroundColor: colors.white,
                    },
                }}
            >
                {selectedImage && (
                    <Box>
                        <div style={{ position: 'relative', maxHeight: '60vh', overflow: 'hidden' }}>
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fit="contain"
                                style={{ width: '100%', maxHeight: '60vh', objectFit: 'cover' }}
                                fallbackSrc={`https://placehold.co/800x600/${colors.yellow.slice(1)}/${colors.pink.slice(1)}?text=Cotton+Candy`}
                            />
                            <ActionIcon
                                variant="white"
                                size="lg"
                                radius="xl"
                                style={{
                                    position: 'absolute',
                                    top: 12,
                                    right: 12,
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    color: colors.white,
                                    backdropFilter: 'blur(4px)',
                                    border: `1px solid ${colors.yellow}`,
                                }}
                                onClick={() => setModalOpen(false)}
                            >
                                <X size={18} />
                            </ActionIcon>
                        </div>
                        <Box p="lg">
                            <Group justify="space-between" mb="xs" wrap="wrap">
                                <Title order={3} style={{ color: colors.text }}>
                                    {selectedImage.title}
                                </Title>
                                <Badge
                                    size="lg"
                                    variant="filled"
                                    style={{
                                        background: colors.pink,
                                        color: colors.white,
                                    }}
                                >
                                    {categoryLabels[selectedImage.category as keyof typeof categoryLabels]?.label || selectedImage.category}
                                </Badge>
                            </Group>
                            <Text style={{ color: colors.text, lineHeight: 1.6 }} mb="md">
                                {selectedImage.description}
                            </Text>
                            {selectedImage.location && (
                                <Group gap="lg" mt="md">
                                    <Group gap="xs">
                                        <MapPin size={16} color={colors.teal} />
                                        <Text size="sm" style={{ color: colors.text, opacity: 0.7 }}>{selectedImage.location}</Text>
                                    </Group>
                                    {selectedImage.date && (
                                        <Group gap="xs">
                                            <Calendar size={16} color={colors.teal} />
                                            <Text size="sm" style={{ color: colors.text, opacity: 0.7 }}>{selectedImage.date}</Text>
                                        </Group>
                                    )}
                                </Group>
                            )}
                        </Box>
                    </Box>
                )}
            </Modal>
        </Box>
    );
};

export default OurWorkSection;