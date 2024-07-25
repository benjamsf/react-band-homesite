import React, { ReactNode } from "react";

interface CardsContainerProps {
  children: ReactNode;
}

export function CardsContainer({ children }: CardsContainerProps) {
  const childrenCount = React.Children.count(children);
  const containerClass =
    childrenCount > 1
      ? "mx-2 p-2 h-[calc(100vh - 4rem)] flex flex-col flex-col gap-3 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-6"
      : "mx-2 p-2 h-[calc(100vh - 4rem)] flex flex-col items-center justify-center";

  return <div className={containerClass}>{children}</div>;
}
