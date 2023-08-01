import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useMediaQuery } from '@mui/material';

export default function Nav() {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'md')
  );

  return <>{isSmallScreen ? <MobileNav /> : <DesktopNav />}</>;
}
