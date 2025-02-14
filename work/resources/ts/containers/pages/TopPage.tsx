import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { Top } from '../organisms/Top';
import { About } from '../organisms/About';
import { Spinner } from '../../components/molecules/Spinner';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const TopPage: React.FC = () => {
  /**
   * { api通信中のスピナー表示のon/off管理 }
   * cssの定義
   * { ログインユーザーの情報, ゲストログイン機能 }
   * react-router-dom URLルーティングに使う
   */
  const { progress } = useContext<any>(FeedbackContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { authUserState } = useContext<any>(AuthContext);
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Top
          registerOnClick={() => {
            history.push('/register');
          }}
          boardOnClick={() => {
            history.push(`/${authUserState.name}/home`);
          }}
        />
        <About className={classes.sub_container} />
      </Container>
      <Footer />

      <Spinner open={progress} />
    </>
  );
};
