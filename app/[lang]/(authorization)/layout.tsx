
export async function generateMetadata(
  { params }
): Promise<any> {
  // @ts-ignore
  return {
    openGraph: {
      images: ['https://cyberhack.pro/images/og/auth.png']
    }
  }
}

export default async function AuthorizationLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
