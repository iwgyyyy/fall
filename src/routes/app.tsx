import React from 'react';
import { Button, Space } from '@douyinfe/semi-ui';
import { useNavigate, Outlet } from 'react-router-dom';
import styles from './App.module.less';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.app}>
      <Space className={styles.space}>
        <Button onClick={() => navigate('home')} theme="solid" type="warning">home page</Button>
        <Button onClick={() => navigate('first-page')} theme="solid" type="primary">first page</Button>
        <Button onClick={() => navigate('second-page')} theme="solid" type="secondary">second page</Button>
        <Button onClick={() => navigate('third-page')} theme="solid" type="tertiary">third page</Button>
        <Button onClick={() => navigate('not-found-page')} theme="solid" type="danger">no page</Button>
      </Space>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
