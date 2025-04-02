import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  Link,
  IconButton,
  CardMedia,
  CardActions,
  Button,
  useTheme,
  Avatar,
  Chip,
  useMediaQuery,
} from '@mui/material';
import {
  People as PeopleIcon,
  EventNote as AttendanceIcon,
  Science as EquipmentIcon,
  Warning as WarningIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Person as PersonIcon,
  Inventory as InventoryIcon,
  Assignment as AssignmentIcon,
  Event as EventIcon,
  MoreVert as MoreVertIcon,
  Room as RoomIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/Footer';

const StatCard = ({ title, value, icon, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            backgroundColor: `${color}20`,
            borderRadius: '50%',
            p: 1,
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" component="div" sx={{ color }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

const EventCard = ({ title, date, time, location, image, description }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="img"
      height="200"
      image={image}
      alt={title}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <CalendarIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <TimeIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="body2" color="text.secondary">
          {time}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <LocationIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Learn More
      </Button>
      <Button size="small" color="primary">
        Register
      </Button>
    </CardActions>
  </Card>
);

const UpcomingEvents = () => {
  const theme = useTheme();
  
  const events = [
    {
      id: 1,
      title: 'Chemistry Lab Experiment',
      type: 'Lab Session',
      date: 'Today',
      time: '10:00 AM - 12:00 PM',
      location: 'Lab Room 101',
      instructor: 'Dr. Smith',
      participants: 24,
      color: theme.palette.primary.main,
      icon: <EventIcon />,
    },
    {
      id: 2,
      title: 'Biology Practical',
      type: 'Practical',
      date: 'Tomorrow',
      time: '2:00 PM - 4:00 PM',
      location: 'Lab Room 203',
      instructor: 'Dr. Johnson',
      participants: 18,
      color: theme.palette.success.main,
      icon: <EventIcon />,
    },
    {
      id: 3,
      title: 'Lab Equipment Training',
      type: 'Training',
      date: 'Apr 15, 2024',
      time: '11:00 AM - 1:00 PM',
      location: 'Training Room A',
      instructor: 'Prof. Williams',
      participants: 15,
      color: theme.palette.warning.main,
      icon: <EventIcon />,
    },
    {
      id: 4,
      title: 'Physics Lab Test',
      type: 'Assessment',
      date: 'Apr 16, 2024',
      time: '9:00 AM - 11:00 AM',
      location: 'Lab Room 302',
      instructor: 'Dr. Brown',
      participants: 30,
      color: theme.palette.error.main,
      icon: <AssignmentIcon />,
    },
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 3 
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Upcoming Events
          </Typography>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {events.map((event) => (
            <Box key={event.id}>
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                p: 2, 
                bgcolor: 'background.default',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'action.hover',
                  cursor: 'pointer',
                }
              }}>
                <Avatar 
    sx={{
                    bgcolor: `${event.color}15`,
                    color: event.color,
                    width: 56,
                    height: 56
                  }}
                >
                  {event.icon}
                </Avatar>

                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        {event.title}
                      </Typography>
                      <Chip 
                        label={event.type} 
                        size="small" 
              sx={{
                          bgcolor: `${event.color}15`,
                          color: event.color,
                          fontWeight: 'medium',
                          fontSize: '0.75rem'
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: event.date.toLowerCase() === 'today' ? 'success.main' : 'text.secondary',
                        fontWeight: event.date.toLowerCase() === 'today' ? 'bold' : 'regular'
                      }}
                    >
                      {event.date}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <TimeIcon sx={{ fontSize: '0.875rem', color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {event.time}
            </Typography>
          </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationIcon sx={{ fontSize: '0.875rem', color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
                        {event.location}
          </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <PersonIcon sx={{ fontSize: '0.875rem', color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {event.instructor}
          </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <GroupIcon sx={{ fontSize: '0.875rem', color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {event.participants} students
          </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {event.id !== events.length && <Divider sx={{ my: 1 }} />}
            </Box>
          ))}
          </Box>
      </CardContent>
    </Card>
  );
};

const ImageSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=400&fit=crop',
      title: 'Advanced Laboratory Equipment',
      description: 'State-of-the-art facilities for scientific research',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&h=400&fit=crop',
      title: 'Student Research Programs',
      description: 'Hands-on experience with cutting-edge technology',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1200&h=400&fit=crop',
      title: 'Modern Lab Facilities',
      description: 'Equipped with the latest scientific instruments',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop',
      title: 'Safety First',
      description: 'Following strict safety protocols in all procedures',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: !isMobile,
    adaptiveHeight: true,
    customPaging: (i) => (
      <Box
        sx={{
          width: 30,
          height: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': {
            backgroundColor: 'white',
          },
        }}
      />
    ),
  };

  return (
    <Box
      sx={{
        '.slick-slider': {
          '& .slick-dots': {
            bottom: 20,
            '& li': {
              mx: 1,
              '&.slick-active button:before': {
                color: 'primary.main',
              },
            },
          },
          '& .slick-prev, & .slick-next': {
            zIndex: 1,
            width: 40,
            height: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'white',
            },
            '&::before': {
              color: 'primary.main',
            },
          },
          '& .slick-prev': {
            left: 20,
          },
          '& .slick-next': {
            right: 20,
          },
        },
      }}
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.id} sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                width: '100%',
                height: { xs: 200, sm: 300, md: 400 },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                borderRadius: '0 0 8px 8px',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                {slide.description}
      </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
  </Box>
);
};

const Dashboard = () => {
  const theme = useTheme();

  const stats = [
    {
      title: 'Total Students',
      value: '256',
      icon: <PersonIcon sx={{ color: '#1976d2' }} />,
      color: '#1976d2',
    },
    {
      title: 'Active Students',
      value: '125',
      icon: <InventoryIcon sx={{ color: '#2e7d32' }} />,
      color: '#2e7d32',
    },
    {
      title: 'Equipment',
      value: '89',
      icon: <EquipmentIcon sx={{ color: '#ed6c02' }} />,
      color: '#ed6c02',
    },
    {
      title: 'Reports',
      value: '24',
      icon: <AssignmentIcon sx={{ color: '#d32f2f' }} />,
      color: '#d32f2f',
    },
  ];

  const recentActivities = [
    { time: '10:30 AM', text: 'John Doe checked out Microscope #5' },
    { time: '09:15 AM', text: 'Sarah Smith completed Lab Safety Training' },
    { time: '08:45 AM', text: 'New equipment calibration completed' },
    { time: '08:00 AM', text: 'Daily equipment inspection completed' },
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

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Modern Laboratory',
    },
    {
      url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Research Facility',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Student Research',
    },
  ];

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      {/* Main Content */}
      <Box sx={{ 
        p: 3,
        pt: { xs: 10, sm: 11 },
        backgroundColor: '#f5f5f5',
        flexGrow: 1, // This ensures the content takes available space
      }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          {/* Image Slider */}
          <Grid item xs={12}>
            <Card sx={{ mb: 3, overflow: 'hidden' }}>
              <CardContent sx={{ p: 0 }}>
                <ImageSlider />
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Stats */}
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Students</Typography>
                <Typography variant="h3">256</Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Active Students</Typography>
                <Typography variant="h3">124</Typography>
              </CardContent>
            </Card>
            </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Equipment</Typography>
                <Typography variant="h3">89</Typography>
              </CardContent>
            </Card>
        </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Reports</Typography>
                <Typography variant="h3">24</Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Add the Upcoming Events section */}
          <Grid item xs={12}>
            <UpcomingEvents />
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Dashboard; 