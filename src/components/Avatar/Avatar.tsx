import styles from "./Avatar.module.css";

interface AvatarInterface {
  src: string;
  hasBorder?: boolean;
}

export const Avatar: React.FC<AvatarInterface> = ({ src, hasBorder }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
