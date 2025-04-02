import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
  Card,
  CardContent,
  CardActions,
  LinearProgress,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
} from '@mui/material';
import {
  Timeline as TimelineIcon,
  EventNote as AttendanceIcon,
  EmojiEvents as PerformanceIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
  Science as ScienceIcon,
  Assignment as AssignmentIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  PendingActions as PendingActionsIcon,
} from '@mui/icons-material';
import Footer from '../components/Footer';

const StudentDashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
  };

  const handleRegister = () => {
    // Here you would typically make an API call to register the student
    handleCloseDialog();
  };

  const performanceData = {
    overall: 85,
    attendance: 92,
    labWork: 88,
    assignments: 90,
  };

  const attendanceRecords = [
    { date: '2024-03-15', status: 'Present', subject: 'Chemistry Lab' },
    { date: '2024-03-14', status: 'Present', subject: 'Physics Lab' },
    { date: '2024-03-13', status: 'Absent', subject: 'Biology Lab' },
    { date: '2024-03-12', status: 'Present', subject: 'Chemistry Lab' },
    { date: '2024-03-11', status: 'Present', subject: 'Physics Lab' },
  ];

  const upcomingEvents = [
    {
      title: 'Lab Safety Training',
      date: 'Tomorrow',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Laboratory',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Comprehensive safety training session for all laboratory users. Learn about proper handling of equipment and emergency procedures.',
    },
    {
      title: 'Equipment Maintenance',
      date: 'Friday',
      time: '2:00 PM - 4:00 PM',
      location: 'Equipment Room',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Regular maintenance check for all laboratory equipment. Ensure optimal performance and safety standards.',
    },
    {
      title: 'Student Orientation',
      date: 'Next Monday',
      time: '9:00 AM - 11:00 AM',
      location: 'Conference Room',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Welcome session for new students. Introduction to laboratory facilities, rules, and available resources.',
    },
    {
      title: 'Research Workshop',
      date: 'Next Wednesday',
      time: '1:00 PM - 3:00 PM',
      location: 'Research Lab',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Advanced research techniques workshop. Learn about latest methodologies and equipment usage in modern research.',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Chemical Analysis of Water Samples',
      subject: 'Chemistry',
      status: 'Completed',
      grade: 'A',
      completionDate: '2024-03-10',
      description: 'Analysis of water samples from different sources using various chemical methods.',
      skills: ['Chemical Analysis', 'Lab Techniques', 'Data Analysis'],
    },
    {
      id: 2,
      title: 'Physics Lab Equipment Calibration',
      subject: 'Physics',
      status: 'In Progress',
      progress: 75,
      dueDate: '2024-03-25',
      description: 'Calibration of various physics lab equipment and documentation of procedures.',
      skills: ['Equipment Calibration', 'Technical Writing', 'Measurement'],
    },
    {
      id: 3,
      title: 'Biology Cell Culture Study',
      subject: 'Biology',
      status: 'Completed',
      grade: 'A+',
      completionDate: '2024-03-05',
      description: 'Study of cell culture techniques and their applications in research.',
      skills: ['Cell Culture', 'Microscopy', 'Research Methods'],
    },
    {
      id: 4,
      title: 'Environmental Impact Assessment',
      subject: 'Environmental Science',
      status: 'In Progress',
      progress: 60,
      dueDate: '2024-03-30',
      description: 'Assessment of environmental impact of laboratory practices and waste management.',
      skills: ['Environmental Analysis', 'Data Collection', 'Report Writing'],
    },
  ];

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, Student Name
        </Typography>

        {/* Performance Overview */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Performance Overview
              </Typography>
              <Box sx={{ mt: 2 }}>
                {Object.entries(performanceData).map(([key, value]) => (
                  <Box key={key} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {value}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={value}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Attendance Records */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recent Attendance
              </Typography>
              <List>
                {attendanceRecords.map((record, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        {record.status === 'Present' ? (
                          <CheckCircleIcon color="success" />
                        ) : (
                          <CloseIcon color="error" />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={record.subject}
                        secondary={`${record.date} - ${record.status}`}
                      />
                    </ListItem>
                    {index < attendanceRecords.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Projects Section */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          My Projects
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Chip
                      label={project.status}
                      color={project.status === 'Completed' ? 'success' : 'primary'}
                      size="small"
                    />
                  </Box>
                  <Typography color="text.secondary" gutterBottom>
                    {project.subject}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                  {project.status === 'Completed' ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleOutlineIcon color="success" />
                      <Typography variant="body2">
                        Completed on {project.completionDate} • Grade: {project.grade}
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PendingActionsIcon color="primary" />
                      <Typography variant="body2">
                        Due: {project.dueDate}
                      </Typography>
                    </Box>
                  )}
                  {project.status === 'In Progress' && (
                    <Box sx={{ mt: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Progress
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                  )}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                  {project.status === 'In Progress' && (
                    <Button size="small" color="primary">
                      Update Progress
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Upcoming Events */}
        <Typography variant="h5" gutterBottom>
          Upcoming Events
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2,
          justifyContent: 'space-between'
        }}>
          {upcomingEvents.map((event) => (
            <Box 
              key={event.title}
              sx={{ 
                flex: '1 1 280px',
                maxWidth: 'calc(25% - 16px)',
                minWidth: '280px'
              }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={event.image}
                  alt={event.title}
                  sx={{
                    height: 140,
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {event.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CalendarIcon sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2">{event.date}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TimeIcon sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2">{event.time}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationIcon sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2">{event.location}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleOpenDialog(event)}
                    disabled={event.registered}
                    fullWidth
                  >
                    {event.registered ? 'Registered' : 'Register'}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Registration Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Register for Event</DialogTitle>
          <DialogContent>
            {selectedEvent && (
              <>
                <Typography variant="h6" gutterBottom>
                  {selectedEvent.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {selectedEvent.description}
                </Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Confirm Registration"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleRegister} variant="contained" color="primary">
              Confirm Registration
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Footer />
    </Box>
  );
};

export default StudentDashboard; 