import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Chip,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Build as BuildIcon,
} from '@mui/icons-material';

const Equipment = () => {
  const [open, setOpen] = useState(false);
  const [equipment, setEquipment] = useState([
    {
      id: 1,
      name: 'Microscope #1',
      type: 'Optical',
      status: 'available',
      lastMaintenance: '2024-03-15',
      nextMaintenance: '2024-04-15',
      location: 'Lab A',
      assignedTo: null,
    },
    {
      id: 2,
      name: 'Centrifuge #3',
      type: 'Electromechanical',
      status: 'in_use',
      lastMaintenance: '2024-03-20',
      nextMaintenance: '2024-04-20',
      location: 'Lab B',
      assignedTo: 'John Doe',
    },
    // Add more sample data as needed
  ]);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    location: '',
    lastMaintenance: '',
    nextMaintenance: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Add equipment logic here
    handleClose();
  };

  const getStatusChip = (status) => {
    const statusProps = {
      available: { color: 'success', icon: <CheckCircleIcon /> },
      in_use: { color: 'warning', icon: <WarningIcon /> },
      maintenance: { color: 'error', icon: <BuildIcon /> },
    };

    return (
      <Chip
        icon={statusProps[status].icon}
        label={status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        color={statusProps[status].color}
        size="small"
      />
    );
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Equipment Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Add Equipment
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Equipment
              </Typography>
              <Typography variant="h4" color="primary">
                25
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                In Use
              </Typography>
              <Typography variant="h4" color="warning.main">
                12
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Maintenance Required
              </Typography>
              <Typography variant="h4" color="error">
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Maintenance</TableCell>
                  <TableCell>Next Maintenance</TableCell>
                  <TableCell>Assigned To</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {equipment.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{getStatusChip(item.status)}</TableCell>
                    <TableCell>{item.lastMaintenance}</TableCell>
                    <TableCell>{item.nextMaintenance}</TableCell>
                    <TableCell>{item.assignedTo || '-'}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Equipment</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              label="Equipment Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Last Maintenance"
              name="lastMaintenance"
              type="date"
              value={formData.lastMaintenance}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Next Maintenance"
              name="nextMaintenance"
              type="date"
              value={formData.nextMaintenance}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Add Equipment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Equipment; 