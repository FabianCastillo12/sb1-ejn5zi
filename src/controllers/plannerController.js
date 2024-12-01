const generateSchedule = async (req, res) => {
  try {
    const { availableStart, availableEnd, tasks } = req.body;
    
    // Here you would implement the actual schedule generation logic
    const schedule = tasks.map((task, index) => {
      const startTime = new Date(`2023-01-01 ${availableStart}`);
      startTime.setMinutes(startTime.getMinutes() + (index * 60));
      
      const endTime = new Date(startTime);
      endTime.setMinutes(endTime.getMinutes() + task.duerationMinutes);

      return {
        task: task.task,
        start: startTime.toTimeString().slice(0, 5),
        end: endTime.toTimeString().slice(0, 5),
        priority: task.priority
      };
    });

    res.json({
      message: "Success",
      data: schedule
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating schedule", error: error.message });
  }
};

module.exports = {
  generateSchedule
};