const router = require('express').Router();
const {} = require();

//get all locations
router.get('./', async (req, res) => {
    try {
        const locationData = await Location.findAll ({
            include: [{model: Traveller }],
        });
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// get a single location
router.get('/:id', async (req, res) => {
    try {
      const locationData = await Location.findByPk(req.params.id, {
        include: [{ model: Traveller }],
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No location found with that id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
       
// create a location
router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create({
            traveller_id: req.body.traveller_id,
        });
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete a location
router.delete('./:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!locationData) {
            res.status(404).json({ message: "No location with that id found"});
            return;
        }
        res.status(200).json(libraryCardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  
