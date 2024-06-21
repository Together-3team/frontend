import Card, { ProductInfo } from '@/components/common/Card';
import Button from '@/components/common/Button';

import styles from './reviewCard.module.scss';

interface ReviewCardProps {
  productInfo: ProductInfo;
  onClick: () => void;
}

export default function ReviewCard({ productInfo, onClick }: ReviewCardProps) {
  return (
    <div className={styles.reviewCardArea}>
      <div className={styles.reviewCardLayout}>
        <Card productInfo={productInfo} direction="row" size="miniImage" />
        <div className={styles.reviewCardButton}>
          <Button size="large" backgroundColor="$color-white-pink" onClick={onClick}>
            리뷰 쓰기
          </Button>
        </div>
        <hr className={styles.updownBorder} />
      </div>
    </div>
  );
}
