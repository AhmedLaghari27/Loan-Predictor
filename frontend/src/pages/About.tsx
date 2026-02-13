import { Button, Container, Text, Title, Group, Box, Badge, Stack } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';
import backgroundImg from '../assets/2.jpg';

import { MissionSection } from '../components/MissionSection';
import {GetInTouch} from '../components/GetInTouch'
import { useNavigate } from 'react-router-dom';


export function About() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO SECTION */}
      <Box style={{ position: 'relative', overflow: 'hidden',height:'100vh' }}>
        {/* Background Image Layer with Reduced Opacity */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          minHeight: '70vh',
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: 0,
        }} />

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100vh',
          background: '#7bcec3b6',
          zIndex: 0,
        }} />

        {/* Animated Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '400px',
          height: '400px',
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
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
          }}
        >
          <Stack gap="xl" style={{ textAlign: 'center', maxWidth: '900px' }}>
            {/* Badge */}
            <Group justify="center">
              <Badge 
                size="xl" 
                leftSection={<IconSparkles size={20} />}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: 450,
                  letterSpacing: '0.5px',
                }}
              >
                OUR STORY
              </Badge>
            </Group>

            {/* Main Heading */}
            <Title 
              order={1}
              style={{
                color: '#fff',
                fontSize: '64px',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-2px',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              About Our{' '}
              <span style={{
                background: 'linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline',
              }}>
                Loan Eligibility
              </span>
              {' '}Checker
            </Title>

            {/* Description */}
            <Text 
              size="xl"
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '22px',
                lineHeight: 1.7,
                maxWidth: '750px',
                margin: '0 auto',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Empowering smarter financial decisions through AI. We believe everyone deserves 
              clarity and confidence before applying for a loan.
            </Text>

            {/* CTA Buttons */}
            <Group justify="center" gap="lg" mt="xl">
              <Button 
                size="xl" 
                radius="xl"
                onClick={() => navigate('/check-eligibility')}

                style={{
                  height: '60px',
                  paddingLeft: '45px',
                  paddingRight: '45px',
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
                Check Eligibility →
              </Button>

              
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

      <MissionSection />
      <GetInTouch />

      
    </div>

  );
}

export default About;