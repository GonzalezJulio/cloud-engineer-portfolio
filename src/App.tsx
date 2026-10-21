import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { Analytics } from "@vercel/analytics/react";



function                                        App() {
  return (
    
      <MainLayout>
        <HomePage />
        <Analytics />
      </MainLayout>
      
  );
}

export default App;
