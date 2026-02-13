import { Container, Title, Text, Box, SimpleGrid, Stack, ThemeIcon } from '@mantine/core';
import { IconAlertCircle, IconTarget, IconEye } from '@tabler/icons-react';

export function MissionSection() {
  return (
    <Box style={{ background: '#7bcec3b6', padding: '120px 0' }}>
      <Container size="xl">
        {/* Section Header */}
        <Stack gap="md" align="center" mb={80}>
          <Box style={{
            padding: '8px 20px',
            borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',          }}>
            <Text size="sm" fw={600} style={{ color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Why We Exist
            </Text>
          </Box>
          <Title order={2} ta="center" style={{ fontSize: '48px', fontWeight: 900, color: '#000', letterSpacing: '-1px', maxWidth: '700px' }}>
            The Challenge We're Solving
          </Title>
        </Stack>

        {/* Problem Cards */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} mb={80}>
          <Box style={{
            background: '#a29d9de8',
            padding: '50px',
            borderRadius: '24px',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <Box style={{ position: 'absolute', top: '20px',  opacity: 0.2 }}>
              <IconAlertCircle size={60} stroke={2} />
            </Box>
            <Title order={3} style={{ fontSize: '32px', fontWeight: 700, marginTop:'80px' , marginBottom: '20px', position: 'relative', zIndex: 1 }}>
              The Problem
            </Title>
            <Text size="lg" style={{ lineHeight: 1.7, opacity: 0.95, position: 'relative', zIndex: 1 }}>
              Every year, millions of loan applications are rejected without clarity. Applicants waste time, damage credit scores, and feel uncertain about their financial options. Traditional processes are opaque—you apply, wait weeks, and often receive rejection without understanding why.
            </Text>
          </Box>

          <Stack gap="lg">
            <Box style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <Text fw={700} size="xl" mb="xs" style={{ color: '#f5576c' }}>Unclear Approval Chances</Text>
              <Text style={{ color: '#6B7280', lineHeight: 1.6 }}>Applicants don't know their likelihood of approval before applying</Text>
            </Box>
            <Box style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <Text fw={700} size="xl" mb="xs" style={{ color: '#f5576c' }}>Credit Score Damage</Text>
              <Text style={{ color: '#6B7280', lineHeight: 1.6 }}>Rejections hurt credit scores and financial confidence</Text>
            </Box>
            <Box style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <Text fw={700} size="xl" mb="xs" style={{ color: '#f5576c' }}>No Improvement Guidance</Text>
              <Text style={{ color: '#6B7280', lineHeight: 1.6 }}>No clear path on how to improve eligibility</Text>
            </Box>
          </Stack>
        </SimpleGrid>

        {/* Mission & Vision */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
          <Box style={{
            background: '#a29d9de8',
            padding: '50px',
            borderRadius: '24px',
            color: '#fff',
          }}>
            <ThemeIcon size={60} radius="xl" style={{ background: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>
              <IconTarget size={30} />
            </ThemeIcon>
            <Title order={3} style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Our Mission</Title>
            <Text size="lg" style={{ lineHeight: 1.7, opacity: 0.95 }}>
              To democratize access to financial information by providing transparent, instant loan eligibility predictions. We're committed to helping individuals understand their financial standing and empowering them to make better decisions before they apply.
            </Text>
          </Box>

          <Box style={{
            background: '#a29d9de8',
            padding: '50px',
            borderRadius: '24px',
            color: '#fff',
          }}>
            <ThemeIcon size={60} radius="xl" style={{ background: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>
              <IconEye size={30} />
            </ThemeIcon>
            <Title order={3} style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Our Vision</Title>
            <Text size="lg" style={{ lineHeight: 1.7, opacity: 0.95 }}>
              A world where financial decisions are never made in the dark. We envision a future where technology bridges the gap between lenders and borrowers, creating transparency, reducing anxiety, and helping everyone achieve their financial goals.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
export default MissionSection ;