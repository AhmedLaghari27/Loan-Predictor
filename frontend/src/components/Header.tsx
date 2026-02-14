import { useState } from 'react';
import { Container, Group, Tabs, Text, Burger, Box } from '@mantine/core';
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
        background: activeTab === tab ? 'rgba(18, 233, 205, 0.15)' : 'transparent',
        border: 'none',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        if (activeTab !== tab) {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (activeTab !== tab) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {tab}
    </Tabs.Tab>
  ));

  return (
    <>
      <Box
        style={{
          background: 'rgba(26, 26, 26, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '35px',
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: 'calc(100% - 40px)',
          maxWidth: '900px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container size="lg" style={{ padding: 0 }}>
          <Group 
            justify="space-between" 
            style={{ 
              height: '70px',
              padding: '0 24px',
            }}
          >
            {/* Logo */}
            <Text
              onClick={() => navigate('/')}
              style={{
                fontSize: '22px',
                fontWeight: 900,
                color: '#12e9cd',
                letterSpacing: '-0.5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.filter = 'brightness(1.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(1)';
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
            <Box hiddenFrom="sm">
              <Burger
                opened={opened}
                onClick={toggle}
                color="#12e9cd"
                size="sm"
                style={{
                  transition: 'all 0.3s ease',
                }}
              />
            </Box>
          </Group>
        </Container>
      </Box>

      {/* Mobile Menu - Separate Dropdown */}
      {opened && (
        <Box
          hiddenFrom="sm"
          style={{
            position: 'fixed',
            top: '110px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 40px)',
            maxWidth: '500px',
            background: 'rgba(26, 26, 26, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '20px',
            padding: '16px',
            zIndex: 99,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'slideDown 0.3s ease',
          }}
        >
          {tabs.map((tab, index) => (
            <Box
              key={tab}
              onClick={() => {
                handleTabChange(tab);
                toggle();
              }}
              style={{
                padding: '16px 20px',
                color: activeTab === tab ? '#12e9cd' : 'rgba(255, 255, 255, 0.8)',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                borderRadius: '12px',
                marginBottom: index < tabs.length - 1 ? '8px' : '0',
                background: activeTab === tab ? 'rgba(18, 233, 205, 0.1)' : 'transparent',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = activeTab === tab 
                  ? 'rgba(18, 233, 205, 0.15)' 
                  : 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.paddingLeft = '24px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = activeTab === tab 
                  ? 'rgba(18, 233, 205, 0.1)' 
                  : 'transparent';
                e.currentTarget.style.paddingLeft = '20px';
              }}
            >
              <span>{tab}</span>
              {activeTab === tab && (
                <Box
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#12e9cd',
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      )}

      {/* Overlay for mobile menu */}
      {opened && (
        <Box
          hiddenFrom="sm"
          onClick={toggle}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 98,
            animation: 'fadeIn 0.3s ease',
          }}
        />
      )}

      {/* CSS Animations */}
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @media (max-width: 768px) {
            /* Ensure header adapts on small screens */
          }
        `}
      </style>
    </>
  );
}