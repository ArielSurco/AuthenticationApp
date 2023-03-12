// External
import { MdCameraAlt } from 'react-icons/md';
import { concatClassnames } from 'utils/functions';

// Styles
import './ProfileAvatar.scss';

// Assets
import DefaultAvatar from 'assets/default-avatar.jpg';
import Button from '../Button/Button';

interface IProfileAvatarProps {
  className?: string;
  src?: string;
  size?: 'sm' | 'lg';
  isEditable?: boolean;
  onEdit?: () => void;
}

const ProfileAvatar = ({
  className = '', src = '', size = 'sm', isEditable = false, onEdit = () => {},
}: IProfileAvatarProps) => (
  <div className={concatClassnames(className, 'profile-avatar-container', `size-${size}`, isEditable && 'is-editable')}>
    <div className="edit-avatar-icon-container">
      <Button className="edit-avatar-icon-button" isIcon onClick={onEdit}>
        <MdCameraAlt className="edit-avatar-icon" />
      </Button>
    </div>
    <img className="profile-avatar" src={src || DefaultAvatar} alt="Profile Avatar" />
  </div>
);

export default ProfileAvatar;
