export interface ISidebarNav {
  icon: string;
  path: string | null;
  isActive?: boolean;
}

export const CMainSidebarNav: ISidebarNav[] = [
  {icon: 'users', path: 'users'},
  {icon: 'chat', path: 'chat'},
  {icon: 'phone', path: 'calls'},
  {icon: 'settings', path: 'settings'},
]

export const CBottomSidebarNav: ISidebarNav[] = [
  {icon: 'questionInCircle', path: 'help-center'},
  {icon: 'logout', path: null},
]
