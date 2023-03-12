// Styles
import { NavLink } from 'react-router-dom';
import { concatClassnames } from 'utils/functions';
import './ProfileMenuItem.scss';

interface IProfileMenuItemProps {
  label: string;
  className?: string;
  icon?: JSX.Element | null;
  redirectTo?: string;
  color?: string;
  isLastItem?: boolean;
}

const ProfileMenuItem = ({
  label, className = '', icon = null, redirectTo = '.', color = '', isLastItem = false,
}: IProfileMenuItemProps) => (
  <NavLink
    className={concatClassnames(className, 'profile-menu-item', isLastItem && 'last-item')}
    to={redirectTo}
    style={{
      color,
    }}
  >
    <span className="profile-menu-item-icon">
      {icon}
    </span>
    <p className="profile-menu-item-label">
      {label}
    </p>
  </NavLink>
);

export default ProfileMenuItem;
