import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput, Box, Stack } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';

export function GetInTouch() {
  return (
            <Box style={{ background: '#7bcec3b6', padding: '80px 20px' }}>


    <Paper 
      shadow="md" 
      radius="lg"
      style={{
        overflow: 'hidden',
        maxWidth: '1000px',
        margin: '0 auto',
        
         
      }}
    >
      <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Contact Info Section */}
        <Box style={{
          flex: '1',
          minWidth: '300px',
          background: '#12e9cd',
          padding: '50px 40px',
          color: '#fff',
        }}>
          <Text size="lg" fw={700} style={{ marginBottom: '30px', fontSize: '24px' }}>
            Contact Information
          </Text>
          
          <Stack gap="xl">
            <Box style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <IconMail size={24} />
              <Box>
                <Text fw={600} size="sm" style={{ marginBottom: '4px', opacity: 0.9 }}>Email</Text>
                <Text size="sm" style={{ opacity: 0.8 }}>support@loaneligibility.com</Text>
              </Box>
            </Box>

            <Box style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <IconPhone size={24} />
              <Box>
                <Text fw={600} size="sm" style={{ marginBottom: '4px', opacity: 0.9 }}>Phone</Text>
                <Text size="sm" style={{ opacity: 0.8 }}>+1 (555) 123-4567</Text>
              </Box>
            </Box>

            <Box style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <IconMapPin size={24} />
              <Box>
                <Text fw={600} size="sm" style={{ marginBottom: '4px', opacity: 0.9 }}>Address</Text>
                <Text size="sm" style={{ opacity: 0.8 }}>123 Finance Street, New York, NY 10001</Text>
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* Form Section */}
        <Box 
          component="form" 
          onSubmit={(event) => event.preventDefault()}
          style={{
            flex: '1.5',
            minWidth: '300px',
            padding: '50px 40px',
            background: '#fff',
          }}
        >
          <Text size="lg" fw={700} style={{ marginBottom: '30px', fontSize: '24px', color: '#000' }}>
            Get in Touch
          </Text>

          <Stack gap="md">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <TextInput 
                label="Your name" 
                placeholder="Your name"
                styles={{
                  label: { fontWeight: 600, marginBottom: '8px' }
                }}
              />
              <TextInput 
                label="Your email" 
                placeholder="hello@example.com" 
                required
                styles={{
                  label: { fontWeight: 600, marginBottom: '8px' }
                }}
              />
            </SimpleGrid>

            <TextInput 
              label="Subject" 
              placeholder="Subject" 
              required
              styles={{
                label: { fontWeight: 600, marginBottom: '8px' }
              }}
            />

            <Textarea
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={4}
              styles={{
                label: { fontWeight: 600, marginBottom: '8px' }
              }}
            />

            <Group justify="flex-end" mt="md">
              <Button 
                type="submit"
                // variant="gradient"
                color='#12e9cd'
                size="md"
                style={{
                  height: '45px',
                  paddingLeft: '35px',
                  paddingRight: '35px',
                }}
              >
                Send Message
              </Button>
            </Group>
          </Stack>
        </Box>
      </Box>
    </Paper>
                </Box>

  );
}