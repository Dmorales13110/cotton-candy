import React from 'react';
import { Container, Group, Text, ThemeIcon, Box, rem } from '@mantine/core';
import { Heart } from 'lucide-react';
import { colors } from '../constants/colors';

const Footer: React.FC = () => {
  return (
    <Box
      style={{
        height: rem(70),
        backgroundColor: colors.white,
        borderTop: `1px solid ${colors.yellow}`,
        marginTop: rem(40),
      }}
    >
      <Container size="lg" h="100%">
        <Group justify="center" h="100%" gap="xs">
          <Text size="sm" c="dimmed">
            Based in Utah | Sweetening your special moments.
          </Text>
          <ThemeIcon size="xs" color="transparent" style={{ color: colors.pink }}>
            <Heart size={12} fill={colors.pink} />
          </ThemeIcon>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer;