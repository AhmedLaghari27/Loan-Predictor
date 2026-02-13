import { useState } from 'react';
import { Container, Group, Tabs, Text, Burger, Box,  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

const tabs = ['Home', 'About', 'Check Eligibility'];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [activeTab, setActiveTab] = useState('Home');
  const navigate = useNavigate();

  const handleTabChange = (value: string | null) => {
    if (value) {
      setActiveTab(value);
      // Navigate to different routes
      if (value === 'Home') navigate('/');
      else if (value === 'About') navigate('/about');
      
      else if (value === 'Check Eligibility') navigate('/check-eligibility');
    }
  };

  const items = tabs.map((tab) => (
    <Tabs.Tab 
      value={tab} 
      key={tab}
      style={{
        color: activeTab === tab ? '#12e9cd' : 'rgba(255, 255, 255, 0.7)',
        fontSize: '15px',
        fontWeight: 600,
        padding: '10px 20px',
        background: activeTab === tab ? 'rgba(58, 60, 70, 0.15)' : 'transparent',
        border: 'none',
        borderRadius: '8px',
      }}
      onMouseEnter={(e) => {
        if (activeTab !== tab) {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.color = '#fff';
        }
      }}
      onMouseLeave={(e) => {
        if (activeTab !== tab) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
        }
      }}
    >
      {tab}
    </Tabs.Tab>
  ));

  return (
    <Box
      style={{
  background: 'rgba(26, 26, 26, 0.7)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '35px',
  position: 'absolute',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 100,
  width: '50%',
  maxWidth: '800px',
  margin: '0 auto',
}}
    >
      <Container size="lg">
        <Group 
          justify="space-between" 
          style={{ 
            height: '70px',
            padding: '0 20px',
          }}
        >
          {/* Logo */}
          <Text
            style={{
              fontSize: '24px',
              fontWeight: 900,
              background: '#12e9cd',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.5px',
            }}
          >
            LoanCheck
          </Text>

          {/* Desktop Navigation */}
          <Box visibleFrom="sm">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="pills"
            >
              <Tabs.List style={{ gap: '8px', border: 'none' }}>{items}</Tabs.List>
            </Tabs>
          </Box>

          {/* Mobile Burger */}
          <Burger
            opened={opened}
            onClick={toggle}
            color="#fff"
            size="sm"
            hiddenFrom="sm"
          />
        </Group>

        {/* Mobile Menu */}
        {opened && (
          <Box
            hiddenFrom="sm"
            style={{
              background: '#1a1a1a',
              padding: '20px',
              borderTop: '1px solid #2a2a2a',
            }}
          >
            {tabs.map((tab) => (
              <Box
                key={tab}
                onClick={() => {
                  handleTabChange(tab);
                  toggle();
                }}
                style={{
                  padding: '15px 10px',
                  color: activeTab === tab ? '#667eea' : 'rgba(255, 255, 255, 0.7)',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderBottom: '1px solid #2a2a2a',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.paddingLeft = '20px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = activeTab === tab ? '#667eea' : 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
              >
                {tab}
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}