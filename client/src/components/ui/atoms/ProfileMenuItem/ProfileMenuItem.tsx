// Styles
import { Link } from 'react-router-dom';
import { concatClassnames } from 'utils/functions';
import './ProfileMenuItem.scss';

export interface IProfileMenuItemProps {
  label: string;
  className?: string;
  icon?: JSX.Element | null;
  redirectTo?: string;
  color?: string;
}

const ProfileMenuItem = ({
  label, className = '', icon = null, redirectTo = '.', color = '',
}: IProfileMenuItemProps) => (
  <Link
    className={concatClassnames(className, 'profile-menu-item')}
    to={redirectTo}
    style={{ color }}
  >
    <span className="profile-menu-item-icon">
      {icon}
    </span>
    <p className="profile-menu-item-label">
      {label}
    </p>
  </Link>
);

export default ProfileMenuItem;
