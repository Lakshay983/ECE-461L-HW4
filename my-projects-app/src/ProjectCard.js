import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  Box,
} from '@mui/material';

export default function ProjectCard({
  project,
  onToggleJoin,
  onCheckout,
  onCheckin,
}) {
  const [qty1, setQty1] = useState('');
  const [qty2, setQty2] = useState('');

  const { id, name, description, joined, hardware } = project;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {description}
        </Typography>

        {/* HWSet1 Section */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1">HWSet 1</Typography>
          <Typography variant="body2">
            Available: {hardware.HWSet1.available - hardware.HWSet1.checkedOut} | Checked Out:{' '}
            {hardware.HWSet1.checkedOut}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <TextField
              size="small"
              label="Qty"
              type="number"
              value={qty1}
              onChange={(e) => setQty1(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => {
                onCheckout(id, 'HWSet1', Number(qty1));
                setQty1('');
              }}
            >
              Check Out
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                onCheckin(id, 'HWSet1', Number(qty1));
                setQty1('');
              }}
            >
              Check In
            </Button>
          </Box>
        </Box>

        {/* HWSet2 Section */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1">HWSet 2</Typography>
          <Typography variant="body2">
            Available: {hardware.HWSet2.available - hardware.HWSet2.checkedOut} | Checked Out:{' '}
            {hardware.HWSet2.checkedOut}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <TextField
              size="small"
              label="Qty"
              type="number"
              value={qty2}
              onChange={(e) => setQty2(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => {
                onCheckout(id, 'HWSet2', Number(qty2));
                setQty2('');
              }}
            >
              Check Out
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                onCheckin(id, 'HWSet2', Number(qty2));
                setQty2('');
              }}
            >
              Check In
            </Button>
          </Box>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant={joined ? 'outlined' : 'contained'}
          onClick={onToggleJoin}
        >
          {joined ? 'Leave Project' : 'Join Project'}
        </Button>
      </CardActions>
    </Card>
  );
}
