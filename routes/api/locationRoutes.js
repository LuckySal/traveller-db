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

// delete a location