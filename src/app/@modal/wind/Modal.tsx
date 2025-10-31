'use client';
import { useRouter } from 'next/navigation';
import React, { CSSProperties } from 'react';
const styles: CSSProperties = {
  position: 'fixed',
  right: 20,
  top: 20,
  background: 'gray',
  width: 300,
  height: 300,
  color: 'red',
  border: '1px solid black',
};

const Modal = () => {
  const route = useRouter();
  return (
    <div style={styles}>
      <span>Я модальное модальное окно</span>

      <button
        onClick={() => {
          route.back();
        }}
      >
        Закрыть
      </button>
    </div>
  );
};

export default Modal;
