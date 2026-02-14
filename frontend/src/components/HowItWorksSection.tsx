import { IconFileText, IconBrain, IconChartDots } from '@tabler/icons-react';
import { Container, Text, Title, Box, Timeline,  } from '@mantine/core';
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
        padding: '120px 0',
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

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
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
              Process
            </Text>
          </Box>

          <Title
            order={1}
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '24px',
              letterSpacing: '-1px',
            }}
          >
            How It Works
          </Title>

          <Text
            size="xl"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontSize: '20px',
            }}
          >
            Get your loan eligibility prediction in three simple steps.
            Fast, accurate, and completely automated.
          </Text>
        </Box>

        {/* Timeline */}
        <Box
          style={{
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <Timeline
            active={3}
            bulletSize={80}
            lineWidth={3}
            color="rgba(255, 255, 255, 0.3)"
          >
            {STEPS_DATA.map((step, index) => {
              const Icon = step.icon;
              return (
                <Timeline.Item
                  key={index}
                  bullet={
                    <Box
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        position: 'relative',
                      }}
                    >
                      <Box
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: step.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={32} stroke={2} color="#FFFFFF" />
                      </Box>
                    </Box>
                  }
                  title={
                    <Box
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '32px',
                        marginBottom: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.transform = 'translateX(10px)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <Box
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: step.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '16px',
                            fontSize: '20px',
                            fontWeight: 900,
                            color: '#FFFFFF',
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Title
                          order={3}
                          style={{
                            fontSize: '28px',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            margin: 0,
                          }}
                        >
                          {step.title}
                        </Title>
                      </Box>
                      <Text
                        size="lg"
                        style={{
                          color: 'rgba(255, 255, 255, 0.85)',
                          lineHeight: 1.7,
                          fontSize: '16px',
                          paddingLeft: '56px',
                        }}
                      >
                        {step.description}
                      </Text>
                    </Box>
                  }
                />
              );
            })}
          </Timeline>
        </Box>

        {/* CTA */}
        <Box ta="center" mt={60}>
          <Box
            component="button"
            onClick={() => navigate('/check-eligibility')}

            style={{
              background: '#12e9cd',
              color: '#fcfdff',
              border: 'none',
              padding: '18px 48px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
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