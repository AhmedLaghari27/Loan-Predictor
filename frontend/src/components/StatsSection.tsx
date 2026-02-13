import { IconUsers, IconChartBar, IconClock } from '@tabler/icons-react';
import { Center, Group, Paper, RingProgress, SimpleGrid, Text, Container, Title, Box } from '@mantine/core';

const data = [
  { 
    label: 'Predictions Made', 
    stats: '1000+', 
    progress: 85, 
    color: 'brandBlue', 
    icon: IconUsers,
    subtitle: 'Users Helped'
  },
  { 
    label: 'Accuracy Rate', 
    stats: '85%', 
    progress: 85, 
    color: 'brandPurple', 
    icon: IconChartBar,
    subtitle: 'Prediction Success'
  },
  {
    label: 'Processing Time',
    stats: '30 sec',
    progress: 95,
    color: 'brandTeal',
    icon: IconClock,
    subtitle: 'Average Speed'
  },
] as const;

export function StatsSection() {
  const stats = data.map((stat) => {
    const Icon = stat.icon;
    return (
      <Paper 
        key={stat.label}
        radius="xl" 
        p="xl"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <Group justify="space-between" align="flex-start">
          <div style={{ flex: 1 }}>
            <Text 
              size="xs" 
              tt="uppercase" 
              fw={700}
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '1.5px',
                marginBottom: '8px',
              }}
            >
              {stat.label}
            </Text>
            <Text 
              fw={900} 
              size="48px"
              style={{
                color: '#fff',
                lineHeight: 1,
                marginBottom: '4px',
              }}
            >
              {stat.stats}
            </Text>
            <Text 
              size="sm"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              {stat.subtitle}
            </Text>
          </div>

          <RingProgress
            size={100}
            roundCaps
            thickness={10}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Box
                  style={{
                    background: `linear-gradient(135deg, var(--mantine-color-${stat.color}-6), var(--mantine-color-${stat.color}-8))`,
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={35} stroke={2} color="#fff" />
                </Box>
              </Center>
            }
          />
        </Group>
      </Paper>
    );
  });

  return (
    <div 
      style={{ 
        background: '#7bcec3b6',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <div 
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-30%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        <Title 
          order={2}
          ta="center"
          style={{
            color: '#fff',
            fontSize: '42px',
            fontWeight: 900,
            marginBottom: '16px',
          }}
        >
          Trusted by Thousands
        </Title>
        <Text 
          ta="center"
          size="xl"
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px',
          }}
        >
          Real results from real people making smarter financial decisions
        </Text>

        <SimpleGrid 
          cols={{ base: 1, sm: 2, md: 3 }} 
          spacing="xl"
        >
          {stats}
        </SimpleGrid>
      </Container>

      {/* Add this to your global CSS or index.css */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-20px) scale(1.05);
            }
          }
        `}
      </style>
    </div>
  );
}