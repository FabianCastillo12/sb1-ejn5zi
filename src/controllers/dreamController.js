const analyzeDream = async (req, res) => {
  try {
    const { blueExposurHours, exerciseMinute, ciclos, eatLastTwoHours } = req.body;
    
    // Here you would implement the actual dream analysis logic
    const analysis = {
      quality: "Good",
      duration: "8 hours",
      ciclos: ciclos,
      deepSleep: "2 hours",
      lightSleep: "5 hours",
      remSleep: "1 hour",
      awake: "30 minutes"
    };

    const recommendations = {
      recommendations: [
        {
          recommendation: "Do not eat 2 hours before going to bed"
        },
        {
          recommendation: "Do not exercise 2 hours before going to bed"
        }
      ]
    };

    res.json({
      message: "Success",
      data: [analysis, recommendations]
    });
  } catch (error) {
    res.status(500).json({ message: "Error analyzing dream", error: error.message });
  }
};

module.exports = {
  analyzeDream
};