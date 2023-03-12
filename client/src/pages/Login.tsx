// External
import { MdLock, MdEmail } from 'react-icons/md';

// Internal
import {
  Button, Card, Input, ProfileAvatar, Title,
} from 'components/ui/atoms';

// Assets
import Logo from 'assets/devchallenges.svg';

const Login = () => (
  <Card>
    <img src={Logo} alt="logo" />
    <Title level="h1" fontWeight={600}>Join thousands of learners from around the world</Title>
    <Title level="h2" fontWeight={400}>Master web development by making real-life projects. There are multiple paths for you to choose</Title>
    <Input placeholder="Example" label="Email" icon={<MdEmail style={{ width: '2.2rem', height: '2.2rem' }} />} />
    <Input placeholder="Example" icon={<MdLock style={{ width: '2.2rem', height: '2.2rem' }} />} />
    <Button variant="primary">Login</Button>
    <hr className="divider" />
    <Button variant="secondary" isOutline>Edit</Button>
    <ProfileAvatar size="lg" isEditable onEdit={() => alert('Edited')} />
  </Card>
);

export default Login;
