import React, { useState } from 'react';
import styles from './Cart.module.scss';
import Card from '@/components/cart/Card';
import { isSchema } from 'yup';

export default function Cart() {
  // 더미 데이터
  const initialProducts = [
    { id: 1, productTitle: '강아지 간식 27종', option: '강아지 독 리얼큐브 소고기 300g', productCost: '11800원' },
    { id: 2, productTitle: '강아지 간식 27종', option: '강아지 독 리얼큐브 소고기 500g', productCost: '20000원' },
    { id: 3, productTitle: '고양이 간식 27종', option: '강아지 츄르 5스틱g', productCost: '11000원' },
  ];

  const [products, setProducts] = useState(initialProducts.map(product => ({ ...product, isChecked: true })));
  const [selectAll, setSelectAll] = useState(true); // 전체 체크 상태

  // selectAll 상태 반전
  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    const updatedProducts = products.map(product => ({
      ...product,
      isChecked: !selectAll,
    }));

    setProducts(updatedProducts);
  };

  // 개별 제품 체크박스 클릭 시 해당 제품 선택 상태 변경
  const handleProductCheck = (id: number) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, isChecked: !product.isChecked } : product
    );

    setProducts(updatedProducts);

    // 모든 제품의 선택 상태 확인
    const allChecked = updatedProducts.every(product => product.isChecked);
    setSelectAll(allChecked);
  };

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.totalCheckbox}>
          <input type="checkbox" name="totalCheck" checked={selectAll} onChange={handleSelectAll} />
          <div className={styles.totalNumber}>전체 {products.length}개</div>
        </div>
        {products?.map((product, index) => (
          <Card
            key={product.id}
            productTitle={product.productTitle}
            option={product.option}
            productCost={product.productCost}
            isChecked={product.isChecked}
            onCheck={() => handleProductCheck(product.id)}
          />
        ))}
      </div>
    </>
  );
}
