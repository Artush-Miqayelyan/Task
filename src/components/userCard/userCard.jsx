import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';


import styles from './userCard.module.css'

export default function BasicCard(userInfo) {
  return (
    <Card className={styles.userCard}>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={`${userInfo.Avatar}`}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div className={styles.userInfoField}>{userInfo.username}</div>
        <div className={styles.userInfoField}>{` Created Date: ${userInfo.createdDate}`}</div>
        <div className={styles.userInfoField}>{` Email: ${userInfo.email}`}</div>
        <div className={styles.userInfoField}>{` Location: ${userInfo.username}`}</div>
        <div className={styles.userInfoField}>{` Role: ${userInfo.username}`}</div>
      </CardContent>
    </Card>
  );
}