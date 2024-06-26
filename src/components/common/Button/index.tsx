import styles from './Button.module.scss';

interface ButtonProps {
  size: 'large' | 'mediumLarge' | 'medium' | 'small' | 'extraSmall';
  children?: React.ReactNode;
  backgroundColor:
    | '$color-gray-800'
    | '$color-gray-300'
    | '$color-gray-100'
    | '$color-pink-main'
    | '$color-white'
    | '$color-white-gray'
    | '$color-white-gray-gray'
    | '$color-white-pink';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button({ type, size, children, backgroundColor, onClick, disabled }: ButtonProps) {
  const sizeClass = styles[size];
  const backgroundColorMap: { [key: string]: string } = {
    '$color-gray-800': styles.backgroundBlack,
    '$color-gray-300': styles.backgroundGray,
    '$color-gray-100': styles.backgroundWhiteGray,
    '$color-pink-main': styles.backgroundPink,
    '$color-white': styles.backgroundWhite,
    '$color-white-gray': styles.backgroundWhiteWithGrayBorder,
    '$color-white-gray-gray': styles.backgroundWhiteWithGrayBorderAndGrayFont,
    '$color-white-pink': styles.backgroundWhiteWithPink,
  };
  const backgroundClass = backgroundColorMap[backgroundColor] || '';
  const disabledClass = disabled ? styles.disabled : '';
  const className = `${styles.button} ${sizeClass} ${backgroundClass} ${disabledClass}`;

  return (
    <div className={styles.buttonContainer}>
      <button className={className} onClick={onClick} disabled={disabled} type={type || 'button'}>
        {children}
      </button>
    </div>
  );
}
