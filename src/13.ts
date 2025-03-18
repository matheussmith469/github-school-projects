  const findUser = async(req, res) => {
    try{
      const user = await User.findOne({email : req.body.email});
      if(!user){
        throw new Error('Invalid email or password');
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if(!isMatch){
        throw new Error('Invalid email or password');
      }
      res.status(201).json({
        message: 'Successfully signed in',
        userId: user._id
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        message: error.message,
      })
    }
  };