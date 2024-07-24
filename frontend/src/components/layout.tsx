import { PropsWithChildren } from "react";

export function PageContainer({ children }: PropsWithChildren) {
  return <div className="py-20 container max-w-screen-xl">{children}</div>;
}

export function PageHeaderSection({ children }: PropsWithChildren) {
  return <div className="mb-10">{children}</div>;
}
