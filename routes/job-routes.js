const router = require("express").Router();
const Jobs = require("../models/jobs.js");

// router.post("/jobsSubmit", (req, res) => {
// .create(req.body)
//   .then(function(dbchangingMajors) {
//     res.json(dbchangingMajors);
//   })
//   .catch(function(err) {
//     // If an error occurs, send the error to the client
//     res.json(err);
//   });
// });



// Assuming this is from a POST request and the body of the
// request contained the JSON of the new "todo" item to be saved
router.post("/jobSubmit", (req, res) => {
  // console.log(req.body,'hello');
  let worker = new Job(req.body);
  worker.save((err, createdJobObject) => {
    console.log(err);
    if (err) {
      res.status(500).send(err);
    }
    // This createdTodoObject is the same one we saved, but after Mongo
    // added its additional properties like _id.
    res.status(200).send(createdJobObject);
  });
});
// router.get('/auth/user', (req, res)=>{
//   res.send('hi');
// });

router.get('/getJobs', (req, res)=>{
  Scholarship.find().exec((err, doc)=>{
    if(err){
      res.send(err);
    }
    else{
      res.send(doc);
    }
  })
});
// // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
// // Find the existing resource by ID
// router.post("/jobsUpdate", (req,res)=> {
// Scholarship.findById(req.params.jobsId, (err, jobs) => {
//   // Handle any possible database errors
//   if (err) {
//     res.status(500).send(err);
//   } else {
//     // Update each attribute with any possible attribute that may have been submitted in the body of the request
//     // If that attribute isn't in the request body, default back to whatever it was before.
//     jobs.company = req.body.company || jobs.company;
//     jobs.title = req.body.title || jobs.title;
//     jobs.salary = req.body.salary || jobs.salary;
//     jobs.next_action = req.body.next_action || jobs.next_action;
//     jobs.job_url = req.body.job_url || jobs.job_url
//     jobs.save((err, jobs) => {
//       if (err) {
//         res.status(500).send(err)
//       }
//       res.status(200).send(jobs);
//     });
//   }
// });
// });

// // The "todo" in this callback function represents the document that was found.
// // It allows you to pass a reference back to the client in case they need a reference for some reason.
// router.post("/jobsDelete", (req, res)=> {
// Scholarship.findByIdAndRemove(req.params.jobsId, (err, jobs) => {
//   // We'll create a simple object t o send back with a message and the id of the document that was removed
//   // You can really do this however you want, though.
//   let response = {
//     message: "Job information successfully deleted",
//     id: jobs._id
//   };
//   res.status(200).send(response);
// });
// });

// Need to determine best find by keyword request, and how to organize keywords. Cory wants a search function. I think a cloud would be more practical. We'll also need to somehow pass requests from the HTML to the CRUD on the backend, and I'm not entirely sure how we'd do that, though I don't think it'll be that different from SQL.

// Of rather more importance to me is how we make sure unauthorized parties don't edit or delete information for fun. It's a problem we considered on my last project, but without much success. If the goal here is to be helpful, then we have no choice but to be fastidious with maintenance. The idea of giving every user unrestricted access to my database gives me the shivers.

// As to the keyword issue, we'll build a keyword database that's associated with the jobs database. Each jobs could have many keywords. I would prefer to provide a list of keywords for users to choose from, but I think I can standardize user input in the front end, removing some of the concerns. I would much prefer to know that the jobs CRUD functions are working before we do that, so it's moot. That's our next goal.

module.exports = router;
