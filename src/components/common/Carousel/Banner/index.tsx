import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import styles from './BannerCarousel.module.scss';
import { useSelectedSnapDisplay } from '@/hooks/useSelectedSnapDisplay';

import promo1 from '@/assets/images/promo1.png';
import promo2 from '@/assets/images/promo2.png';
import promo3 from '@/assets/images/promo3.png';
import promo4 from '@/assets/images/promo4.png';

const BANNER_IMAGES = [
  { src: promo1.src, alt: '배너1' },
  { src: promo2.src, alt: '배너2' },
  { src: promo3.src, alt: '배너3' },
  { src: promo4.src, alt: '배너4' },
];

export default function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <div className={styles.container} ref={emblaRef}>
      <div className={styles.carousel}>
        {BANNER_IMAGES.map((item, index) => (
          <div key={index} className={styles.slide}>
            <Image className={styles.img} src={item.src} alt={item.alt} fill />
          </div>
        ))}
      </div>
      <div className={styles.snap}>
        {selectedSnap + 1} / {snapCount}
      </div>
    </div>
  );
}
