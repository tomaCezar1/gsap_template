import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', { type: 'words' });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        yPercent: 100,
        stagger: 0.02,
        ease: 'expo.out',
        duration: 1,
        opacity: 0,
      })
      .from('.top-grid div, .bottom-grid div', {
        duration: 1,
        opacity: 0,
        ease: 'power1.out',
        stagger: 0.05,
      });
  }, []);

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Cele Mai Bune Cocktailuri</p>
            <h2>
              Unde fiecare detaliu contează <span className="text-white">-</span>
              de la preparare până la garnisire
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Fiecare cocktail pe care îl servim reflectă obsesia noastră
              pentru detalii – de la prima preparare până la garnisirea finală.
              Această grijă transformă o băutură simplă în ceva cu adevărat
              memorabil.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                Peste +10.000 de clienți mulțumiți
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="images/abt1.png" alt="grid-img1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="images/abt2.png" alt="grid-img2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="images/abt5.png" alt="grid-img5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="images/abt3.png" alt="grid-img3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="images/abt4.png" alt="grid-img4" />
        </div>
      </div>
    </div>
  );
};
export default About;
