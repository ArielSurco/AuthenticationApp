/// External
import { useState } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

// Internal
import { Button, ProfileAvatar } from 'components/ui/atoms';
import ProfileMenuItem, { IProfileMenuItemProps } from 'components/ui/atoms/ProfileMenuItem/ProfileMenuItem';

// Styles
import './ProfileMenu.scss';

interface IProfileMenuItems extends IProfileMenuItemProps {
  hasDivider?: boolean;
}

interface IProfileMenuProps {
  label: string;
  avatarSrc?: string;
  items: IProfileMenuItems[];
}

const ProfileMenu = ({ label, avatarSrc = '', items }: IProfileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-menu-container">
      <Button className="profile-menu-closed" variant="unstyled" onClick={() => setIsOpen((open) => !open)}>
        <ProfileAvatar size="sm" src={avatarSrc} />
        <p>{label}</p>
        <span className="profile-menu-closed-arrow">
          {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </span>
      </Button>
      {isOpen && (
        <div className="profile-menu">
          {items.map((item) => (
            <>
              <ProfileMenuItem key={item.label} {...item} />
              {item.hasDivider && <hr className="divider" /> }
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
