export interface ISidebarNav {
  icon: string;
  path: string | null;
  isActive: boolean;
}

export const CMainSidebarNav: ISidebarNav[] = [
  {icon: 'users', path: 'users', isActive: false},
  {icon: 'chat', path: 'chat', isActive: true},
  {icon: 'phone', path: 'calls', isActive: false},
  {icon: 'settings', path: 'setting', isActive: false},
]

export const CBottomSidebarNav: ISidebarNav[] = [
  {icon: 'questionInCircle', path: 'help-center', isActive: false},
  {icon: 'logout', path: null, isActive: false},
]
