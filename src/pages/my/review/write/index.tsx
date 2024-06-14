import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Layout/Header';
import BackButton from '@/components/common/Button/BackButton';
import StarRating from '@/components/common/review/StarRating';
import Textarea from '@/components/common/review/Textarea';
import testImage from '@/assets/images/rectangle.png';
import styles from './WritePage.module.scss';

export default function WritePage() {
  const [rating, setRating] = useState(0);
  const [description, setDescriprion] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriprion(event.target.value);
  };

  const isBtnDisabled = rating === 0 || description.trim() === '';

  return (
    <div className={styles.writePageLayout}>
      <Header.Root>
        <Header.Box>
          <Header.Left>
            <BackButton />
          </Header.Left>
          <Header.Center className={styles.pageTitle}>리뷰 작성</Header.Center>
        </Header.Box>
      </Header.Root>
      <div>
        <div className={styles.productDataBox}>
          <Image className={styles.productImg} src={testImage} alt="상품 이미지" />
          <div className={styles.productData}>
            <p className={styles.productName}>호랑이 간식 27종</p>
            <p className={styles.productOption}>호랑이 독 리얼큐브 소고기 300g | 1개</p>
          </div>
        </div>
        <div className={styles.ratingBox}>
          <p className={styles.ratingQuestion}>전반적으로 어떠셨나요?</p>
          <StarRating editable rating={rating} onRate={setRating} />
        </div>
        <div className={styles.textareaBox}>
          <p className={styles.descriptionQuestion}>
            구체적으로 어떤 점이 좋았는지, 또는 어떤 점이 아쉬웠는지 작성해 주세요.
          </p>
          <Textarea
            className={styles.textareaStyle}
            placeholder={'리뷰를 작성해 주세요.'}
            value={description}
            onChange={handleChange}
          />
        </div>
        <button className={styles.reviewSaveBtn} disabled={isBtnDisabled}>
          저장
        </button>
      </div>
    </div>
  );
}