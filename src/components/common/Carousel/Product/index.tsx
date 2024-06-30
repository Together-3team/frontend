import { SyntheticEvent } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { useSelectedSnapDisplay } from '@/hooks/useSelectedSnapDisplay';
import Share from '@/assets/svgs/btn-share.svg';
import useModal from '@/hooks/useModal';
import CenterModal from '@/components/common/Modal/Base/CenterModal';
import ShareButton from '@/components/common/Button/Share';
import Mascot from '@/assets/svgs/mascot-share-link.svg';
import IconX from '@/assets/svgs/ic-x.svg';
import styles from './ProductCarousel.module.scss';
import rectangleImg from '@/assets/images/rectangle.png';

interface ProductCarouselProps {
  images: string;
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const { modalOpen, handleModalOpen, handleModalClose } = useModal();
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const items = images !== '' ? images.split(',') : [rectangleImg.src, rectangleImg.src];

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = rectangleImg.src;
  };

  return (
    <>
      <div className={styles.container} ref={emblaRef}>
        <div className={styles.carousel}>
          {items.map((item, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={item}
                alt={'productImages'}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 430px) 100vw, 430px"
                priority
                onError={handleImgError}
              />
            </div>
          ))}
        </div>
        <div className={styles.snap}>
          {selectedSnap + 1} / {snapCount}
        </div>
        <button type="button" className={styles.share} onClick={handleModalOpen}>
          <Share width={40} height={40} viewBox="0 0 44 44" />
        </button>
      </div>
      <CenterModal isOpen={modalOpen} onClose={handleModalClose}>
        <div className={styles.modal}>
          <button type="button" className={styles.iconX} onClick={handleModalClose}>
            <IconX />
          </button>
          <Mascot />
          <div className={styles.modalContent}>
            <div>
              <p className={styles.modalTitle}>집사 친구와 함께</p>
              <p className={styles.modalTitle}>더 저렴하게 구매하세요!</p>
            </div>
            <div>
              <p className={styles.modalDescription}>링크를 통해 친구에게 공유하고</p>
              <p className={styles.modalDescription}>더 빨리 공동구매를 성사시켜요.</p>
            </div>
          </div>
          <ShareButton />
        </div>
      </CenterModal>
    </>
  );
}
