import React, { useState, useEffect } from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBarTeacher from "../dashboardMain/components/AppAppBarTeacher";
import Footer from "../dashboardMain/components/Footer";
import { useParams } from "react-router-dom";

const AdvancedTeachingPlanForm = () => {
  const [courseName, setCourseName] = useState("");
  const [unitsInput, setUnitsInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [detailedSyllabus, setDetailedSyllabus] = useState(null);
  const [dynamicSchedule, setDynamicSchedule] = useState(null);
  const [revisedSchedule, setRevisedSchedule] = useState(null);
  const [error, setError] = useState("");
  const [completedUnits, setCompletedUnits] = useState({});
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(null); // Track the selected unit for completion
  const [completionDate, setCompletionDate] = useState(null); // Track the selected completion date

  const { id } = useParams();

  // Fetch course details and units on component mount
  useEffect(() => {
    const fetchCourseNameAndUnits = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/course-details/${id}`);
        if (response.data.success) {
          setCourseName(response.data.course.c_name);
          const units = response.data.units.map((unit) => unit.name).join(", ");
          setUnitsInput(units);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError("Error fetching course name and units: " + err.message);
      }
    };

    fetchCourseNameAndUnits();
  }, [id]);

  // Generate detailed syllabus
  const handleGenerateSyllabus = async (e) => {
    e.preventDefault();
    setError("");
    setDetailedSyllabus(null);
    setDynamicSchedule(null);
    setRevisedSchedule(null);
    setCompletedUnits({});
    try {
      const units = unitsInput.split(",").map((u) => u.trim());
      const response = await axios.post("http://localhost:4000/api/teaching-plan/generate-detailed-syllabus", {
        courseName,
        units,
      });
      if (response.data.success) {
        setDetailedSyllabus(response.data.syllabus);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Error generating detailed syllabus: " + err.message);
    }
  };

  // Generate dynamic schedule
  const handleGenerateSchedule = async (e) => {
    e.preventDefault();
    setError("");
    if (!detailedSyllabus) {
      setError("Please generate the detailed syllabus first.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/teaching-plan/generate-dynamic-schedule", {
        syllabus: detailedSyllabus,
        startDate,
        endDate,
      });
      if (response.data.success) {
        setDynamicSchedule(response.data.schedule);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Error generating dynamic schedule: " + err.message);
    }
  };

  // Handle unit completion
  const handleUnitCompletion = async (unitIndex) => {
    setSelectedUnitIndex(unitIndex); // Set the selected unit index
  };

  // Submit completion date
  const handleCompletionDateSubmit = async () => {
    if (!completionDate) {
      setError("Please select a completion date.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/teaching-plan/update-progress", {
        schedule: dynamicSchedule,
        completedUnitIndex: selectedUnitIndex,
        completionDate: completionDate.toISOString().split("T")[0], // Format date as YYYY-MM-DD
        overallEnd: endDate,
      });
      if (response.data.success) {
        setRevisedSchedule(response.data.revisedSchedule);
        setCompletedUnits((prev) => ({ ...prev, [selectedUnitIndex]: completionDate.toISOString().split("T")[0] }));
        setCompletionDate(null); // Reset the date picker
        setSelectedUnitIndex(null); // Reset the selected unit index
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Error updating progress: " + err.message);
    }
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppAppBarTeacher />
      <br /><br /><br /><br />
      <br /><br /><br /><br />

      <Container maxWidth="md">
        {/* Heading with animation */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            Advanced Teaching Plan Generator
          </Typography>
        </motion.div>

        {/* Form Section */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
          <Card sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 }, p: 3 }}>
            <form onSubmit={handleGenerateSyllabus}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Course Name"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Course Units (comma-separated)"
                    value={unitsInput}
                    onChange={(e) => setUnitsInput(e.target.value)}
                    placeholder="e.g., Algebra, Geometry, Calculus, Statistics"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#FF1493" } }}>
                    Generate Detailed Syllabus
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </motion.div>

        {error && (
          <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {/* Syllabus Section */}
        {detailedSyllabus && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 }, mt: 3, p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Detailed Syllabus
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Unit</TableCell>
                      <TableCell>Difficulty</TableCell>
                      <TableCell>Subtopics (Estimated Hours)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {detailedSyllabus.map((unit, index) => (
                      <TableRow key={index}>
                        <TableCell>{unit.unit}</TableCell>
                        <TableCell>{unit.difficulty}</TableCell>
                        <TableCell>
                          {unit.subtopics.map((sub, idx) => (
                            <div key={idx}>
                              {sub.name} ({sub.hours} hrs)
                            </div>
                          ))}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                onClick={handleGenerateSchedule}
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#FF1493" }, mt: 2 }}
              >
                Generate Dynamic Schedule
              </Button>
            </Card>
          </motion.div>
        )}

        {/* Dynamic Schedule Section */}
        {dynamicSchedule && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 }, mt: 3, p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Dynamic Teaching Schedule
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Unit</TableCell>
                      <TableCell>Difficulty</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>End Date</TableCell>
                      <TableCell>Total Days</TableCell>
                      <TableCell>Estimated Hours</TableCell>
                      <TableCell>Completion</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dynamicSchedule.map((unit, index) => (
                      <TableRow key={index}>
                        <TableCell>{unit.unit}</TableCell>
                        <TableCell>{unit.difficulty}</TableCell>
                        <TableCell>{unit.startDate}</TableCell>
                        <TableCell>{unit.endDate}</TableCell>
                        <TableCell>{unit.totalDays}</TableCell>
                        <TableCell>{unit.estimatedHours}</TableCell>
                        <TableCell>
                          {completedUnits[index] ? (
                            <span>Completed on {completedUnits[index]}</span>
                          ) : (
                            <>
                              <Button
                                variant="outlined"
                                onClick={() => handleUnitCompletion(index)}
                              >
                                Mark as Complete
                              </Button>
                              {selectedUnitIndex === index && (
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                  <DatePicker
                                    label="Completion Date"
                                    value={completionDate}
                                    onChange={(newValue) => setCompletionDate(newValue)}
                                    renderInput={(params) => <TextField {...params} sx={{ mt: 2 }} />}
                                  />
                                  <Button
                                    variant="contained"
                                    onClick={handleCompletionDateSubmit}
                                    sx={{ mt: 2 }}
                                  >
                                    Submit
                                  </Button>
                                </LocalizationProvider>
                              )}
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </motion.div>
        )}

        {/* Revised Schedule Section */}
        {revisedSchedule && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 }, mt: 3, p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Revised Schedule for Remaining Units
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Unit</TableCell>
                      <TableCell>Difficulty</TableCell>
                      <TableCell>New Start Date</TableCell>
                      <TableCell>New End Date</TableCell>
                      <TableCell>Total Days</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {revisedSchedule.map((unit, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{unit.unit}</TableCell>
                        <TableCell>{unit.difficulty}</TableCell>
                        <TableCell>{unit.startDate}</TableCell>
                        <TableCell>{unit.endDate}</TableCell>
                        <TableCell>{unit.totalDays}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </motion.div>
        )}
      </Container>

      <br /><br /><br /><br />
      <Footer />
    </AppTheme>
  );
};

export default AdvancedTeachingPlanForm;