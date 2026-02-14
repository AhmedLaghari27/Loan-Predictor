import { IconFileText, IconBrain, IconChartDots } from '@tabler/icons-react';
import { Container, Text, Title, Box, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const STEPS_DATA = [
  {
    icon: IconFileText,
    title: 'Enter Your Details',
    description: 'Fill out a quick form with basic information about your income, employment, credit history, and loan requirements. Takes less than 2 minutes.',
    color: '#667eea',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    icon: IconBrain,
    title: 'AI Analyzes Your Profile',
    description: 'Our machine learning model instantly evaluates your financial profile against thousands of loan application patterns to predict your approval likelihood.',
    color: '#f093fb',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    icon: IconChartDots,
    title: 'Get Your Results',
    description: 'Receive your eligibility prediction with a confidence score, key influencing factors, and personalized tips to strengthen your application.',
    color: '#43e97b',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
];

export function HowItWorksSection() {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        background: '#7bcec3b6',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1, padding: '0 20px' }}>
        {/* Section Header */}
        <Box ta="center" mb={60}>
          <Box
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              marginBottom: '20px',
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
              Process
            </Text>
          </Box>

          <Title
            order={1}
            style={{
              fontSize: 'clamp(32px, 8vw, 56px)',
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '16px',
              letterSpacing: '-1px',
              padding: '0 16px',
            }}
          >
            How It Works
          </Title>

          <Text
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontSize: 'clamp(16px, 4vw, 20px)',
              padding: '0 20px',
            }}
          >
            Get your loan eligibility prediction in three simple steps.
            Fast, accurate, and completely automated.
          </Text>
        </Box>

        {/* Steps - Card Layout for Mobile */}
        <Stack gap="lg" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {STEPS_DATA.map((step, index) => {
            const Icon = step.icon;
            return (
              <Box
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: 'clamp(20px, 5vw, 32px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Desktop Icon - Hidden on mobile */}
                <Box
                  hiddenFrom="sm"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: step.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    fontSize: '18px',
                    fontWeight: 900,
                    color: '#FFFFFF',
                  }}
                >
                  {index + 1}
                </Box>

                {/* Desktop Layout */}
                <Box
                  visibleFrom="sm"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}
                >
                  {/* Icon Circle */}
                  <Box
                    style={{
                      width: '70px',
                      height: '70px',
                      minWidth: '70px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <Box
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: step.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={28} stroke={2} color="#FFFFFF" />
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box style={{ flex: 1 }}>
                    <Box style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <Box
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: step.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: 900,
                          color: '#FFFFFF',
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Title
                        order={3}
                        style={{
                          fontSize: '24px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          margin: 0,
                        }}
                      >
                        {step.title}
                      </Title>
                    </Box>
                    <Text
                      style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: 1.7,
                        fontSize: '16px',
                      }}
                    >
                      {step.description}
                    </Text>
                  </Box>
                </Box>

                {/* Mobile Layout - No Icon Circle */}
                <Box hiddenFrom="sm">
                  <Title
                    order={3}
                    style={{
                      fontSize: 'clamp(20px, 5vw, 24px)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '12px',
                    }}
                  >
                    {step.title}
                  </Title>
                  <Text
                    style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.6,
                      fontSize: 'clamp(14px, 3.5vw, 16px)',
                    }}
                  >
                    {step.description}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Stack>

        {/* CTA */}
        <Box ta="center" mt={50}>
          <Box
            component="button"
            onClick={() => navigate('/check-eligibility')}
            style={{
              background: '#12e9cd',
              color: '#fcfdff',
              border: 'none',
              padding: 'clamp(14px, 3vw, 18px) clamp(32px, 8vw, 48px)',
              borderRadius: '50px',
              fontSize: 'clamp(16px, 3.5vw, 18px)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              width: 'auto',
              maxWidth: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}
          >
            Start Your Application Now
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HowItWorksSection;