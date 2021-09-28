const TestResult = require("./test_result.model");
const mongoose = require('mongoose');
const createError = require("http-errors");





exports.createTestResult = (req, res, next) => {
   
    const testResult = new TestResult({
      _id: new mongoose.Types.ObjectId(),
      correct_ans : req.body.correct_ans,
      incorrect_ans : req.body.incorrect_ans,
      unanswered : req.body.unanswered,
      totalquestion : req.body.totalquestion,
      score : parseInt(req.body.correct_ans) / parseInt(req.body.totalquestion) * 100
    })
    testResult.save()
      .then((data) => {
        res.status(201).json({
          statusCode: 201,
          message: "Created Successfully",
          data: data
        });
      }).catch(err => { next(err) });
  };