"use client"

import StoreProvider from "./StoreProvider";
import ProductName from "./product/ProductName";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <StoreProvider>
          <ProductName/>
        </StoreProvider>
    </main>
  );
}
