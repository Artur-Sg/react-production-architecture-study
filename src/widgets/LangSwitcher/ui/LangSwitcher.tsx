import AppButton, { ButtonTheme } from '@shared/ui/AppButton/AppButton';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleTranslate = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      className={classNames(cls.LangSwitcher, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTranslate}
    >
      {t(short ? 'lang' : 'language')}
    </AppButton>
  );
};

export default LangSwitcher;
