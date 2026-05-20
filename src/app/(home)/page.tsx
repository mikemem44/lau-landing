import Gallery from '@/components/layout/main/Gallery';
import About from '@/components/layout/main/About';
import { Suspense } from 'react';
import ContactMe from '@/components/layout/main/ContactMe';
import Loading from '@/components/ui/Loading';
import Hero from '@/components/layout/main/Hero';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Home = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<Loading />}>
            <Gallery />
          </Suspense>
          <About />
          <ContactMe />
        </main>
        <Footer />
    </div>
  
    


  );
}

export default Home;