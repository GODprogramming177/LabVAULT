import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  Group as GroupIcon,
  Science as ScienceIcon,
} from '@mui/icons-material';
import Footer from '../components/Footer';

const Reports = () => {
  const [reportType, setReportType] = useState('attendance');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: '',
  });

  const attendanceData = [
    {
      date: '2024-03-31',
      totalStudents: 50,
      present: 45,
      absent: 5,
      percentage: '90%',
    },
    {
      date: '2024-03-30',
      totalStudents: 50,
      present: 42,
      absent: 8,
      percentage: '84%',
    },
    // Add more sample data as needed
  ];

  const equipmentUsageData = [
    {
      equipment: 'Microscope #1',
      totalHours: 120,
      users: 15,
      maintenanceCount: 2,
    },
    {
      equipment: 'Centrifuge #3',
      totalHours: 85,
      users: 12,
      maintenanceCount: 1,
    },
    // Add more sample data as needed
  ];

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDateRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerateReport = () => {
    // Report generation logic here
    console.log('Generating report:', { reportType, dateRange });
  };

  const handleDownloadReport = () => {
    // Download report logic here
    console.log('Downloading report:', { reportType, dateRange });
  };

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Box sx={{ 
        p: 3,
        pt: { xs: 10, sm: 11 },
        backgroundColor: '#f5f5f5',
        flexGrow: 1,
      }}>
        <Box sx={{ 
          maxWidth: 'xl',
          mx: 'auto',
          mb: 4 
        }}>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              mb: 4,
              fontWeight: 'bold',
              color: 'text.primary'
            }}
          >
            Reports & Analytics
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AssessmentIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6">Attendance Rate</Typography>
                  </Box>
                  <Typography variant="h4" color="primary">
                    92%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Average attendance for the last 30 days
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TrendingUpIcon sx={{ mr: 1, color: 'success.main' }} />
                    <Typography variant="h6">Equipment Usage</Typography>
                  </Box>
                  <Typography variant="h4" color="success.main">
                    85%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Average equipment utilization rate
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GroupIcon sx={{ mr: 1, color: 'info.main' }} />
                    <Typography variant="h6">Active Students</Typography>
                  </Box>
                  <Typography variant="h4" color="info.main">
                    150
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Currently registered students
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ 
                p: 3,
                borderRadius: 2,
                boxShadow: 2
              }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel>Report Type</InputLabel>
                    <Select
                      value={reportType}
                      label="Report Type"
                      onChange={handleReportTypeChange}
                    >
                      <MenuItem value="attendance">Attendance Report</MenuItem>
                      <MenuItem value="equipment">Equipment Usage Report</MenuItem>
                      <MenuItem value="maintenance">Maintenance Report</MenuItem>
                      <MenuItem value="student">Student Performance Report</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="Start Date"
                    type="date"
                    name="start"
                    value={dateRange.start}
                    onChange={handleDateChange}
                    InputLabelProps={{ shrink: true }}
                  />

                  <TextField
                    label="End Date"
                    type="date"
                    name="end"
                    value={dateRange.end}
                    onChange={handleDateChange}
                    InputLabelProps={{ shrink: true }}
                  />

                  <Button
                    variant="contained"
                    startIcon={<AssessmentIcon />}
                    onClick={handleGenerateReport}
                  >
                    Generate Report
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={handleDownloadReport}
                  >
                    Download
                  </Button>
                </Box>

                {reportType === 'attendance' && (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Total Students</TableCell>
                          <TableCell>Present</TableCell>
                          <TableCell>Absent</TableCell>
                          <TableCell>Attendance Rate</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {attendanceData.map((row) => (
                          <TableRow key={row.date}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.totalStudents}</TableCell>
                            <TableCell>{row.present}</TableCell>
                            <TableCell>{row.absent}</TableCell>
                            <TableCell>{row.percentage}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}

                {reportType === 'equipment' && (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Equipment</TableCell>
                          <TableCell>Total Hours Used</TableCell>
                          <TableCell>Number of Users</TableCell>
                          <TableCell>Maintenance Count</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {equipmentUsageData.map((row) => (
                          <TableRow key={row.equipment}>
                            <TableCell>{row.equipment}</TableCell>
                            <TableCell>{row.totalHours}</TableCell>
                            <TableCell>{row.users}</TableCell>
                            <TableCell>{row.maintenanceCount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Reports; 