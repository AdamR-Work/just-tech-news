const router = router('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    //Access our User model and run .findAll()method)
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

//GET /api/users/1
router.get('/:id', (req,res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err=> {
        console.log(err);
        res.json(500).json(err)
    })
});
// POST api/users
router.post('/', (req,res) => {
    //expects {username:'adam', email: ' atwork@work.com', password:!@#}
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData=> res.json(dbUserData))
    .catch(err=> {
        console.log(err);
        res.status(500).json(err);
    });
});
//  api/users/1
router.post('/:id', (req,res) => {
        //expects {username:'adam', email: ' atwork@work.com', password:!@#}
        

        // if req.body has exact key value pairs to match the modle you can just use req.body instead
        User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData=> {
            if(!dbUserData[0]){
                res.status(404).json({messsage: 'No user found with this id'});
                return;
            }
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json(err);
        });

});
// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;