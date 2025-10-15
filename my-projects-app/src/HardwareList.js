import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

export default function HardwareList({ items = [] }) {
  return (
    <>
      <Typography variant="subtitle2">Hardware Checked Out</Typography>
      <List dense>
        {items.map((it, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={`${it.name} — ${it.qty}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
