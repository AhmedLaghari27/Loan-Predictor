import { useState } from 'react';
import { Container, Title, Text, Box, Stack, Select, NumberInput, Button, Group, Paper, Radio, Progress,  List } from '@mantine/core';
import { IconCurrencyDollar, IconHome, IconUser, IconBriefcase, IconCheck, IconX, IconAlertCircle } from '@tabler/icons-react';
import axios from 'axios';

export function LoanEligibilityForm() {
  const [formData, setFormData] = useState({
    gender: '',
    married: '',
    dependents: '',
    education: '',
    selfEmployed: '',
    applicantIncome: 0,
    coapplicantIncome: 0,
    loanAmount: 0,
    loanAmountTerm: '',
    creditHistory: 1,
    propertyArea: '',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:8000/api/predict', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResult({
        prediction: 'Error',
        confidence: 0,
        key_factors: [],
        recommendations: ['Failed to connect to server. Please try again.']
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box style={{ background: '#7bcec3b6', padding: '100px 0 50px 0', minHeight: '100vh' }}>
      <Container size="lg">
        {/* Header */}
        <Stack gap="md" align="center" mb={50}>
          <Box style={{
            padding: '8px 20px',
            borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',          }}>
            <Text size="sm" fw={600} style={{ color: '#000000', letterSpacing: '1px', textTransform: 'uppercase' }}>
              AI-Powered Prediction
            </Text>
          </Box>
          <Title order={1} ta="center" style={{ fontSize: '48px', fontWeight: 900, color: '#000', letterSpacing: '-1px' }}>
            Check Your Loan Eligibility
          </Title>
          <Text size="lg" ta="center" style={{ color: '#6B7280', maxWidth: '600px' }}>
            Get instant prediction in 30 seconds. Fill in your details below.
          </Text>
        </Stack>

        <Group align="flex-start" gap="xl">
          {/* Form */}
          <Paper
            shadow="sm"
            radius="xl"
            p={40}
            style={{
              background: '#fff',
              border: '1px solid #E5E7EB',
              flex: result ? '0 0 55%' : '1',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack gap="lg">
                {/* Personal Information */}
                <Box>
                  <Group gap="xs" mb="sm">
                    <IconUser size={20} color="#667eea" />
                    <Title order={4} style={{ fontSize: '18px', fontWeight: 700 }}>Personal Information</Title>
                  </Group>
                  <Stack gap="sm">
                    <Group grow>
                      <Select label="Gender" placeholder="Select" required data={['Male', 'Female']} 
                        value={formData.gender} onChange={(v) => setFormData({ ...formData, gender: v || '' })} />
                      <Select label="Marital Status" placeholder="Select" required data={['Yes', 'No']} 
                        value={formData.married} onChange={(v) => setFormData({ ...formData, married: v || '' })} />
                    </Group>
                    <Group grow>
                      <Select label="Dependents" placeholder="Select" required data={['0', '1', '2', '3+', '4+']} 
                        value={formData.dependents} onChange={(v) => setFormData({ ...formData, dependents: v || '' })} />
                      <Select label="Education" placeholder="Select" required data={['Graduate', 'Not Graduate']} 
                        value={formData.education} onChange={(v) => setFormData({ ...formData, education: v || '' })} />
                    </Group>
                  </Stack>
                </Box>

                {/* Employment & Income */}
                <Box>
                  <Group gap="xs" mb="sm">
                    <IconBriefcase size={20} color="#667eea" />
                    <Title order={4} style={{ fontSize: '18px', fontWeight: 700 }}>Employment & Income</Title>
                  </Group>
                  <Stack gap="sm">
                    <Select label="Self Employed" placeholder="Select" required data={['Yes', 'No']} 
                      value={formData.selfEmployed} onChange={(v) => setFormData({ ...formData, selfEmployed: v || '' })} />
                    <Group grow>
                      <NumberInput label="Applicant Income" placeholder="5000" required min={0} leftSection={<IconCurrencyDollar size={16} />}
                        value={formData.applicantIncome} onChange={(v) => setFormData({ ...formData, applicantIncome: Number(v) })} />
                      <NumberInput label="Co-applicant Income" placeholder="0" min={0} leftSection={<IconCurrencyDollar size={16} />}
                        value={formData.coapplicantIncome} onChange={(v) => setFormData({ ...formData, coapplicantIncome: Number(v) })} />
                    </Group>
                  </Stack>
                </Box>

                {/* Loan Details */}
                <Box>
                  <Group gap="xs" mb="sm">
                    <IconCurrencyDollar size={20} color="#667eea" />
                    <Title order={4} style={{ fontSize: '18px', fontWeight: 700 }}>Loan Details</Title>
                  </Group>
                  <Stack gap="sm">
                    <Group grow>
                      <NumberInput label="Loan Amount (thousands)" placeholder="150" required min={0} leftSection={<IconCurrencyDollar size={16} />}
                        value={formData.loanAmount} onChange={(v) => setFormData({ ...formData, loanAmount: Number(v) })} />
                      <Select label="Loan Term (months)" placeholder="Select" required 
                        data={['12', '36', '60', '84', '120', '180', '240', '300', '360', '480']} 
                        value={formData.loanAmountTerm} onChange={(v) => setFormData({ ...formData, loanAmountTerm: v || '' })} />
                    </Group>
                  </Stack>
                </Box>

                {/* Credit & Property */}
                <Box>
                  <Group gap="xs" mb="sm">
                    <IconHome size={20} color="#667eea" />
                    <Title order={4} style={{ fontSize: '18px', fontWeight: 700 }}>Credit & Property</Title>
                  </Group>
                  <Stack gap="sm">
                    <Box>
                      <Text fw={600} size="sm" mb="xs">Credit History</Text>
                      <Radio.Group value={formData.creditHistory.toString()} 
                        onChange={(v) => setFormData({ ...formData, creditHistory: Number(v) })} required>
                        <Stack gap="xs">
                          <Radio value="1" label="Good (All debts paid on time)" />
                          <Radio value="0" label="Poor (History of defaults)" />
                        </Stack>
                      </Radio.Group>
                    </Box>
                    <Select label="Property Area" placeholder="Select" required data={['Urban', 'Semiurban', 'Rural']} 
                      value={formData.propertyArea} onChange={(v) => setFormData({ ...formData, propertyArea: v || '' })} />
                  </Stack>
                </Box>

                <Button type="submit" size="lg" radius="xl" loading={loading}  color='#12e9cd'
                  style={{ height: '55px', fontSize: '16px', fontWeight: 700, marginTop: '10px',color:'black' }}>
                  {loading ? 'Analyzing...' : 'Check My Eligibility →'}
                </Button>
                <Text size="sm" ta="center" style={{ color: '#6B7280' }}>
                  🔒 Secure • No data stored • Instant results
                </Text>
              </Stack>
            </form>
          </Paper>

          {/* Results */}
          {result && (
            <Paper shadow="md" radius="xl" p={40} style={{
              background: result.prediction === 'Approved' 
                ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' 
                : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: '#fff',
              flex: '0 0 40%',
            }}>
              <Stack gap="lg">
                <Box ta="center">
                  {result.prediction === 'Approved' ? <IconCheck size={60} /> : <IconX size={60} />}
                  <Title order={2} mt="md" style={{ fontSize: '32px' }}>{result.prediction}</Title>
                  <Text size="lg" style={{ opacity: 0.9 }}>Confidence: {result.confidence}%</Text>
                  <Progress value={result.confidence} size="lg" radius="xl" mt="md" 
                    color={result.prediction === 'Approved' ? 'teal' : 'pink'} />
                </Box>

                <Box>
                  <Text fw={700} size="lg" mb="sm">Key Factors</Text>
                  <List spacing="xs" icon={<IconAlertCircle size={16} />}>
                    {result.key_factors.map((factor: string, i: number) => (
                      <List.Item key={i}>{factor.replace(/_/g, ' ')}</List.Item>
                    ))}
                  </List>
                </Box>

                <Box>
                  <Text fw={700} size="lg" mb="sm">
                    {result.prediction === 'Approved' ? 'Next Steps' : 'Recommendations'}
                  </Text>
                  <List spacing="xs">
                    {result.recommendations.map((rec: string, i: number) => (
                      <List.Item key={i}>{rec}</List.Item>
                    ))}
                  </List>
                </Box>

                <Button variant="white" size="md" radius="xl" onClick={() => setResult(null)}
                  style={{ color: result.prediction === 'Approved' ? '#43e97b' : '#f5576c' }}>
                  Check Another Application
                </Button>
              </Stack>
            </Paper>
          )}
        </Group>
      </Container>
    </Box>
  );
}

export default LoanEligibilityForm;