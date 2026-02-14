


import { Button, Container, Text, Title, Badge, Group, Box, Stack } from '@mantine/core';
import { IconSparkles, IconRocket, IconShieldCheck } from '@tabler/icons-react';
import backgroundImg from '../assets/27.jpg';
import { StatsSection } from '../components/StatsSection';
import { FeaturesSection } from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate();   // ✅ ADD THIS LINE HERE

  return (
    
    <div>
      {/* HERO SECTION */}
      <Box style={{ position: 'relative', overflow: 'hidden',paddingTop:'35px' }}>
        {/* Background Image Layer with Reduced Opacity */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '150vh',
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0,
        }} />

        {/* Gradient Overlay for Better Readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '150vh',
          background: '#7bcec3b6',
          zIndex: 0,
        }} />

        {/* Animated Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
          zIndex: 0,
        }} />

        {/* Main Content */}
        <Container 
          size="lg"
          style={{
            position: 'relative',
            zIndex: 1,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            paddingBottom: '10px',
          }}
        >
          <Stack gap="xl" style={{ maxWidth: '800px' }}>
            {/* Badge with Icon */}
            <Group gap="xs">
              <Badge 
                size="xl" 
                variant="light" 
                leftSection={<IconSparkles size={16} />}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                AI-POWERED PREDICTION ENGINE
              </Badge>
            </Group>

            {/* Main Heading with Animated Gradient Text */}
            <Title 
              order={1}
              style={{
                color: '#fff',
                fontSize: '50px',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-2px',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Check Your Loan{' '}
              <span style={{
                background: 'linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Eligibility
              </span>
              {' '}in Seconds
            </Title>

            {/* Description with Better Contrast */}
            <Text 
              size="xl"
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '22px',
                lineHeight: 1.7,
                maxWidth: '650px',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Get instant, accurate predictions on your bank loan approval with our 
              advanced AI-powered eligibility checker. Make smarter financial decisions 
              with confidence.
            </Text>

            {/* Features Pills */}
            <Group gap="md" mt="md">
              <Box style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '10px 20px',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}>
                <IconRocket size={18} color="#fff" />
                <Text size="sm" fw={600} style={{ color: '#fff' }}>
                  30 Second Results
                </Text>
              </Box>
              
              <Box style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '10px 20px',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}>
                <IconShieldCheck size={18} color="#fff" />
                <Text size="sm" fw={600} style={{ color: '#fff' }}>
                  100% Free & Secure
                </Text>
              </Box>
            </Group>

            

            <Group gap="lg" mt="xl">
              <Button 
                size="xl" 
                radius="xl"
                  onClick={() => navigate('/check-eligibility')}
                style={{
                  height: '65px',
                  paddingLeft: '50px',
                  paddingRight: '50px',
                  fontSize: '18px',
                  fontWeight: 700,
                  background: '#12e9cd',
                  color: '#ffffff',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
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
                Check Eligibility Now →
              </Button>

             
            </Group>

            {/* Trust Indicators */}
            <Group gap="xl" mt="xl">
              <Box>
                <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px' }}>
                  PREDICTIONS MADE
                </Text>
                <Text size="xl" fw={700} style={{ color: '#fff' }}>
                  10,000+
                </Text>
              </Box>
              <Box style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.3)' }} />
              <Box>
                <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px' }}>
                  ACCURACY RATE
                </Text>
                <Text size="xl" fw={700} style={{ color: '#fff' }}>
                  85%
                </Text>
              </Box>
              <Box style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.3)' }} />
              <Box>
                <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px' }}>
                  AVG. TIME
                </Text>
                <Text size="xl" fw={700} style={{ color: '#fff' }}>
                  30 sec
                </Text>
              </Box>
            </Group>
          </Stack>
        </Container>

        {/* CSS Animation */}
        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0) scale(1);
              }
              50% {
                transform: translateY(-30px) scale(1.05);
              }
            }
          `}
        </style>
      </Box>
       <StatsSection />
      <FeaturesSection />
            <HowItWorksSection />
      
      {/* Other sections will go here */}
    </div>


    
     

    
  );
}

export default Home;