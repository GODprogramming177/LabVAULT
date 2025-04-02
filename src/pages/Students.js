import React, { useState, useEffect } from 'react';
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
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

const Students = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      studentId: 'STU001',
      course: 'Biology',
      status: 'active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      studentId: 'STU002',
      course: 'Chemistry',
      status: 'active',
      email: 'jane.smith@example.com',
      phone: '098-765-4321',
    },
    // Add more sample data as needed
  ]);

  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    course: '',
    email: '',
    phone: '',
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
    // Add new student logic here
    handleClose();
  };

  const getStatusChip = (status) => {
    const statusProps = {
      active: { color: 'success', icon: <CheckCircleIcon /> },
      inactive: { color: 'error', icon: <CancelIcon /> },
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

  // Mobile view card component
  const StudentCard = ({ student }) => (
    <Card sx={{ mb: 2, width: '100%' }}>
      <CardContent>
        <Stack spacing={1}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
              {student.name}
            </Typography>
            {getStatusChip(student.status)}
          </Box>
          <Typography color="text.secondary">ID: {student.studentId}</Typography>
          <Typography color="text.secondary">Course: {student.course}</Typography>
          <Typography color="text.secondary">Email: {student.email}</Typography>
          <Typography color="text.secondary">Phone: {student.phone}</Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <IconButton size="small" color="primary">
              <EditIcon />
            </IconButton>
            <IconButton size="small" color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ 
      pt: { xs: 8, sm: 9 }, // Add padding top to account for fixed AppBar
      px: { xs: 2, sm: 3 },
      pb: 3,
      maxWidth: 'xl',
      mx: 'auto'
    }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: 2,
          mb: 3,
          mt: 2
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            fontWeight: 'bold'
          }}
        >
          Students
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
          fullWidth={isMobile}
          sx={{ 
            minWidth: { xs: '100%', sm: 'auto' },
            height: { xs: 45, sm: 40 }
          }}
        >
          Add Student
        </Button>
      </Box>

      {isMobile ? (
        <Box sx={{ 
          width: '100%',
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { 
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          }
        }}>
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </Box>
      ) : (
        <TableContainer 
          component={Paper}
          sx={{ 
            boxShadow: 2,
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Student ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.studentId}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>{getStatusChip(student.status)}</TableCell>
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
      )}

      <Dialog 
        open={open} 
        onClose={handleClose}
        fullScreen={isMobile}
        fullWidth
        maxWidth="sm"
        sx={{
          '& .MuiDialog-paper': {
            m: isMobile ? 0 : 2
          }
        }}
      >
        <DialogTitle>Add New Student</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Add Student
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Students; 