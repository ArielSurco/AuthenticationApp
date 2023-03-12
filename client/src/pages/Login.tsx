// External
import {
  MdLock, MdEmail, MdGroup, MdLogout,
} from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

// Internal
import {
  Button, Card, Input, ProfileAvatar, ProfileMenuItem, Title,
} from 'components/ui/atoms';

// Assets
import Logo from 'assets/devchallenges.svg';
import { ProfileMenu } from 'components/ui/molecules';

const mockItems = [
  { label: 'My profile', icon: <FaUserCircle style={{ width: '1.8rem', height: '1.8rem' }} /> },
  { label: 'Group Chat', icon: <MdGroup style={{ width: '1.8rem', height: '1.8rem' }} />, hasDivider: true },
  { label: 'Logout', icon: <MdLogout style={{ width: '1.8rem', height: '1.8rem', color: 'red' }} /> },
];

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
    <ProfileMenuItem label="Profile" icon={<FaUserCircle style={{ width: '1.8rem', height: '1.8rem' }} />} />
    <ProfileMenu
      label="Xanthe Neal"
      items={mockItems}
    />
  </Card>
);

export default Login;
