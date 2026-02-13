import { IconBolt, IconShieldCheck, IconBrain, IconChartLine } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, Title, Box, Group, Stack } from '@mantine/core';

const FEATURES_DATA = [
  {
    icon: IconBolt,
    title: 'Instant Results',
    description: 'Get predictions in 30 seconds. Our AI processes your data instantly.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea',
  },
  {
    icon: IconBrain,
    title: 'AI-Powered',
    description: '85% accuracy rate using advanced machine learning algorithms.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb',
  },
  {
    icon: IconShieldCheck,
    title: '100% Secure',
    description: 'Your data is encrypted and never stored or shared with anyone.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe',
  },
  {
    icon: IconChartLine,
    title: 'Smart Insights',
    description: 'Understand exactly what affects your approval chances.',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    color: '#43e97b',
  },
];

interface FeatureProps {
  icon: React.FC<{ size?: number; stroke?: number }>;
  title: string;
  description: string;
  gradient: string;
  color: string;
}

export function Feature({ icon: Icon, title, description, gradient, color }: FeatureProps) {
  return (
    <Box
      style={{
        position: 'relative',
        padding: '40px 30px',
        borderRadius: '24px',
        background: '#FFFFFF',
        border: '1px solid #F3F4F6',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
        e.currentTarget.style.boxShadow = `0 30px 60px -12px ${color}40`;
        e.currentTarget.style.borderColor = color;
        const overlay = e.currentTarget.querySelector('.gradient-overlay') as HTMLElement;
        if (overlay) overlay.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.borderColor = '#F3F4F6';
        const overlay = e.currentTarget.querySelector('.gradient-overlay') as HTMLElement;
        if (overlay) overlay.style.opacity = '0';
      }}
    >
      {/* Gradient overlay on hover */}
      <Box
        className="gradient-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: gradient,
          opacity: 0,
          transition: 'opacity 0.4s ease',
          borderRadius: '24px',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Stack gap="md" style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon with animated gradient background */}
        <Box
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: `0 8px 16px ${color}30`,
          }}
        >
          <Icon size={40} stroke={2} color="#FFFFFF" />
          
          {/* Animated pulse ring */}
          <Box
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              background: gradient,
              opacity: 0.3,
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
        </Box>

        {/* Title */}
        <Title
          order={3}
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#18181B',
            marginTop: '8px',
            transition: 'color 0.3s ease',
          }}
          className="feature-title"
        >
          {title}
        </Title>

        {/* Description */}
        <Text
          size="md"
          style={{
            color: '#050505',
            lineHeight: 1.7,
            fontSize: '15px',
            transition: 'color 0.3s ease',
          }}
          className="feature-description"
        >
          {description}
        </Text>

        {/* Animated arrow indicator */}
        <Group gap="xs" style={{ marginTop: '8px' }}>
          <Text
            size="sm"
            fw={600}
            style={{
              color: color,
              transition: 'all 0.3s ease',
            }}
            className="learn-more"
          >
            Learn more
          </Text>
          <Box
            style={{
              transition: 'transform 0.3s ease',
            }}
            className="arrow"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Group>
      </Stack>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.1;
            }
          }
          
          .feature-card:hover .feature-title,
          .feature-card:hover .feature-description {
            color: #332c2c !important;
          }
          
          .feature-card:hover .arrow {
            transform: translateX(4px);
          }
        `}
      </style>
    </Box>
  );
}

export function FeaturesSection() {
  const features = FEATURES_DATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Box
      style={{
        background: '#7bcec3b6',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(240, 147, 251, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box ta="center" mb={80}>
          <Box
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              marginBottom: '24px',
            }}
          >
            <Text
              size="sm"
              fw={600}
              style={{
                color: '#FFFFFF',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Features
            </Text>
          </Box>

          <Title
  order={1}
  style={{
    fontSize: '56px',
    fontWeight: 900,
    color: '#000000',
    marginBottom: '24px',
    letterSpacing: '-1px',
  }}
>
  Everything You Need
</Title>

          <Text
            size="xl"
            style={{
              color: '#6B7280',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontSize: '20px',
            }}
          >
            Fast, accurate, and secure. Our AI-powered platform gives you instant insights
            to make confident financial decisions.
          </Text>
        </Box>

        {/* Features Grid */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 30, md: 40 }}
        >
          {features}
        </SimpleGrid>
      </Container>
    </Box>
  );
}