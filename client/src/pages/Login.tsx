// Internal
import { Card, Title } from 'components/ui/atoms';

// Assets
import Logo from 'assets/devchallenges.svg';

const Login = () => (
  <Card>
    <img src={Logo} alt="logo" />
    <Title level="h1" fontWeight={600}>Join thousands of learners from around the world</Title>
    <Title level="h2" fontWeight={400}>Master web development by making real-life projects. There are multiple paths for you to choose</Title>
  </Card>
);

export default Login;
