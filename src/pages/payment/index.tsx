import React, { useEffect, useState } from 'react';
import styles from './Payment.module.scss';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { nanoid } from 'nanoid';
import Button from '@/components/common/Button';
import PaymentAgree from '@/components/payment/PaymentAgree';
import TotalPay from '@/components/payment/TotalPay';
import Card from '@/components/payment/Card';
import Header from '@/components/common/Layout/Header';
import BottomModal from '@/components/common/Modal/Base/BottomModal';
import Input from '@/components/common/Input';
import BackButton from '@/components/common/Button/BackButton';
import clock from '@/assets/images/clock.png';
import Image from 'next/image';
import { GetServerSidePropsContext } from 'next';
import { DeliveryInfo } from '@/types/components/delivery';
import { httpClient } from '@/apis/httpClient';
import OrderDeliveryCard from '@/components/order/OrderDeliveryCard';
import { useRouter } from 'next/router';
import { CartData, Product } from '@/types/apis/product';
import { getCartData } from '@/queries/cartQueries';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Product as QueryProduct } from '@/types/apis/product';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const accessToken = context.req.cookies['accessToken'];
  if (!accessToken) {
    return {
      redirect: {
        destination: '/my',
        permanent: false,
      },
    };
  }

  let defaultDelivery;
  try {
    defaultDelivery = await httpClient().get<DeliveryInfo>(`/deliveries/default`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  } catch {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      defaultDelivery,
    },
  };
}

export default function Payment({ defaultDelivery }: { defaultDelivery: DeliveryInfo | undefined }) {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deliveryMessage, setDeliveryMessage] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [delivery, setDelivery] = useState(defaultDelivery);
  const router = useRouter();
  const queryClient = useQueryClient();
  const productList: QueryProduct[] = queryClient.getQueryData(['cartData']) || [];
  console.log(productList);
  const { data: selectedProducts } = useQuery({
    queryKey: ['cartData'],
    queryFn: () => getCartData(queryClient),
  });
  const groupBuyingId = productList[0].groupBuyingId ? productList[0].groupBuyingId : '';
  const clientKey = `${process.env.NEXT_PUBLIC_TOSS_PAYMENTS_SECRET_KEY}`;
  const orderId = nanoid(); // 주문 ID

  useEffect(() => {
    if (selectedProducts) {
      setProducts(selectedProducts);
    }
  }, [selectedProducts]);

  useEffect(() => {
    if (!selectedProducts || selectedProducts.length === 0) {
      router.push('/cart');
    }
  }, [selectedProducts, router]);

  const handlePayment = async () => {
    const firstProductTitle = products?.[0]?.productTitle || '';
    const remainingProductCount = (products?.length || 0) - 1;
    const orderName =
      remainingProductCount > 0 ? `${firstProductTitle} 외 ${remainingProductCount}건` : firstProductTitle;
    const selectedProductIds = products
      .map(product => {
        console.log(product);
        if (product.selectedProductId) {
          return product.selectedProductId;
        }
        return product.id;
      })
      .join(',');
    console.log(selectedProductIds);
    const deliveryMessageValue = deliveryMessage;
    sessionStorage.setItem('deliveryMessage', deliveryMessageValue);
    sessionStorage.setItem('selectedProductIds', selectedProductIds);
    delivery && sessionStorage.setItem('deliveryId', delivery.id.toString());
    const tossPayments = await loadTossPayments(clientKey);

    tossPayments.requestPayment('카드', {
      amount: totalPrice,
      orderId: orderId,
      orderName: orderName,
      successUrl: `${window.location.origin}/payment/paymentSuccess?gbi=${groupBuyingId}`,
      failUrl: `${window.location.origin}/payment/fail`,
    });
  };

  const totalPrice =
    selectedProducts?.reduce((total, product) => {
      return total + product.productCost * product.productNumber + product.combinationPrice * product.productNumber;
    }, 0) ?? 0;
  const formattedTotalPrice = totalPrice.toLocaleString('ko-KR');

  function calculateTotalOriginalPrice() {
    return products
      ? products.reduce(
          (total, product) =>
            total + product.originalCost * product.productNumber + product.combinationPrice * product.productNumber,
          0
        )
      : 0;
  }

  const totalOriginalPrice = calculateTotalOriginalPrice();
  const productCount = products ? products.length : 0;

  useEffect(() => {
    if (router.query['action'] !== 'done') {
      setIsModalOpen(true);
    }
  }, [router.query]);

  return (
    <div className={styles.payment}>
      <Header.Root className={styles.headerRoot}>
        <Header.Box>
          <Header.Left>
            <BackButton />
          </Header.Left>
          <Header.Center className={styles.headerName}>결제</Header.Center>
        </Header.Box>
      </Header.Root>
      <OrderDeliveryCard delivery={delivery} setDelivery={setDelivery} />
      <div className={styles.deliveryMessage}>
        <Input
          id="recipient"
          type="text"
          size="full"
          label="배송메시지"
          labelStyle={'label'}
          placeholder="예) 부재시 집 앞에 놔주세요"
          value={deliveryMessage}
          onChange={e => setDeliveryMessage(e.target.value)}
        />
      </div>
      <div className={styles.rectangle}></div>
      <div className={styles.orderProduct}>
        <div className={styles.orderTitle}>
          <div className={styles.howMany}>
            <div>주문 상품</div>
            <span className={styles.howManyCount}>{productCount}개</span>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
      {products?.map((product, index) => (
        <Card
          key={product.id}
          productTitle={product.productTitle}
          option={product.option}
          combinationPrice={product.combinationPrice}
          productCost={product.productCost}
          originalCost={product.originalCost}
          productNumber={product.productNumber}
          imageUrl={product.imageUrl}
          isLast={index === products.length - 1}
        />
      ))}
      <div className={styles.rectangle}></div>
      <TotalPay
        title="결제금액"
        totalPrice={totalPrice}
        totalOriginalPrice={totalOriginalPrice}
        productCount={productCount}
      />
      <div className={styles.rectangle}></div>
      <div id="payment-widget"></div>
      <div id="agreement"></div>
      <div className={styles.paymentAgree}>
        <PaymentAgree onCheckboxChange={setCheckboxChecked} />
        <div className={styles.paymentButton}>
          <Button
            size="large"
            backgroundColor="$color-pink-main"
            onClick={handlePayment}
            disabled={!checkboxChecked || !delivery}>
            {formattedTotalPrice}원 주문하기
          </Button>
        </div>
      </div>
      <BottomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.modalContent}>
          <Image className={styles.clockImg} src={clock} width={168} height={120} alt="clockImg" />
          <div className={styles.warning}>공동구매는 빨리 성사되지 않으면 취소될 수 있어요</div>
          <div className={styles.detailWarning}>
            24시간 내 공동구매 참여자가 없거나, <br />
            공동구매 성사 전에 품절되면 주문이 취소될 수 있어요.
          </div>
        </div>
        <Button size="large" backgroundColor="$color-gray-800" onClick={() => setIsModalOpen(false)}>
          이해했어요
        </Button>
      </BottomModal>
    </div>
  );
}
