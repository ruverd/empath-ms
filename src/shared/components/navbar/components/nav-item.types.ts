export interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  onNavigate?: () => void;
}
