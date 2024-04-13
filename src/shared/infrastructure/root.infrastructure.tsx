import '@assets/styles/globals.css';

interface RootInfrastructure {
  children: React.ReactNode;
}

export function RootInfrastructure({ children }: RootInfrastructure) {
  return children;
}
