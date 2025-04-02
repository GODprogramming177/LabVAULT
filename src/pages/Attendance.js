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
} from '@mui/material';
import {
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';

const Attendance = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      studentId: 'STU001',
      name: 'John Doe',
      date: '2024-03-31',
      timeIn: '09:00 AM',
      timeOut: '11:00 AM',
      status: 'present',
    },
    {
      id: 2,
      studentId: 'STU002',
      name: 'Jane Smith',
      date: '2024-03-31',
      timeIn: '09:15 AM',
      timeOut: '11:30 AM',
      status: 'present',
    },
    // Add more sample data as needed
  ]);

  const [formData, setFormData] = useState({
    studentId: '',
    timeIn: '',
    timeOut: '',
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
    // Add attendance record logic here
    handleClose();
  };

  const getStatusChip = (status) => {
    const statusProps = {
      present: { color: 'success', icon: <CheckCircleIcon /> },
      absent: { color: 'error', icon: <CancelIcon /> },
    };

    return (
      <Chip
        icon={statusProps[status].icon}
        label={status.charAt(0).toUpperCase() + status.slice(1)}
        color={statusProps[status].color}
        size="small"
      />
    );
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Attendance
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<CalendarIcon />}
            onClick={() => {/* Calendar view logic */}}
          >
            Calendar View
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Mark Attendance
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Today's Attendance Summary
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Chip
                icon={<CheckCircleIcon />}
                label="Present: 45"
                color="success"
                variant="outlined"
              />
              <Chip
                icon={<CancelIcon />}
                label="Absent: 5"
                color="error"
                variant="outlined"
              />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time In</TableCell>
                  <TableCell>Time Out</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceData.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.studentId}</TableCell>
                    <TableCell>{record.name}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.timeIn}</TableCell>
                    <TableCell>{record.timeOut}</TableCell>
                    <TableCell>{getStatusChip(record.status)}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <CheckCircleIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <CancelIcon />
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
        <DialogTitle>Mark Attendance</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              label="Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Time In"
              name="timeIn"
              type="time"
              value={formData.timeIn}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Time Out"
              name="timeOut"
              type="time"
              value={formData.timeOut}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Mark Attendance
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Attendance; 