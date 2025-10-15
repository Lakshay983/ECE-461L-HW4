import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Container, Typography, Button } from '@mui/material';

// Each project now has HWSet1 and HWSet2 quantities.
const initialProjects = [
  {
    id: 1,
    name: 'Project Name 1',
    joined: false,
    hardware: {
      HWSet1: { available: 100, checkedOut: 0 },
      HWSet2: { available: 50, checkedOut: 0 },
    },
  },
  {
    id: 2,
    name: 'Project Name 2',
    joined: true,
    hardware: {
      HWSet1: { available: 80, checkedOut: 10 },
      HWSet2: { available: 30, checkedOut: 5 },
    },
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);

  // Toggle joining a project
  const toggleJoin = (id) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, joined: !p.joined } : p
      )
    );
  };

  // Check out hardware
  const handleCheckout = (id, setKey, amount) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const hw = { ...p.hardware };
        const target = hw[setKey];
        const totalAvailable =
          target.available - target.checkedOut;
        if (amount > 0 && totalAvailable >= amount) {
          target.checkedOut += amount;
        }
        return { ...p, hardware: hw };
      })
    );
  };

  // Check in hardware
  const handleCheckin = (id, setKey, amount) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const hw = { ...p.hardware };
        const target = hw[setKey];
        if (amount > 0 && target.checkedOut >= amount) {
          target.checkedOut -= amount;
        }
        return { ...p, hardware: hw };
      })
    );
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mb: 2 }}>
        Projects
      </Typography>

      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          project={p}
          onToggleJoin={() => toggleJoin(p.id)}
          onCheckout={handleCheckout}
          onCheckin={handleCheckin}
        />
      ))}

      <div style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          onClick={() =>
            alert('Add new project functionality can go here.')
          }
        >
          Create Project
        </Button>
      </div>
    </Container>
  );
}
