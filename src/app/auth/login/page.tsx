import { authRoutes } from '@subdomains/auth/route';

interface LoginPageProps {
  searchParams: {
    redirect_to?: string;
  };
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  return <authRoutes.LOGIN searchParams={searchParams} />;
}
