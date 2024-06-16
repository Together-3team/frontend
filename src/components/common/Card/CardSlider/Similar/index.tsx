import styles from './CardSliderSimilar.module.scss';
import CardSlider from '@/components/common/Card/CardSlider/Base';
import rectangleImg from '@/assets/images/rectangle.png';
import Card from '@/components/common/Card';

const PRODUCT = {
  productId: 2,
  title: '진짜 육포입니다람쥐이이이이이이이이이',
  thumbNailImage: rectangleImg.src,
  originalPrice: 12000,
  price: 10800,
  starRating: 4.5,
  reviewCount: 200,
  stock: 3,
} as const;

export default function CardSliderSimilar() {
  /**
   * @TODO 리액트쿼리 추가
   */

  return (
    <CardSlider.Root>
      <CardSlider.Header>
        <CardSlider.Title>비슷한 상품</CardSlider.Title>
      </CardSlider.Header>
      <CardSlider.List>
        {Array(8)
          .fill(PRODUCT)
          .map((product, index) => (
            <li key={index}>
              <Card productInfo={product} size="big" isZzim />
            </li>
          ))}
      </CardSlider.List>
    </CardSlider.Root>
  );
}
