import { useGSAP } from '@gsap/react';
import { openingHours, socials } from '../constants';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut',
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to('#f-right-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut',
      })
      .to('#f-left-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut',
      });
  }, []);

  return (
    <footer id="contact">
      <img
        src="images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img src="images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <h2>Unde Ne Găsești</h2>

        <div>
          <h3>Vizitează Barul Nostru</h3>
          <p>Bd. Ștefan cel Mare 12, Chișinău, Moldova</p>
        </div>

        <div>
          <h3>Contactează-ne</h3>
          <p>salut@themojito.md</p>
          <p>+373 69 123 456</p>
        </div>

        <div>
          <h3>Deschis în Fiecare Zi</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Rețele Sociale</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={`${social.name} icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
